jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

document.getElementById("username").addEventListener("click", myFunction);
document.getElementById("password").addEventListener("click", myFunction2);
document.getElementById("email").addEventListener("click", myFunction3);

function myFunction() {
  if (document.getElementById("username").className == "inactive") {
    document.getElementById("username").className ="active";
  }
  else {
    document.getElementById("username").className ="inactive";
  }
}

function myFunction2() {
  if (document.getElementById("password").className == "inactive") {
    document.getElementById("password").className ="active";
  }
  else {
    document.getElementById("password").className ="inactive";
  }
}

function myFunction3() {
  if (document.getElementById("email").className == "inactive") {
    document.getElementById("email").className ="active";
  }
  else {
    document.getElementById("email").className ="inactive";
  }
  
function myFunction4() {
  document.getElementById("form").reset();
}

}