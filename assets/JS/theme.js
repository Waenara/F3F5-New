document.addEventListener("DOMContentLoaded", ()=>{
    init()
  })
  function init() {
    if(localStorage.getItem('theme')) {
      document.documentElement.setAttribute("theme", "dark");
    }
    else {
      document.documentElement.removeAttribute("theme");
    }
    
  }
  const toggleBtn = document.getElementById("toggle-theme");
  const toggleBtnImage = document.getElementById("imageTheme");
  toggleBtn.addEventListener("click", function() {
    if(document.documentElement.hasAttribute("theme")){
      document.documentElement.removeAttribute("theme");
      localStorage.removeItem('theme');
      toggleBtnImage.src="assets/img/sun.png";
    }
    else{
      document.documentElement.setAttribute("theme", "dark");
      localStorage.setItem('theme', 1);
      toggleBtnImage.src="assets/img/moon.png";
    }
  });

document.documentElement.removeAttribute("theme");
localStorage.removeItem('theme');

