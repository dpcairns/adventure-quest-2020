import quests from '../data.js';

const ul = document.querySelector('ul');

// i want to put every quest on the page as a link
quests.forEach(quest => {
    const link = document.createElement('a');

    link.textContent = quest.title;

    ul.append(link);
});