// GitHub username
const username = 'ndohdhanuella';

// Function to fetch GitHub repositories
async function fetchRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        const repos = await response.json();
        displayRepos(repos);
    } catch (error) {
        console.error('Error fetching repos:', error);
        document.getElementById('projects-list').innerHTML = '<p>Unable to load projects at this time.</p>';
    }
}

// Function to display repositories
function displayRepos(repos) {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';

    repos.forEach(repo => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available.'}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;

        projectsList.appendChild(projectCard);
    });
}

// Load projects on page load
document.addEventListener('DOMContentLoaded', fetchRepos);