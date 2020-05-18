function updXY(e) 
{ 
    var elem = e.target ; 
    var top = 0, left = 0; 
    while (elem.offsetParent) 
          { 
             top += elem.offsetTop ; 
             left += elem.offsetLeft ;      
             elem = elem.offsetParent ; 
          } 
 
     x = e.pageX - left ; 
     y = e.pageY - top ; 
}