function myFunction() {
    var x = document.getElementById("mobileNav");
    if (x.style.display === "none") {
    x.style.display = "block";
   } else {
    x.style.display = "none";
  }
        
    }

    // Dette javascript er generelt meget simpelt. Når man ryger i mobil-størrelse, så skal
    // en burger-menu icon poppe op og gøre det muligt for at lukke/åbne hele mobil-nav'en.