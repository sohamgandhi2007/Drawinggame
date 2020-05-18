function updColour()  
  { 
      var red = $("#red").slider("value") 
          ,green = $("#green").slider("value") 
          ,blue = $("#blue").slider("value") 
          ,hex = hexFromRGB(red, green, blue); 
      $("#swatch").css("background-color", "#" + hex); 
      colour = '#' + hex; 
  }