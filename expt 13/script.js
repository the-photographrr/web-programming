function random_color(){
    var color = '#';
    for (var i = 0; i < 6; i++ )
    {
    color += Math.round(Math.random())*6;
    }
    document.body.style.background= color;
   
}
 src = "script.js"