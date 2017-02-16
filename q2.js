function check() {
 

  var str= document.getElementById("str").value;
  var len= str.length;
  for(var i=0;i<Math.floor(len/2);i++)
  {

  	    if (str[i] !== str[len - 1 - i]) {
           alert("false");
        }
  }
  alert("true");

}


