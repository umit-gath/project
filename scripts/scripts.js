
// Preloader Function


$(function(){ // this replaces document.ready
    setTimeout(function(){
      $('#preloader').fadeOut('slow', function() {
        $(this).remove();
        /// for preventing scrolling
        $('body').css('overflow-y','auto');
      });
     }, 4000);
  });



    /// Navbar And Footer 
    AOS.init({once: true,});

    $(function(){
      $("#nav-placeholder").load("navbar.html");
    });

    $(function(){
      $("#footer-placeholder").load("footer.html");
    });



    /// Counters
    var counter = 0;

var x = setInterval(function() {
  var distance = 1000;

  counter = counter +1;
  document.getElementById("counter-numb1").innerHTML = counter;
  document.getElementById("counter-numb2").innerHTML = counter+20;
  document.getElementById("counter-numb3").innerHTML = counter+90;


  if (distance == counter) {
    clearInterval(x);  }
}, 50);



////Form Alert
function myFunction() {
    alert("تم ارسال النموذج !!");
  }
