$(document).on('click','#home-tab',function(e){
   e.preventDefault();
   $("#profile-tab").removeClass('active');
   $(this).addClass('active');
   $("#home").show();
   $("#profile").hide();
});

$(document).on('click','#profile-tab',function(e){
    e.preventDefault();
    $("#home-tab").removeClass('active');
    $(this).addClass('active');
    $("#profile").show();
    $("#home").hide();
 });


