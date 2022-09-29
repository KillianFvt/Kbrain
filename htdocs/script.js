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

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    console.log(entry.isIntersecting)
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('fadeOnLoadAnimation');
    }
  });
});


var fadeElements = document.querySelectorAll('.fadeOnLoad')

for (var element of fadeElements) {
  observer.observe(element);
}
