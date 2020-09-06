var counter = 0;
function changeBG(){
    var imgs = [
        "url(public/images/background1_50.jpg)",
        "url(public/images/background2_50.jpg)",
        "url(public/images/background3_50.jpg)",
        "url(public/images/background4_50.jpg)"
      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 2000);


