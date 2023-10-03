
const gradeSelect = document.getElementById('grade');
const toleranceInputs = document.querySelectorAll('.tolerance-input');

// Define tolerance values for each grade
const toleranceValues = {
    R260: {
        L_C: { min: 0.68, max: 0.80 },
        L_Mn: { min: 0.2, max: 0.5 }
        // Add more fields and their tolerances here
    },
    880: {
        L_C: { min: 0.65, max: 0.75 },
        L_Mn: { min: 0.15, max: 0.45 }
        // Add more fields and their tolerances here
    },
    R350HT: {
        L_C: { min: 0.70, max: 0.82 },
        L_Mn: { min: 0.25, max: 0.55 }
        // Add more fields and their tolerances here
    }
};

// Initialize the tolerance based on the selected grade
updateTolerance();

// Add an event listener to update tolerance when grade changes
gradeSelect.addEventListener('change', updateTolerance);

function updateTolerance() {
    const selectedGrade = gradeSelect.value;
    const gradeTolerance = toleranceValues[selectedGrade];

    if (gradeTolerance) {
        // Loop through the toleranceInputs and update their attributes
        toleranceInputs.forEach(input => {
            const fieldName = input.id;
            const fieldTolerance = gradeTolerance[fieldName];
            if (fieldTolerance) {
                input.setAttribute('data-min', fieldTolerance.min);
                input.setAttribute('data-max', fieldTolerance.max);
            }
        });
    } else {
        // Default tolerance values if grade is not found
        toleranceInputs.forEach(input => {
            input.setAttribute('data-min', '0');
            input.setAttribute('data-max', '1');
        });
    }
}

// Add an event listener to handle input validation for all inputs
toleranceInputs.forEach(input => {
    input.addEventListener('input', () => {
        const value = parseFloat(input.value);
        const min = parseFloat(input.getAttribute('data-min'));
        const max = parseFloat(input.getAttribute('data-max'));

        if (isNaN(value)) {
            input.classList.remove('out-of-tolerance');
        } else {
            input.classList.toggle('out-of-tolerance', value < min || value > max);
        }
    });
});
