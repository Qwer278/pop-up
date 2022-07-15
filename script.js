$(document).ready(function(){
    $('#usernamevalidation').hide();
$('#emailvalidation').hide();
$('#submitvalidation').hide();

var Error=true;
var email_error=true;


var count=0;
$('.clicks').on('click',function(){
    if(count%2==0 || count==0){
    count=count+1;
    $(".one").css("visibility", "visible");
    }
    else{ 
        count=count+1;
        $('.one').css("visibility","hidden");
    }
    
    
});

$('#button').on('click',function(){
    count=count+1
    $('.one').css("visibility","hidden");
});
$('#username').keyup(function(){
    username_validation();
    });
    function username_validation(){
        var username_val=$('#username').val();
        if(username_val.length==""){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Cannot be empty');
            $('#usernamevalidation').css('color','red'); 
            Error=false;
         return false;   
        }
        else{$('#usernamevalidation').hide();
    
           }   
        if(username_val.length<3||username_val.length>10){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Cannot be less than 3 or more than 10');
            $('#usernamevalidation').css('color','red'); 
            Error=false;
            return false;
    
        }
        else{$('#usernamevalidation').hide();
    
    } }
        $('#email').keyup(function(){
            email_validation();
            });


            function email_validation()
{
    var email=$('#email').val();
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.length==""){
    $('#emailvalidation').show();
    $('#emailvalidation').html('Email Cannot be empty');
    $('#emailvalidation').css('color','red'); 
    email_error=false;
 return false;   
}
else{$('#emailvalidation').hide();

   }
if(!email.match(mailformat))
{    $('#emailvalidation').show();
$('#emailvalidation').html('Invalid');
$('#emailvalidation').css('color','red'); 
email_error=false;
return false;   


}
else
{  $('#emailvalidation').hide();

}
}

$('.submission').on('click',function(){
    if(!username_validation()&&!email_validation()){
        $('.one').css("visibility","hidden");
    }
    else{
        $('#submitvalidation').show();
        $('#submitvalidation').html('Invalid');
        $('#submitvalidation').css('color','red'); 
    }
   
});


});
