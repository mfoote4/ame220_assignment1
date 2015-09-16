 var boxPos = [];
 for(i=0; i < 30; i++)
	boxPos[i] = "left";

var buttonClicked = function(n, easing)
{
	var id = "#button" + n.toString();
	var widthPage = $("body").width();
	var boxWidth = 150;
	if(boxPos[n] == "left")
	{
	$(id).animate({"margin-left" : widthPage - boxWidth + "px"}, 1000, easing);
	boxPos[n] = "right";
	}
	else
	{
	$(id).animate({"margin-left" : "0px"}, 1000, easing);
	boxPos[n] = "left";
	}
}
