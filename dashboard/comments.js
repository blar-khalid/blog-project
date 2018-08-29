
var url="http://localhost:3000/comments";
var userid=$('#userid');
var postid=$('#postid');
var body1 =$('#body1');
var tbody = $('table tbody');
function row(el){
    const tr = $('<tr>').addClass(`row${el.id}`).append([
      $('<td>').html(el.id),
      $('<td>').html(el.userid),
      $('<td>').html(el.postid),
      $('<td>').html(el.body1),
      $('<td>').append([$('<button>').attr('id', 'remove').addClass('btn btn-danger').html('delete'),
      $('<button>').attr('id', 'edit').addClass("btn btn-info").html('edit')
      ]) 
    ]);

   tbody.append(tr);
}
$('#post1').on('click',()=>{

    $.post(
        url,
        {userid:userid.val(),
         postid:postid.val(),
         body1:body1.val()   
        },
        (el)=>{
            row(el) }
    
    )

})
$(function(){
(function(){
return fetch (url)
       .then(res =>res.json())
       .then(response=>{     
        response.forEach((el, i) => {
                       row(el)
                         })

       })   
}());






})