//define functions here

function getIt(){
  alert('Hey!');
}

function frameIt(){
  $("img").addClass("tasty");
}

function pressIt({
  $("form").on("keydown",function(key){
    if (key.which ===71){
      alert('You have pressed the mfn G key');
    }
  })
  
});


function sumbitIt()  {
  $("form").on("submit",function() {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){
  $("p").on("click",getIt());
  $("img").on("load",frameIt);
})