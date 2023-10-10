// Declaración
function calculateAge(year) {
  const age = 2023 - year;
  return age;
}

function yearsUntilRetirement(year, name) {
  const age = calculateAge(year);
  const retirement = 65 - age;
  console.log(name + " retires in " + retirement + " years.");
}

// Ejecución
yearsUntilRetirement(1990, "Mauricio");
