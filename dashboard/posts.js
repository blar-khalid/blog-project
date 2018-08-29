var url="http://localhost:3000/posts";
var title=$('#title');
var body1=$('#body1');
var userid=$('#userid');
var categories =$('#categories')

function row(el){
    const tbody = $('table tbody');
    const tr = $('<tr>').append([
      $('<td>').html(el.id),
      $('<td>').html(el.title),
      $('<td>').html(el.body1),
      $('<td>').html(el.userid),
      $('<td>').html(el.categories),
      $('<td>').append([$('<button>').attr('id', 'remove').addClass('btn btn-danger').html('delete'),
      $('<button>').attr('id', 'edit').addClass("btn btn-info").html('edit')
      ]) 
      
   
    ]);

   tbody.append(tr);
}
$('#post1').on('click',()=>{

    $.post(
        url,
        {title:title.val(),
         body1:body1.val(),   
        userid:userid.val(),
        categories:categories.val()
        },
        (el)=>{
            row(el)       }
    
    )

})
$(function(){
(function(){
return $.get(url, null, (data) =>{
           
        data.forEach((el, i) => {
                       row(el)
                         })
                         
          
       })   
}())





})