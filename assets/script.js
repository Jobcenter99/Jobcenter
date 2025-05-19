document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    const applicationForm = document.getElementById('applicationForm');
    applicationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Application submitted successfully!');
        applicationForm.reset();
    });

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-en], [data-mn]').forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
    };

    // Example job listings
    const jobListings = [
        { title: 'Software Developer', location: 'Ulaanbaatar', description: 'Develop and maintain web applications.' },
        { title: 'Project Manager', location: 'Erdenet', description: 'Manage project timelines and deliverables.' }
    ];

    const jobListingsContainer = document.getElementById('jobListings');
    jobListings.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job-listing');
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.location}</p>
            <p>${job.description}</p>
        `;
        jobListingsContainer.appendChild(jobElement);
    });
});
