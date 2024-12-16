const projects = [
  {
    title: 'Проект по чату WebCity',
    description:
      'Этот проект включает в себя создание чата, который позволяет пользователям общаться в реальном времени. Он использует технологии WebSocket для обмена сообщениями между клиентами.',
    repoUrl: 'https://github.com/SFLDisarray/WebCity',
    siteUrl: 'https://webcity.com',
    launchDate: 'Декабрь 2024',
    moreInfoUrl: 'https://github.com/SFLDisarray/WebCity',
  },
];

const projectsListContainer = document.getElementById('projects-list');

function renderProjects(projects) {
  projectsListContainer.innerHTML = '';

  projects.forEach((project) => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';

    projectElement.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <ul>
        <li>
          <a href="${project.repoUrl}" target="_blank">Репозиторий на GitHub</a>
        </li>
        <li>
          <a href="${project.siteUrl}" target="_blank">Посетить сайт</a>
        </li>
      </ul>
      <div class="project-footer">
        <span class="project-date">Дата запуска: ${project.launchDate}</span>
        <a href="${project.moreInfoUrl}" class="view-more" target="_blank">Узнать больше</a>
      </div>
    `;

    projectsListContainer.appendChild(projectElement);
  });
}

renderProjects(projects);
