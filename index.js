const Name = "Rahul Bishnoi"
const college = "GLA University, Mathura"
const Roll_no = "201500543"

const date = new Date();


const tdate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();



document.getElementById("studentName").innerHTML = Name;
document.getElementById("rollno.").innerHTML = Roll_no;
document.getElementById("college").innerHTML = college;
document.getElementById("date").innerHTML = tdate;
