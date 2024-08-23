document.addEventListener('DOMContentLoaded', function() {
    const states = {
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
        'Goa': ['Panaji', 'Vasco', 'Margao', 'Mapusa'],
        'Kashmir': ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla'],
        
    };

    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');


    for (const state in states) {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    }

 
    stateSelect.addEventListener('change', function() {
        const selectedState = this.value;
        const cities = states[selectedState] || [];
        
        citySelect.innerHTML = '<option value="" disabled selected>Select a city</option>'; // Reset city dropdown
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    });

    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();

      
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const state = document.getElementById('state').value;
        const city = document.getElementById('city').value;

        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
        const phoneRegex = /^\d{10}$/;

        if (!username || !state || !city || !password || !confirmPassword) {
            alert('All fields are required and cannot be empty.');
            return;
        }

        if (!email && !phone) {
            alert('Please provide at least one form of contact (email or phone number).');
            return;
        }

        if (email && !emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (phone && !phoneRegex.test(phone)) {
            alert('Phone number must be 10 digits long and contain only numeric values.');
            return;
        }

        if (!passwordRegex.test(password)) {
            alert('Password must be at least 7 characters long, contain at least one capital letter, one digit, and one special character (&, $, #, @).');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

      
        alert('Registration successful!');
      
    });
});

function validatePhone() {
    var phoneInput = document.getElementById('phone');
    var phoneValue = phoneInput.value;
    var numericValue = phoneValue.replace(/\D/g, '');

    if (numericValue.length > 10) {
        numericValue = numericValue.substring(0, 10);
    }

    phoneInput.value = numericValue;

    if (numericValue.length !== 10) {
        phoneInput.setCustomValidity('Phone number must be exactly 10 digits.');
    } else {
        phoneInput.setCustomValidity('');
    }
}

function validateName() {
    var nameInput = document.getElementById('username');
    var nameValue = nameInput.value;
    var lettersOnly = nameValue.replace(/[^a-zA-Z\s]/g, '');

    nameInput.value = lettersOnly;

    if (lettersOnly.length === 0) {
        nameInput.setCustomValidity('Name must contain only letters.');
    } else {
        nameInput.setCustomValidity('');
    }
}
