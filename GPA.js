function convertMarkToGPA(mark) {
  if (mark >= 90) return 4.0;
  else if (mark >= 85) return 3.7;
  else if (mark >= 80) return 3.3;
  else if (mark >= 75) return 3.0;
  else if (mark >= 70) return 2.7;
  else if (mark >= 65) return 2.3;
  else if (mark >= 60) return 2.0;
  else if (mark >= 50) return 1.0;
  else return 0.0;
}

document.getElementById("submitbtn").onclick = function () {
  const courses = parseInt(document.getElementById("subjects").value);

  if (isNaN(courses) || courses <= 0) {
    alert("Please enter a valid number of courses.");
    return;
  }

  const container = document.getElementById("container");
  container.innerHTML = "";

  const inputs = [];
  const credits = [];

  for (let i = 0; i < courses; i++) {
    const markLabel = document.createElement("label");
    markLabel.textContent = `Enter mark for course ${i + 1}: `;
    const markInput = document.createElement("input");
    markInput.type = "number";
    markInput.min = 0;
    markInput.max = 100;
    inputs.push(markInput);

    container.appendChild(markLabel);
    container.appendChild(markInput);
    container.appendChild(document.createElement("br"));

    const creditLabel = document.createElement("label");
    creditLabel.textContent = `Enter credit hours for course ${i + 1}: `;
    const creditInput = document.createElement("input");
    creditInput.type = "number";
    creditInput.min = 0;
    credits.push(creditInput);

    container.appendChild(creditLabel);
    container.appendChild(creditInput);
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
  }

  const calcBtn = document.createElement("button");
  calcBtn.textContent = "Calculate GPA";
  container.appendChild(calcBtn);

  calcBtn.onclick = function () {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < courses; i++) {
      const mark = parseFloat(inputs[i].value);
      const credit = parseFloat(credits[i].value);

      if (isNaN(mark) || isNaN(credit)) {
        alert(`Please enter valid mark and credit hours for course ${i + 1}`);
        return;
      }

      const gpa = convertMarkToGPA(mark);
      totalPoints += gpa * credit;
      totalCredits += credit;
    }

    const finalGPA = totalPoints / totalCredits;
    const result = document.createElement("p");
    result.textContent = `🎓 Your GPA is: ${finalGPA.toFixed(2)}`;
    container.appendChild(result);
  };
};
