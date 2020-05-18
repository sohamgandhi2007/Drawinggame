function eraser () 
     { 
         this.mousedown = function (e)  
         { 
             ctx.beginPath(); 
             ctx.moveTo(x, y); 
             boolMouseDown = true;     
         } 
           
         this.mousemove = function (e)  
         { 
             if (boolMouseDown)  
             { 
             ctx.lineTo(x, y); 
             ctx.strokeStyle = "#FFFFFF"; 
             ctx.stroke(); 
             }   
         } 
           
         this.mouseup = function (e)  
         { 
             if (boolMouseDown)  
             { 
              tool.mousemove(e); 
              boolMouseDown = false; 
             }   
         } 
     }