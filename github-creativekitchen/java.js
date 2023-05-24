// javascript der viser at headeren ændrer sig når der bliver scrollet 100px ned af siden//

window.onscroll = function() {scrollHeader()};

function scrollHeader() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("masthead").className = "activated";
  } else {
    document.getElementById("masthead").className = "";
  }
}