// Owl Carousel Start..................



$(document).ready(function() {
    var one = $("#one");
    var two = $("#two");

    $('#customNextBtn').click(function() {
        one.trigger('next.owl.carousel');
    })
    $('#customPrevBtn').click(function() {
        one.trigger('prev.owl.carousel');
    })
    one.owlCarousel({
        autoplay:true,
        loop:true,
        dot:true,
        autoplayHoverPause:true,
        autoplaySpeed:100,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    two.owlCarousel({
        autoplay:true,
        loop:true,
        dot:true,
        autoplayHoverPause:true,
        autoplaySpeed:100,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});








// Owl Carousel End..................



// contact send start........................ 

$('#ContacSendBtnId').click(function(){
  var contactName=$('#contactNameId').val();
  var contactMobile=$('#contactMobileId').val();
  var contactEmail=$('#contactEmailId').val();
  var contactMeg=$('#contactMegId').val();
  SendContact(contactName,contactMobile,contactEmail,contactMeg);
});

function SendContact(contact_name,contact_mobile,contact_email,contact_meg){
if(contact_name.length==0){
    $('#ContacSendBtnId').html('Name is Empty');
    setTimeout(function(){
        $('#ContacSendBtnId').html('Send');
    },1000)
  
}else if(contact_mobile.length==0){
    $('#ContacSendBtnId').html('Mobile is Empty');
    setTimeout(function(){
        $('#ContacSendBtnId').html('Send');
    },1000)
}else if(contact_email.length==0){
    $('#ContacSendBtnId').html('Email is Empty');
    setTimeout(function(){
        $('#ContacSendBtnId').html('Send');
    },1000)
}else if(contact_meg.length==0){
    $('#ContacSendBtnId').html('Message is Empty');
    setTimeout(function(){
        $('#ContacSendBtnId').html('Send');
    },1000)
}else{
    axios.post('/contactUs',{
        contact_name:contact_name,
        contact_mobile:contact_mobile,
        contact_email:contact_email,
        contact_meg:contact_meg ,
    })
    .then(function (response){
        if('status==200'){
           if(response.data==1){
            $('#ContacSendBtnId').html('Success');
            setTimeout(function(){
                $('#ContacSendBtnId').html('Send');
            },1000)
           }
        }else{
            $('#ContacSendBtnId').html('Faild');
            setTimeout(function(){
                $('#ContacSendBtnId').html('Send');
            },1000)
            console.log(response.data)
        }
        
    }).catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    
      });
}

  
}
// contact send end........................ 
