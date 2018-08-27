(function(){
   var tilte=$('#title');
   var body =$('#textarea');
   var userId =$('#id');
   var url = ' http://localhost:3000/posts';
   var newdiv=$('.newdiv');
   var comments=$('.comments');
   var content=$('.content');
   var newbutton =$('.newbutton');

   

   $("#post1").on('click',function () {  
    var postData = {tilte:'bilal', password:'4447'};
    $.post(url,
         postData,
          function (data) {
        alert("Ajax post status is " );
        
      
    });

});
 

    // Click this button to send get request with parameter.
    $("#post1").on('click', ()=> {  
      $.get(url, null, (data)=> {
        const tbody = $('table tbody');
                  data.forEach((el, i) => {
                         const tr = $('<tr>')
                             .html(`<td>${el.id}</td>
                             <td>${el.userId}</td>
                             <td>${el.title}</td>
                             <td>${el.body}</td>
                             `);
    
                         tbody.append(tr);
                     })
                
      });
  
  });
   
  }())