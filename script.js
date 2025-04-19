document.querySelector("#akan-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const day = parseInt(document.querySelector("#day").value);
  const month = parseInt(document.querySelector("#month").value);
  const year = parseInt(document.querySelector("#year").value);
  const gender = document.querySelector("input[name='gender']:checked")?.value;

  console.log("Day:", day, "Month:", month, "Year:", year, "Gender:", gender);

  // Validation
  if (day < 1 || day > 31 || month < 1 || month > 12 || year <= 0) {
      alert("Please enter a valid date.");
      return;
  }

  if (!gender) {
      alert("Please select a gender.");
      return;
  }

  // Prepare values for Zeller's Congruence
  let MM = month;
  let YY = year % 100;
  let CC = Math.floor(year / 100);
  let DD = day;

  // Adjust months Jan & Feb
  if (MM < 3) {
      MM += 12;
      YY = (year - 1) % 100;
      CC = Math.floor((year - 1) / 100);
  }

  // Zeller's Congruence
  const h = (DD + Math.floor(13 * (MM + 1) / 5) + YY + Math.floor(YY / 4) + Math.floor(CC / 4) + 5 * CC) % 7;

  const dayIndex = h;

  const maleNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
  const femaleNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];
  const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const akanName = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];

  console.log("Calculate Day Index:", dayIndex);
  console.log("Akan Name:", akanName);

  const result = `You were born on a ${daysOfWeek[dayIndex]}. Your Akan name is <strong>${akanName}</strong>!`;
  document.querySelector("#result").innerHTML = result;
});
