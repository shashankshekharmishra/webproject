document.addEventListener('DOMContentLoaded', function () {
    const populate = {
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
        'Karnataka': ['Bengaluru', 'Mysuru', 'Mangalore', 'Hubli-Dharwad'],
        'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli'],
        'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur'],
        'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar'],
        'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati'],
        'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri'],
        'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra'],
        'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
        'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota'],
        'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala'],
        'Haryana': ['Gurugram', 'Faridabad', 'Panipat', 'Ambala'],
        'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur'],
        'Madhya Pradesh': ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior'],
        'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur'],
        'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur', 'Durg'],
        'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro Steel City'],
        'Assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat'],
        'Himachal Pradesh': ['Shimla', 'Dharamshala', 'Manali', 'Mandi'],
        'Uttarakhand': ['Dehradun', 'Haridwar', 'Rishikesh', 'Nainital'],
        'Goa': ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa'],
        'JammuAndKashmir': ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla']
    }
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');

    stateSelect.addEventListener('change', function () {
        const selectedState = stateSelect.value;
        citySelect.innerHTML = '<option value="">Select a city</option>';

        if (selectedState) {
            citySelect.disabled = false;
            populate[selectedState].forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        } else {
            citySelect.disabled = true;
        }
    });
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalAmount = 0
    let i = 0;
    while (i < cart.length) {
        const item = cart[i];
        totalAmount += parseFloat(item.price) * parseFloat(item.quantity);
        i++;
    }
    const totalAmountElement = document.getElementById('total-amt');
    totalAmountElement.innerHTML = totalAmount;

});
