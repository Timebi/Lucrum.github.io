function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
};

function intPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
};

function openImg(imgs) {
  var expandImg = document.getElementById("roadmap_pic_img");
  expandImg.src = imgs.src;
  var expandImg2 = document.getElementById("roadmap_pic_img2");
  expandImg2.src = imgs.src;
  var expandImg3 = document.getElementById("roadmap_pic_img3");
  expandImg3.src = imgs.src;
  
}

$('.carousel').carousel({
  interval: false
}); 
  