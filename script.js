var year1 = $('#byear');
var year2 =$('#pyear');



$('.cal').bind("click",function()
{

var sel = $('#month1');
var sel2 = $('#month2');

var sel3 = $('#date1');
var sel4 = $('#date2');
var resd = date(sel3.val(),sel4.val());
var resm = month(sel.val(),sel2.val());
  var result = year2.val()-year1.val();
  $("#age").html("your age is: " + result+" years " + resm +" months " +resd +" days");

});



function date(date1,date2)
{
  var res;

  if(date1>date2)
  {
    res=date1-date2;
  }
  else if(date1<date2)
  {
    res = (date1-date2)+30;
  }
  else{
    res = 0;
  }
  return res;
}
function month(month1,month2)
{
  var monval;
  var monval2;
  if(month1 == 'january')
  {
    monval = 1;
  }
  else if(month1 == 'febuary')
  {
    monval = 2;
  }
  else if(month1 == 'march')
  {
    monval = 3;
  }
  else if(month1 == 'april')
  {
    monval = 4;
  }
  else if(month1 == 'may')
  {
    monval = 5;
  }
  else if(month1 == 'june')
  {
    monval = 6;
  }
  else if(month1 == 'july')
  {
    monval = 7;
  }
  else if(month1 == 'august')
  {
    monval = 8;
  }
  else if(month1 == 'september')
  {
    monval = 9;
  }
  else if(month1 == 'october')
  {
    monval = 10;
  }
  else if(month1 == 'november')
  {
    monval = 11;
  }
  else if(month1 == 'december')
  {
    monval = 12;
  }
  if(month2 == 'january')
  {
    monval2 = 1;
  }
  else if(month2 == 'febuary')
  {
    monval2 = 2;
  }
  else if(month2 == 'march')
  {
    monval2 = 3;
  }
  else if(month2 == 'april')
  {
    monval2 = 4;
  }
  else if(month2 == 'may')
  {
    monval2 = 5;
  }
  else if(month2 == 'june')
  {
    monval2 = 6;
  }
  else if(month2 == 'july')
  {
    monval2 = 7;
  }
  else if(month2 == 'august')
  {
    monval2 = 8;
  }
  else if(month2 == 'september')
  {
    monval2 = 9;
  }
  else if(month2 == 'october')
  {
    monval2 = 10;
  }
  else if(month2 == 'november')
  {
    monval2 = 11;
  }
  else if(month2 == 'december')
  {
    monval2 = 12;
  }
  var res;
  if(monval>monval2)
  {
    res = monval-monval2;
  }
  else if(monval<monval2)
  {
    res = monval2-monval;
  }
  else{
    res =0;
  }
  return res;
}


function myFunction(selector)
{
    var i;
    for (i=1;i<=31;i++){
      selector.options[i-1] = new Option(i,i);
    }
}
myFunction(document.getElementById("date1"));
function myFunction(selector)
{
    var i;
    for (i=1;i<=31;i++){
      selector.options[i-1] = new Option(i,i);
    }
}
myFunction(document.getElementById("date2"));
