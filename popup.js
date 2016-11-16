var colors = ["#eef7fa","#faeeee","#f5faee","#f7f6fc"];
index = Math.floor(Math.random()*4);
$(document).ready(function(){
	
 	$("body").css("background-color",colors[index]);
 	




 	if(localStorage.getItem('todo')){
 		$("#list").html(localStorage.getItem('todo'));
 	}
 	$(document).on('click','.button',function() {
 		var item = $("#item").val();

        if (item.length>0){
     	  $("#list").append(" <div class='listitem'> <button type='button' class='delete'> &#x2717; </button>"+ " " + item +"</div>");
            $("#item").val("")
     	  list = $("#list").html();
     	  localStorage.setItem('todo',list);
          }
          return false;

    });
    $(document).on('click','.delete',function (){
        $($(this).parent()[0]).remove();
        console.log($(this).parent()[0]);
        list = $("#list").html();
        localStorage.setItem('todo',list);

    });
     $.ajax({
         type: "GET",
         url: "http://quotes.rest/qod.json?category=management",
        
        data: {
        "category": "management",
    },
        dataType: "json",

             success: function (data) {

                 quote = data["contents"]["quotes"][0]["quote"];
                 author = data["contents"]["quotes"][0]["author"];
                 console.log(quote);
                 $("body").prepend("<div class='quote'>" + quote + " <br> -- " + author + "</div>");

             },

             error: function () {
                 // error handler
                 console.log("null");
                
             }
          });
});
