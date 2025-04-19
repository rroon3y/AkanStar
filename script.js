document.querySelector("#akan-form").addEventListener("submit", function(event) {
    event.preventDefault();


const day = parseInt(document.querySelector("#day").value);
const month = parseInt(document.querySelector("#month").value);
const year = parseInt(document.querySelector("#year").value);
const gender = document.querySelector("input[name='gender']:checked").value;

console.log("Day:", day, "Month:", month, "Year:", year, "Gender:", gender);

// Validation
if (day < 1 || day > 31 || month < 1 || month > 12 || year <= 0){
    alert("Please enter a valid date.");
    return;
}

if (!gender) {
    alert("Please select a gender.");
    return;
}

// Manual day of week calculation
const CC = Math.floor(year / 100);
const YY = year % 100;
const MM = month;
const DD = day; 

// Formula: ( ( (CC/4 - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD ) mod 7 )
let dayIndex = Math.floor(
    ((CC / 4 - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD)
  ) % 7;

  if (dayIndex < 0) {
    dayIndex += 7;
  }

  console.log("Calculate Day Index:", dayIndex);

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const akanName = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];

  console.log("Akan Name:", akanName);

  const result = `You were born on a ${daysOfWeek[dayIndex]}. Your Akan name is <strong>${akanName}</strong>!`;
  document.querySelector("#result").innerHTML = result;

});
