$(document).ready(function(){

 $('.myModalButton').on("click",function(){
 	var id = $(this).attr("id");
 	var title= $(this).data("title");
	$("#modalContent").load('http://localhost:8888/drupal-7.43/node/'+id+' .field',function(response,status,xhr){

		if(status == "error"){
			console.log("error");
		}else{
	     $("#myModalLabel").html(title);
		 $("#myModal").modal();
		}
	});
 });



	
}); 