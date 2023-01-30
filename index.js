function navbarhide(){
  var element = document.getElementById("mynavbar");
  if(window.innerWidth < 600){
    element.style.display = "block";
  }else{
    element.style.display = "none";
  }
}
  