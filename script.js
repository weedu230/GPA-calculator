function generateInputs() {
    const subjectCount = parseInt(document.getElementById("subjectCount").value);
    const subjectsContainer = document.getElementById("subjectsContainer");
    const calculateButton = document.getElementById("calculateButton");

    subjectsContainer.innerHTML = "";

    if (isNaN(subjectCount) || subjectCount <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    for (let i = 1; i <= subjectCount; i++) {
        const subjectDiv = document.createElement("div");
        subjectDiv.classList.add("input-group");
        subjectDiv.innerHTML = `
            <label>Subject ${i}:</label>
            <input type="number" class="creditHours" placeholder="Credit Hours" min="1" required>
            <select class="grade" required>
                <option value="4">A</option>
                <option value="3.7">A-</option>
                <option value="3.3">B+</option>
                <option value="3">B</option>
                <option value="2.7">B-</option>
                <option value="2.3">C+</option>
                <option value="2">C</option>
                <option value="1.7">C-</option>
                <option value="1.3">D+</option>
                <option value="1">D</option>
                <option value="0">F</option>
            </select>
        `;
        subjectsContainer.appendChild(subjectDiv);
    }

    calculateButton.style.display = "block";
}

function calculateGPA() {
    const creditHours = document.querySelectorAll(".creditHours");
    const grades = document.querySelectorAll(".grade");

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < creditHours.length; i++) {
        const credits = parseFloat(creditHours[i].value);
        const grade = parseFloat(grades[i].value);

        if (isNaN(credits) || isNaN(grade)) {
            alert("Please fill out all fields correctly.");
            return;
        }

        totalPoints += credits * grade;
        totalCredits += credits;
    }

    if (totalCredits === 0) {
        alert("Total credit hours cannot be zero.");
        return;
    }

    const gpa = totalPoints / totalCredits;
    document.getElementById("result").textContent = `Your GPA is: ${gpa.toFixed(2)}`;
}
