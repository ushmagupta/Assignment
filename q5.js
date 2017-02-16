(function() {
  'use strict';
var Employees = [
    { Name: 'Aman', age: 21, salary:500 ,dob:'26-05-1993'},
    { Name: 'Sanaya', age: 22, salary:10340000 ,dob:'15-02-1994'},
    { Name: 'shreen', age: 23, salary:100000000 ,dob:'18-05-1993'},
    { Name: 'Sagar', age: 21, salary:1200000 ,dob:'21-05-1994'}
];

document.write("<b>"+"--Employee Details--"+"<br>"+"</b>");
for (var i = 0; i < Employees.length; i++)
 {

           document.write("Name:"+Employees[i].Name+"&nbsp&nbsp&nbsp");
           document.write("Age:"+Employees[i].age+"&nbsp&nbsp&nbsp");
           document.write("Salary:"+Employees[i].salary+"&nbsp&nbsp&nbsp");
           document.write("Dob:"+Employees[i].dob+"<br><br>");

}

document.write("<b>"+"Filter all employees with salary greater than 5000"+"<br>"+"</b>");
for (var i = 0; i < Employees.length; i++)
{
       if(Employees[i].salary > 5000)
            document.write(Employees[i].Name+"<br>");

}

var obj = { };
for (var i = 0, j = Employees.length; i < j; i++) {
       obj[Employees[i].age] = (obj[Employees[i].age] || 0) + 1;
}
document.write("<b>"+"Group employee on the basis of their age"+"<br>"+"</b>");
for(var j in obj) {
 document.write(" Age "+j+" count "+obj[j]+"<br>");
}

document.write("<b>"+"Employees with salary less than 1000 and age greater than 20 after increment"+"<br>"+"</b>");
for (var i = 0; i < Employees.length; i++)
 {
      if(Employees[i].salary < 1000 && Employees[i].age >20)
  	{
	        Employees[i].salary=Employees[i].salary*5;

             document.write("Name:"+Employees[i].Name+"<br>");
             document.write("Age:"+Employees[i].age+"<br>");
             document.write("Salary:"+Employees[i].salary+"<br>");
             document.write("Dob:"+Employees[i].dob+"<br><br>");
	}
}



}());
