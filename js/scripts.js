//*** aboutPage ***

function aboutPage(){
    $('#aboutPage').show();
    $('#mainPage').hide();
}

function mainPage(){
    $('#aboutPage').hide();
    $('#mainPage').show();
}



// *** albums of gallery ***

function performance(){
        $('#backstage').hide();
        $('#performance').show();
};


function backstage(){
        $('#performance').hide();
        $('#backstage').show();
};


//*** subscription ***

function isEmail(email) {
      var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
};


function mail (e){
      $('#subscribeForm').hide();
    
    var emailval = $('#email').val();
      if(!isEmail(emailval)) {
           $('#error').css('display', 'block');
           
          setTimeout(function(){
               $('#error').hide(); 
               $('#subscribeForm').show();
              $('#subscribeForm')[0].reset();
           },2000);
          
        }else{
            $('#success').css('display', 'block');
    }
  };


// **** personal office - menu****

function calendar(){
     $('#friends').hide();
     $('#forum').hide();
     $('#calendar').show();
}

function friends(){
     $('#friends').show();
     $('#forum').hide();
     $('#calendar').hide();
}

function forum(){
     $('#friends').hide();
     $('#forum').show();
     $('#calendar').hide();
}


/// ****User pages****

function userPage1(){
    $('#userPage1').show();
    $('#userPage2').hide();
    $('#userPage3').hide();
}

function userPage2(){
    $('#userPage1').hide();
    $('#userPage2').show();
    $('#userPage3').hide();
}

function userPage3(){
    $('#userPage1').hide();
    $('#userPage2').hide();
    $('#userPage3').show();
}


//**** reviews ****

$('.carousel').carousel({
  pause: 'hover',
    wrap: true
});



//**** login ****

$('#iconLogIn').click(function(){
	$('#loginForm').toggle('slow');
    return false;
	});

$('#login').click(function(){
	$('#loginForm').toggle('slow');
    return false;
	});

$('#users').click(function(){
    if( $('#useremail').val().length>0 && $('#password').val().length>0){
        
//        if($('#email').val()==='user1@gmail.com' && $('#password').val() === 'user'){
//            return true
//        } else{
//            return true
//        }
    } else{
        return false
    }
});
//var users = [
//    
//    user1 = {
//    
//    name: 'Світлана',
//    email: 'svitla@gmail.com',
//    password: 'user'
//},
//
//    user2 = {
//        name: 'Оксана',
//        email: 'oksi@gmail.com',
//        password: 'user'
//    },
//
//    user3 = {
//        name: 'Марія',
//        email: 'marig@gmail.com',
//        password: 'user'
//    }
//];


//


function checkParams() {
    if( $('#lastName').val().length !=0 && 
       $('#firstName').val().length !=0 && 
       $('#inputEmail').val().length !=0 && 
       $('#phoneNumber').val().length !=0 && 
       $('#postalAddress').val().length !=0
       
//      $('input [name="coursesRadios"]:checked').val() 
//      $('input[name="agree"]').filter(":checked").val()
    ){
        $('#registrationBtn').removeAttr('disabled');
    } else {
        $('#registrationBtn').attr('disabled', 'disabled');
    }
};

     
    
function registration(){
    $('#registration').fadeOut();
};

function registrationOk(){
    $('#registrationOk').fadeOut(function(){
    document.location.reload();
    });
};



 $(document).ready(function() { 
    $("a.fancyimage").fancybox(); 
  }); 
