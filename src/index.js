import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

const content = document.getElementById('content');
const nav = document.createElement('nav');

function handleNavClick(btn, loadFunction) {
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  clearAndLoad(loadFunction);
}

const homeBtn = document.createElement('button');
homeBtn.textContent = 'Главная';
homeBtn.onclick = () => handleNavClick(homeBtn, loadHome);

const menuBtn = document.createElement('button');
menuBtn.textContent = 'Меню';
menuBtn.onclick = () => handleNavClick(menuBtn, loadMenu);

const contactBtn = document.createElement('button');
contactBtn.textContent = 'Контакты';
contactBtn.onclick = () => handleNavClick(contactBtn, loadContact);

nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);
content.appendChild(nav);

const pageContent = document.createElement('div');
pageContent.id = 'page-content';
content.appendChild(pageContent);

function clearAndLoad(loadFunction) {
  pageContent.innerHTML = ''; 
  
  const originalGetElementById = document.getElementById;
  document.getElementById = (id) => {
    if (id === 'content') return pageContent;
    return originalGetElementById.call(document, id);
  };
  
  loadFunction(); 
  
  document.getElementById = originalGetElementById; 
}

// Устанавливаем активный класс для главной по умолчанию и загружаем её
homeBtn.classList.add('active');
clearAndLoad(loadHome);