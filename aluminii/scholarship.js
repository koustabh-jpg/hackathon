document.addEventListener('DOMContentLoaded', () => {

    const donateButtons = document.querySelectorAll('.donateButton');

    donateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const scholarshipType = this.getAttribute('data-type');
            handleDonation(scholarshipType);
        });
    });

    function handleDonation(type) {
        alert(`Thank you for considering a donation to ${capitalizeFirstLetter(type.replace(/([A-Z])/g, ' $1').trim())}!`);
         window.location.href = "supportInstitute.html";
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    document.getElementById('donateGeneralButton').addEventListener('click', function() {
        alert('Thank you for your generous donation! Please proceed to the payment page.');
        window.location.href = "supportInstitute.html";
    });
});

