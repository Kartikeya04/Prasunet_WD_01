// Start

// observer.observe(stage)

$(window).on("load",function(){
 

   setTimeout(function(){

    $("div").removeClass("pre");
  },1000);

})


$(window).on("load",function(){

  setTimeout(function(){
  $(".movetop").slideUp().slideDown();
  $(".Section2").fadeOut().fadeIn();
  },2000)
})



$("#home").on("click",function(){
  $(document).slideDown();
})
$(window).on("load",function(){
  setTimeout(function(){
    left();
  },3000)})



function left(){
  $(".moveleft").fadeOut().fadeIn();
   $(".moveleft").animate({
     left:40

   });
}
// Section4 starts

$(window).on("load",function(){
   
  setTimeout( function(){
  $(".1one").fadeIn().fadeOut();
  $(".1one").slideDown("slow");


  },2500)
})

$(window).on("load",function(){
   
  setTimeout( function(){
  $(".2two").fadeIn().fadeOut();
  $(".2two").show();
  $(".2two").hide("slow","swing");
  $(".2two").show("slow","swing");



  },3000)
})

$("")

$(window).on("load",function(){
   
  setTimeout( function(){
  $(".3three").fadeIn().fadeOut();
  $(".3three").slideDown("slow");


  },4000)
})







$(".1one").on("mouseover",function(){
  $(".1one").css("background-color","	lavenderblush");
})

$(".1one").on("mouseout",function(){
  $(".1one").css("background-color","aliceblue");
})


$(".2two").on("mouseover",function(){
  $(".2two").css("background-color","mistyrose");
})
$(".2two").on("mouseout",function(){
  $(".2two").css("background-color","aliceblue");
})


$(".3three").on("mouseover",function(){
  $(".3three").css("background-color","linen");
})



$(".3three").on("mouseout",function(){
  $(".3three").css("background-color","aliceblue");
})

// Section4 end

// Section 5
// Section 6
$(window).on("load",function(){
   
  setTimeout( function(){
  $(".first51").fadeIn().fadeOut();
  $(".first51").slideDown("slow");


  },2000)
})

// Section7
$(".submit7").on("click",function(){
  $(".feed").addClass("feed-1");
})
$(window).on("load",function(){
  left();
})


$(window).on("load",function(){
  setTimeout( function(){

    $(".lasttitle")
      .attr("visibility","hidden")
      .fadeIn()
      .fadeOut()
      .delay(500) 
      .slideUp()
      .slideDown();
      
  },2000)

  $("#invalidemail").attr("visibility","hidden");
})

// $(".submit7").on("click",function(){



 $(".submit7").on("click",function(){
  validateEmail();
 })
 $(".submit7").on("click",function(){
  DoublevalidateEmail();
 })


function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("invalidemail");
  const email = emailInput.value;


  if (email.includes("@")) {
    emailError.style.display = "none";
    
  
  } else {

    $("#invalidemail").html("Please include an @ in email address. '"+email+"' is missing an '@'");
  
    emailError.style.display = "block";
    
  }
}


function DoublevalidateEmail(){
  const emailcheck= document.getElementById("email");
  const e2=emailcheck.value;
  const e3=document.getElementById("incompleteemail");
  if(e2.charAt(e2.length-1)==="@"){
    $("#incompleteemail").html("Please enter a part following '@' . '"+e2+"' is incomplete");
      
   e3.style.display="block";
  
  }
  else{
    
   e3.style.display="none";
      
  }
}

// Scroll Effect

const Serv= document.getElementById("Services");
const Abo= document.getElementById("about");
const Port=document.getElementById("Portfolio");
const ghar=document.getElementById("home");
const Cont=document.getElementById("Contact")




$(window).on("load",function(){
   setTimeout(function(){
    Port.scrollIntoView({behavior: 'smooth'});

   },1500)
 
})



$(".po").on("click",function(){
  Port.scrollIntoView({behaviour:'smooth'})
})
$(".ser").on("click",function(){
  Serv.scrollIntoView({behaviour:'smooth'})
})
$(".contacting").on("click",function(){
  Cont.scrollIntoView({behaviour:'smooth'})
})
