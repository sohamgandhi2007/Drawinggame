function updTool () 
{ 
    var sel= $('#tools').val(); 
    switch(sel) 
      { 
          case 'pencil': 
          curTool = pencil; 
          break; 
          case 'eraser': 
          curTool = eraser; 
          break; 
      } 
}