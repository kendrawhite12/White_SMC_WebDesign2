function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function showOutput() {
    var fnc = document.getElementById("buttonOutput")

        fnc.innerHTML="Family‎: ‎Rubiaceae <br> Scientific name: Gardenia jasminoides";
  }