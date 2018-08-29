var url="http://localhost:3000/users";
var username=$('#username');
var email=$('#email');
var tbody = $('table tbody');
function row(el){
   
    const tr = $('<tr>').append([
      $('<td>').html(el.id),
      $('<td>').html(el.username),
      $('<td>').html(el.email),
      $('<td>').append([$('<button>').attr('id', 'removeButon').addClass('btn btn-danger mr-2').html('delete'),
      $('<button>').attr('id', 'edit').addClass("btn btn-info").html('edit')
      ]) 
      
   
    ]);

   tbody.append(tr);
}
$('#post1').on('click',()=>{

    $.post(
        url,
        {email:email.val(),
         username:username.val()
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

// $(tbody).on('click', '#removeButon', function (event) {
//     let item = $(this).closest('.row')
//                 let id = item.attr('id')
//                 const urlId = url + '/' + id;
//                item.remove()
// })
$(tbody).on('click', '#removeButon',
function delet() {
   return fetch(url, {
  method: 'DELETE',
  body: JSON.stringify( {email:email.val(),
    username:username.val()
   }),
  headers: {
    // Authorization: `token ${token}`
' Content-Type': 'application/json'
  }
}).then(res => console.log(res));
})

})