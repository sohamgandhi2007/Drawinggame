$("#red, #green, #blue").slider({ 
    range: "min", 
    min: 0, 
    max: 255, 
    value: 127, 
    slide: updColour, 
    change: updColour 
}); 

$("#width").slider({ 
    range: "min", 
    min: 1, 
    max: 50, 
    value: 10, 
    slide: updWidth, 
    change: updWidth, 
});
