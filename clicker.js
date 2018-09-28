var pos=0;
var neg=0;

$("body").on("keydown", function(event)
{
  if (event.which == 65)
  {
    pos+=1;
    $("#click-display").text(" +" + pos + " " + "-" + neg);
  }
  else if (event.which == 76)
  {
    neg+=1;
    $("#click-display").text(" +" + pos + " " + "-" + neg);
  }
  else if (event.which == 48)
  {
    neg+=1;
    $("#click-display").text(" +" + 0 + " " + "-" + 0);
  }
});
