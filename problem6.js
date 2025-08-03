/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var salaryNow = startingSalary;

for (var i = 1; i <= experience; i++) {
  salaryNow = salaryNow + salaryNow * 0.05;
}

var twoDecimal = salaryNow.toFixed(2);
console.log(twoDecimal);
