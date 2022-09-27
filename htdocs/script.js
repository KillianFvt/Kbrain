var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("logoNav").style.top = "10px";
  } else {
    document.getElementById("navbar").style.top = "-75px";
    document.getElementById("logoNav").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

//TODO : make element K animate on appearing 