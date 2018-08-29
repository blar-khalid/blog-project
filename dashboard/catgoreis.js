var url="http://localhost:3000/categories";
var categories =$('#categories');
function row(el){
    const tbody = $('table tbody');
    const tr = $('<tr>').append([
      $('<td>').html(el.id),
      $('<td>').html(el.categories),
      $('<td>').append([$('<button>').attr('id', 'remove').addClass('btn btn-danger').html('delete'),
      $('<button>').attr('id', 'edit').addClass("btn btn-info").html('edit')
      ]) 
      
   
    ]);

   tbody.append(tr);
}
// post method
$('#post1').on('click',()=>{

    $.post(
        url,
        {categories:categories.val()
        },
        (el)=>{
            row(el)       }
    
    )

})
// get method
$(function(){
(function(){
return $.get(url, null, (data) =>{
           
        data.forEach((el, i) => {
                       row(el)
                         })
                         
          
       })   
}())





})