function util (e) 
{ 
    updColour(); 
    updTool(); 
    updWidth(); 
    updXY(e); 
    tool = new curTool(); 
    var call = tool[e.type]; 
    call(e); 
}