$(document).ready(function(){

 $("#general-ques").show();
  $("#user-ques").hide();
   $("#shipping-ques").hide();
   $("#troubleshooting-ques").hide();
$("#general").on('click', function(){
   $("#general-ques").show();
   $("#user-ques").hide();
   $("#shipping-ques").hide();
   $("#troubleshooting-ques").hide();
   });
$("#user").on('click', function(){
   $("#general-ques").hide();
   $("#user-ques").show();
   $("#shipping-ques").hide();
   $("#troubleshooting-ques").hide();
   });
$("#shipping").on('click', function(){
   $("#general-ques").hide();
   $("#user-ques").hide();
   $("#shipping-ques").show();
   $("#troubleshooting-ques").hide();
   });
$("#troubleshooting").on('click', function(){
   $("#general-ques").hide();
   $("#user-ques").hide();
   $("#shipping-ques").hide();
   $("#troubleshooting-ques").show();
   }); 
});