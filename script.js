
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navItems = document.getElementById("nav-items");

    hamburger.addEventListener('click',()=>{
        navItems.classList.toggle("active");
        hamburger.classList.toggle("fa-xmark");
        hamburger.classList.toggle("fixed");
        
    })

    const navLinks = navItems.querySelectorAll("li");
    navLinks.forEach((link)=>{
      link.addEventListener('click',()=>{
        navItems.classList.remove("active");
         hamburger.classList.remove("fa-xmark");
          hamburger.classList.remove("fa-xmark");
        hamburger.classList.remove("fixed");
      })
    })

    const scrollMap = {
        "go-features":"features-section",
        "go-join":"join-section"
    }

     Object.keys(scrollMap).forEach(navId => {
        const navItem = document.getElementById(navId);
        const targetId = scrollMap[navId];

        navItem.addEventListener("click", function () {
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });

                // Optional: Close mobile nav
                document.getElementById("nav-items").classList.remove("active");
            }
        });
    });
   
})

