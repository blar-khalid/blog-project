$(function ()
{
   function getpost(){
  return  $.get('http://localhost:3000/posts', null, (data) => {
         data.forEach(data => {
    $('#content').append(
         $("<div>").addClass('card p-3 color m-3').append([
             $(`<h2 text-left>${data.title}</h2>`),
             $(`<h6 text-left>${data.username}</h6>`),
             $(`<p text-left>${data.body}</p>`),
             this.getcomments
         ]));
         })
     })}
     function getcomments (){
    return    $.get('http://localhost:3000/comments', null, (data) => {
            $(`<h6 text-left>${data.username}</h6>`),
            $(`<p text-left>${data.body}</p>`) 
         })
     }
}())


