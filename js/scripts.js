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
          
        } else {
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

$('#enterOffice').click(function(){
    if( $('#email').value.length>0 && $('#password').value.length>0 ){
        return true
    } else{
        return false
    }
});




