document.addEventListener("click",e => {
    let tar = e.target;
    if (tar.name == "toggle")
      tar.removeAttribute("class");
  });

  function telecharge(nom) {
    var lienTelechargement = document.createElement("a");
    lienTelechargement.href = "fichiers/" + nom + ".pdf";
    lienTelechargement.download = nom + ".pdf";
    document.body.appendChild(lienTelechargement);
    lienTelechargement.click();
    lienTelechargement.addEventListener("load", function() {
      document.body.removeChild(lienTelechargement);
    });
  }
  
  document.addEventListener("keydown", function(event) {
    if (event.key === 'ArrowRight') {
      window.location.href = "projets.html";
    }
  });