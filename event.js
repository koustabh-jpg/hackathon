document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
            title: "Tech Conference 2024",
            date: "2024-10-20",
            location: "Convention Center, Downtown",
            description: "Join industry leaders to discuss the latest trends in technology."
        },
        {
            title: "Holiday Gala",
            date: "2030-12-15",
            location: "Grand Ballroom, City Hotel",
            description: "Celebrate the season with an evening of elegance and entertainment."
        },
        {
            title: "New Year Networking",
            date: "2025-01-10",
            location: "Downtown Business Center",
            description: "Kick off the new year with a powerful networking session."
        },
        {
            title: "New Year Networking",
            date: "2025-01-10",
            location: "Downtown Business Center",
            description: "Kick off the new year with a powerful networking session."
        },
        {
            title: "New Year Networking",
            date: "2025-01-10",
            location: "Downtown Business Center",
            description: "Kick off the new year with a powerful networking session."
        },
        {
            title: "New Year Networking",
            date: "2025-01-10",
            location: "Downtown Business Center",
            description: "Kick off the new year with a powerful networking session."
        },
        {
            title: "New Year Networking",
            date: "2025-01-10",
            location: "Downtown Business Center",
            description: "Kick off the new year with a powerful networking session."
        },
        {
            title: "New Year Networking",
            date: "2025-01-10",
            location: "Downtown Business Center",
            description: "Kick off the new year with a powerful networking session."
        },
        {
            title: "New Year Networking",
            date: "2025-01-10",
            location: "Downtown Business Center",
            description: "Kick off the new year with a powerful networking session."
        },
        {
            title: "New Year Networking",
            date: "2025-01-10",
            location: "Downtown Business Center",
            description: "Kick off the new year with a powerful networking session."
        },
        {
            title: "New Year Networking",
            date: "2025-01-10",
            location: "Downtown Business Center",
            description: "Kick off the new year with a powerful networking session."
        },
        // Add more events here
    ];

    const today = new Date();
    const eventsContainer = document.getElementById('events');

    events.forEach(event => {
        const eventDate = new Date(event.date);

        // Check if the event date is in the future
        if (eventDate >= today) {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');
            eventElement.innerHTML = `
                <h2>${event.title}</h2>
                <p>Date: ${eventDate.toDateString()}</p>
                <p>Location: ${event.location}</p>
                <p>Description: ${event.description}</p>
            `;
            eventsContainer.appendChild(eventElement);
        }
    });
});
