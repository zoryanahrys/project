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

$('#calendarLink').click(function (){
     $('#friends').hide();
     $('#forum').hide();
     $('#calendar').show();
     $('#calendarLink').addClass('activeLink');
     $('#friendsLink').removeClass('activeLink');
     $('#forumLink').removeClass('activeLink');
});

$('#friendsLink').click(function (){
     $('#friends').show();
     $('#forum').hide();
     $('#calendar').hide();
     $('#calendarLink').removeClass('activeLink');
     $('#friendsLink').addClass('activeLink');
     $('#forumLink').removeClass('activeLink');
});

$('#forumLink').click(function (){
     $('#friends').hide();
     $('#forum').show();
     $('#calendar').hide();
     $('#calendarLink').removeClass('activeLink');
     $('#friendsLink').removeClass('activeLink');
     $('#forumLink').addClass('activeLink');
});

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
       $('#postalAddress').val().length !=0 &&
       $('#agree').is(':checked')
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

$('#activeUser').click(function(){
	$('#userProfileMenu').toggle('slow');
    $('#activeUser').toggleClass('active');
    return false;
	});
