document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
            title: "Alumni Meet 2024",
            date: "September 10th-12th, 2024",
            location: "Heritage, Kolkata",
            formURL: "https://docs.google.com/forms/d/e/1FAIpQLSeMY1pqA8vnpINNsllHSZpkF-OuGX2fY_J7ZfvXASY2QVfXTw/viewform?usp=sf_link"
        },
        {
            title: "Tech Conference 2024",
            date: "October 20, 2024",
            location: "Heritage, Kolkata",
            formURL: "https://forms.gle/YOUR_GOOGLE_FORM_URL_1"
        }

    ];

    const eventsContainer = document.getElementById('events');

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <h2>${event.title}</h2>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <a href="${event.formURL}" class="register-btn" target="_blank">Register Now</a>
        `;
        eventsContainer.appendChild(eventElement);
    });
});
