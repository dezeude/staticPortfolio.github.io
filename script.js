let menu = document.querySelector(".menu");
let isMenuOpen = false;
// document.cookie = '';

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add("visit");
      }
      // else{
      //     entry.target.classList.remove('visit');
      // }
    });
  },
  {
    threshold: 0.5,
  }
);

const sections = document.querySelectorAll("SECTION");
sections.forEach((el) => observer.observe(el));

let btn = document.getElementById("mBtn");
btn.style.display = "none";

if (document.body.clientWidth <= 990) {
  if (!isMenuOpen) {
    menu.classList.add("active");
    btn.style.display = "block";
    isMenuOpen = true;
  } else {
    menu.classList.remove("active");
    btn.style.display = "none";
    isMenuOpen = false;
  }

  menu.classList.add("active");
  btn.style.display = "block";
  isMenuOpen = true;

  menuClick();
  menuClick();
}

window.addEventListener("resize", function () {
  // function called when the window of the browser is resized
  if (document.body.clientWidth <= 990) {
    isMenuOpen = true;
    if (!isMenuOpen) {
      menu.classList.add("active");
      btn.style.display = "block";
      isMenuOpen = true;
    }
  } else {
    menu.classList.remove("active");
    btn.style.display = "none";
    isMenuOpen = false;
  }

  menuClick();
  menuClick();
});

window.addEventListener("scroll", function () {
  // function called when the user scrolls
  // console.log(isInViewport(btn));
  let nav = document.getElementById("nav");
  if (window.scrollY > 30) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
  // console.log(c.getBoundingClientRect().top + window.scrollY); // position of an element on the page, relative to the top of the page

  //Sections visit code
  // let sections = document.getElementsByTagName('SECTION');
  // // console.log('Sections: '+ sections.length);

  // for(let i = 0; i < sections.length; i++){
  //     if(isInViewport(sections.item(i).firstElementChild)){
  //         // console.log(true);
  //         sections[i].classList.add('visit');
  //     }
  //     else{
  //         // console.log(false);
  //         // sections[i].classList.remove('visit');
  //     }
  // }

  //Idea: Check if a section is visible on the page, then apply a fade in transition to it.
});

//Check the isinViewport function whenever the user clicks on

function menuClick() {
  // called when the button on the top right of the page is clicked
  let b = document.getElementById("mBtn-img");
  if (isMenuOpen) {
    isMenuOpen = false;
    menu.classList.add("active");
    b.className = "fas fa-times";
  } else {
    // opens the menu
    isMenuOpen = true;
    menu.classList.remove("active");
    btn.display = "block";
    b.className = "fas fa-bars";
  }
}

function isInViewport(element) {
  // function that determines whether an element is on the screen/viewport.
  const rect = element.getBoundingClientRect();
  // if(element.id == "about")
  // console.log(element.id);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

let theme = "SAC";
function changeThemeToUNC() {
  if (theme === "SAC") {
    document.documentElement.style.setProperty("--primary-color", "#7BAFD4");
    document.documentElement.style.setProperty("--secondary-color", "#13294b");
    document.documentElement.style.setProperty("--tertiary-color", "cyan");
    document.getElementById("navLogo").src = "images/unc-logo.png";
    document.getElementById("school-name").href = "https://www.unc.edu";
    theme = "UNC";
  } else if (theme === "UNC") {
    document.documentElement.style.setProperty("--primary-color", "crimson");
    document.documentElement.style.setProperty("--secondary-color", "black");
    document.documentElement.style.setProperty("--tertiary-color", "white");
    document.getElementById("navLogo").src = "images/logo.png";
    document.getElementById("school-name").href = "https://www.sac.on.ca/";
    theme = "SAC";
  }
  document.getElementById("school-name").innerText = theme;
}
