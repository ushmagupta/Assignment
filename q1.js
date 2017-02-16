(function() {
  'use strict';

  
  var amount = prompt('Enter the amount');
  var interest = prompt('Enter interest rate');
  var years = prompt('Enter no of years'); 

  var si= (amount*interest*years)/100;
  alert("Simple interest is  "+si); 

  
  

}());


