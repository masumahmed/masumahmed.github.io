//loads in sections of webpage
$("#header-placeholder").load("/core-pages/header.html");
$("#navbar-placeholder").load("/core-pages/navbar.html");
$("#carousel-placeholder").load("/core-pages/carousel.html");
$("#content-placeholder").load("/core-pages/content.html");
$("#footer-placeholder").load("/core-pages/footer.html");
$("#login-placeholder").load("/core-pages/login.html");

//copy to clip board alert for email address on contact page
function copy() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}