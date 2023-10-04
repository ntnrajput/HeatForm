
const gradeSelect = document.getElementById('grade');
const toleranceInputs = document.querySelectorAll('.tolerance-input');

// Define tolerance values for each grade
const toleranceValues = {
    R260: {
        L_C: { min: 0.62, max: 0.80 }, L_Mn: { min: 0.7, max: 1.2 }, L_P: { min: 0, max: 0.025 },
        L_S: { min: 0, max: 0.025 }, L_Si: { min: 0.15, max: 0.58 }, L_Al: { min: 0, max: 0.004 },
        L_Cr: { min: 0, max: 0.15 }, L_V: { min: 0, max: 0.030 }, L_N: { min: 0, max: 0.009 },
        H: { min: 0, max: 1.6 }, L_O: { min: 0, max: 20 }, L_Cu: { min: 0, max: 0.15 },
        L_Ni: { min: 0, max: 0.1 }, L_Mo: { min: 0, max: 0.02 }, L_Nb: { min: 0, max: 0.04 },
        L_Ti: { min: 0, max: 0.025 }, L_Sb: { min: 0, max: 0.02 }, L_Sn: { min: 0, max: 0.03 },
        L_Cu10Sn: { min: 0, max: 0.35 }, L_others: { min: 0, max: 0.25 },
        P_C: { min: 0.6, max: 0.82 }, P_Mn: { min: 0.65, max: 1.25 }, P_P: { min: 0, max: 0.025 },
        P_S: { min: 0, max: 0.03 }, P_Si: { min: 0.13, max: 0.6 }, P_Al: { min: 0, max: 0.004 },
        P_Cr: { min: 0, max: 0.15 }, P_V: { min: 0, max: 0.030 }, P_N: { min: 0, max: 0.010 },        
        H: { min: 0, max: 1.6 }, P_O: { min: 0, max: 20 }, P_Cu: { min: 0, max: 0.15 },        
        P_Ni: { min: 0, max: 0.1 }, P_Mo: { min: 0, max: 0.02 }, P_Nb: { min: 0, max: 0.04 },        
        P_Ti: { min: 0, max: 0.025 }, P_Sb: { min: 0, max: 0.02 }, P_Sn: { min: 0, max: 0.03 },        
        P_Cu10Sn: { min: 0, max: 0.35 }, P_others: { min: 0, max: 0.25 },
        UTS: { min: 880, max: 10000 }, YS: { min: 550, max: 10000 }, El: { min: 10, max: 100 },
        SH: { min: 260, max: 300},
        // Add more fields and their tolerances here
    },
    880: {
        L_C: { min: 0.60, max: 0.80 }, L_Mn: { min: 0.8, max: 1.3 }, L_P: { min: 0, max: 0.03 },
        L_S: { min: 0, max: 0.030 }, L_Si: { min: 0.1, max: 0.5 }, L_Al: { min: 0, max: 0.015 },
        L_Cr: { min: 0, max: 0.30 }, L_V: { min: 0, max: 0.01 }, 
        H: { min: 0, max: 1.6 },        
        P_C: { min: 0.6, max: 0.8 }, P_Mn: { min: 0.8, max: 1.3 }, P_P: { min: 0, max: 0.035 },
        P_S: { min: 0, max: 0.035 }, P_Si: { min: 0.1, max: 0.5 }, P_Al: { min: 0, max: 0.015 },
        P_Cr: { min: 0, max: 0.30 }, P_V: { min: 0, max: 0.01 },    
        UTS: { min: 880, max: 10000 }, YS: { min: 460, max: 10000 }, El: { min: 10, max: 100 },
        SH: { min: 260, max: 1000},
        // Add more fields and their tolerances here
    },
    R350HT: {
        L_C: { min: 0.72, max: 0.80 }, L_Mn: { min: 0.7, max: 1.2 }, L_P: { min: 0, max: 0.02 },
        L_S: { min: 0, max: 0.025 }, L_Si: { min: 0.15, max: 0.58 }, L_Al: { min: 0, max: 0.004 },
        L_Cr: { min: 0, max: 0.15 }, L_V: { min: 0, max: 0.030 }, L_N: { min: 0, max: 0.009 },
        H: { min: 0, max: 1.6 }, L_O: { min: 0, max: 20 }, L_Cu: { min: 0, max: 0.15 },
        L_Ni: { min: 0, max: 0.1 }, L_Mo: { min: 0, max: 0.02 }, L_Nb: { min: 0, max: 0.04 },
        L_Ti: { min: 0, max: 0.025 }, L_Sb: { min: 0, max: 0.02 }, L_Sn: { min: 0, max: 0.03 },
        L_Cu10Sn: { min: 0, max: 0.35 }, L_others: { min: 0, max: 0.25 },
        P_C: { min: 0.7, max: 0.82 }, P_Mn: { min: 0.65, max: 1.25 }, P_P: { min: 0, max: 0.025 },
        P_S: { min: 0, max: 0.03 }, P_Si: { min: 0.13, max: 0.6 }, P_Al: { min: 0, max: 0.004 },
        P_Cr: { min: 0, max: 0.15 }, P_V: { min: 0, max: 0.030 }, P_N: { min: 0, max: 0.010 },        
        H: { min: 0, max: 1.6 }, P_O: { min: 0, max: 20 }, P_Cu: { min: 0, max: 0.15 },        
        P_Ni: { min: 0, max: 0.1 }, P_Mo: { min: 0, max: 0.02 }, P_Nb: { min: 0, max: 0.04 },        
        P_Ti: { min: 0, max: 0.025 }, P_Sb: { min: 0, max: 0.02 }, P_Sn: { min: 0, max: 0.03 },        
        P_Cu10Sn: { min: 0, max: 0.35 }, P_others: { min: 0, max: 0.25 },
        UTS: { min: 1175, max: 10000 }, YS: { min: 560, max: 10000 }, El: { min: 9, max: 100 },
        SH: { min: 350, max: 390},
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
