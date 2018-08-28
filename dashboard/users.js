$(function(){
var url="http://localhost:3000/users";
var username=$('#username');
var email=$('#email');

$('#post1').on('click',()=>{

    $.post(
        url,
        {email:email.val(),
        name:username.val(),
        },
        (data)=>{
            alert("jjnjn")
        }
    
    )

})

(function(){
return fetch (url)
       .then(res =>res.json())
       .then(response=>{
           response.forEach(el => {
            const tbody = $('table tbody');
                       data.forEach((el, i) => {
                             const tr = $('<tr>')
                                .html(`<td>${el.id}</td>
                                 <td>${el.username}</td>
                                 <td>${el.email}</td>
                                 `);
            
                            tbody.append(tr);
                         })
           });
       })   
}())





})