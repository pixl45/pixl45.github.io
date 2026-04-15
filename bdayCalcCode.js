let bdayYear = 0;
let currentYear = 0;
let bdayMonth = 0;
let currentMonth = 0;
let year_diff = 0;
function calculate(){
  bdayYear = Number(document.getElementById("birthyear").value);
  currentYear = Number(document.getElementById("currentyear").value);
  bdayMonth = Number(document.getElementById("birthmonth").value);
  currentMonth = Number(document.getElementById("currentmonth").value);
  checkbox = Number(document.getElementById("checkbox").checked);
  year_diff = currentYear - bdayYear;
  if (currentMonth < bdayMonth || checkbox) {
    let not_yet = year_diff - 1;
    year_diff = not_yet;
  }
  
  document.getElementById("output").innerHTML = "you are " + year_diff + " years old!";
}
