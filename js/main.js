// let current_url = document.location;
//     document.querySelectorAll(".nav-bar .nav-link").forEach(function(e){
//        if(e.href == current_url){
//           e.classList += " current";
//        }
//     });

// const navLink = document.getElementById('.nav-link');

// window.onscroll = function() {
//     var top = window.scrollY;
//     console.log(top);
//     if (top < 1100) {
//         navLink.classList.add('active')
//     } else if() {
//         navLink.classList.remove('active');
//     }
// }

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};


function changeEmne1(isHover) {
    if (isHover) {
        document.getElementById('velkomst-billede').style.backgroundImage = "url('../img/analyserende.png')";
        document.getElementById('analyserende').style.display = "block";
        document.getElementById('udforsk').style.display = "none";
    } else {
        document.getElementById('velkomst-billede').style.backgroundImage = "url('../img/b1n.png')";
        document.getElementById('analyserende').style.display = "none";
        document.getElementById('udforsk').style.display = "block";
    }
}

function changeEmne2(isHover) {
    if (isHover) {
        document.getElementById('velkomst-billede').style.backgroundImage = "url('../img/farverig.png')";
        document.getElementById('farverig').style.display = "block";
        document.getElementById('udforsk').style.display = "none";
    } else {
        document.getElementById('velkomst-billede').style.backgroundImage = "url('../img/b1n.png')";
        document.getElementById('farverig').style.display = "none";
        document.getElementById('udforsk').style.display = "block";
    }
}


function changeEmne4(isHover) {
    if (isHover) {
        document.getElementById('velkomst-billede').style.backgroundImage = "url('../img/grin.png')";
        document.getElementById('glad').style.display = "block";
        document.getElementById('udforsk').style.display = "none";
    } else {
        document.getElementById('velkomst-billede').style.backgroundImage = "url('../img/b1n.png')";
        document.getElementById('glad').style.display = "none";
        document.getElementById('udforsk').style.display = "block";
    }
}

function changeEmne5(isHover) {
    if (isHover) {
        document.getElementById('velkomst-billede').style.backgroundImage = "url('../img/empatisk.png')";
        document.getElementById('empatisk').style.display = "block";
        document.getElementById('udforsk').style.display = "none";
    } else {
        document.getElementById('velkomst-billede').style.backgroundImage = "url('../img/b1n.png')";
        document.getElementById('empatisk').style.display = "none";
        document.getElementById('udforsk').style.display = "block";
    }
}

function changeEmne6(isHover) {
    if (isHover) {
        document.getElementById('velkomst-billede').style.backgroundImage = "url('../img/computerKode.png')";
        document.getElementById('ansvar').style.display = "block";
        document.getElementById('udforsk').style.display = "none";
    } else {
        document.getElementById('velkomst-billede').style.backgroundImage = "url('../img/b1n.png')";
        document.getElementById('ansvar').style.display = "none";
        document.getElementById('udforsk').style.display = "block";
    }
}