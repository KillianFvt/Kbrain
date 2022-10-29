

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("logoNav").style.top = "10px";
  } else {
    document.getElementById("navbar").style.top = "-75px";
    document.getElementById("logoNav").style.top = "-90px";

    const pageWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    //console.log(pageWidth);
    if (pageWidth < 600) {
      closeMenu(document.getElementById("menu-toggle"));
    }
  }

  prevScrollpos = currentScrollPos;
}

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    //console.log(entry.isIntersecting)
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function loadToggleMenu(button) {
  console.log("LOADED");
  button.addEventListener("click", function(){
    toggleMenu(this);
  });
}

loadToggleMenu(document.getElementById("menu-toggle"));


function closeMenu(button) {
  
  const menu = document.getElementById("menuNav");
  const menuDown = getComputedStyle(menu).getPropertyValue("--isDown");
  
  if (menuDown == 1) {
    const buttonIcon = button.firstChild;
    const bgMenu = document.getElementById("menu-bg");
    
    buttonIcon.src = "images/menu_icon.svg";

    menu.style.top = "-300px";
    bgMenu.style.opacity = 0;
    bgMenu.style.display = "none";
    menu.style.setProperty("--isDown", 0);
    console.log("CLOSE");

  }

}

function toggleMenu(button) {
  const menu = document.getElementById("menuNav");
  const menuDown = getComputedStyle(menu).getPropertyValue("--isDown");
  const bgMenu = document.getElementById("menu-bg");


  console.log(menuDown);
  const buttonIcon = button.firstChild;

  if (menuDown == 0) {
    console.log(menuDown,"0");

    buttonIcon.src = "images/close_icon.svg";

    menu.style.top = "-40px";
    bgMenu.style.display = "block";
    bgMenu.style.opacity = 0.5;
    menu.style.setProperty("--isDown", 1);

  } else if (menuDown == 1) {

    buttonIcon.src = "images/menu_icon.svg";

    menu.style.top = "-300px";
    bgMenu.style.opacity = 0;
    bgMenu.style.display = "none";
    menu.style.setProperty("--isDown", 0);
  }
}