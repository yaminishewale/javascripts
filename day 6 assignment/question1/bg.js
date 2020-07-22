$(document).redy(function()
{
var body = $('body');
var color = [
    'red',
    'green',
    'blue',
    'yellow',
];

var i = 0;
function changecolor(){
    body.css('background',color[1]);
    i=++;
    if(i>=color.length){
    	i =0;
    }
}
changecolor();

setinterval(changecolor,1000);

})