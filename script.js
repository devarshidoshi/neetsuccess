const bar = document.querySelector(".bar");
const navLinks = document.querySelector(".navlink");
const links = document.querySelectorAll(".navlink li");
bar.addEventListener("click", () => {navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  });

    window.addEventListener("load", () => {
      if ("serviceWorker" in navigator) {
          navigator.serviceWorker.register("./service-worker.js");
      }
  });
  
   
   

