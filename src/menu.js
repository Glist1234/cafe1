import menuData from './menu-data.json';
import croissantImg from './images/croissant.jpg';
import tiramisuImg from './images/tiramisu.jpg';
import cheesecakeImg from './images/cheesecake.jpg';

const images = {
  "Круассан": croissantImg,
  "Тирамису": tiramisuImg,
  "Чизкейк": cheesecakeImg
};

export function loadMenu() {
  const content = document.getElementById('content');
  const menuDiv = document.createElement('div');

  // Задание 3.2: Счётчик
  let visits = localStorage.getItem('menuVisits') || 0;
  visits = Number(visits) + 1;
  localStorage.setItem('menuVisits', visits);

  const header = document.createElement('h1');
  header.textContent = 'Наше меню';
  const counter = document.createElement('p');
  counter.textContent = `Вы открывали это меню ${visits} раз`;
  counter.style.color = '#888';
  counter.style.fontStyle = 'italic';

  menuDiv.appendChild(header);
  menuDiv.appendChild(counter);

  // Задание 2.1 и 2.2: Карточки с картинками
  menuData.forEach(dish => {
    const card = document.createElement('div');
    card.style.marginBottom = '20px';
    
    if (images[dish.name]) {
      const img = document.createElement('img');
      img.src = images[dish.name];
      img.alt = dish.name;
      img.style.width = '200px';
      img.style.display = 'block';
      img.style.marginBottom = '10px';
      card.appendChild(img);
    }

    const title = document.createElement('h3');
    title.textContent = `${dish.name} — ${dish.price} ₽`;
    
    const desc = document.createElement('p');
    desc.textContent = dish.description;

    card.appendChild(title);
    card.appendChild(desc);
    menuDiv.appendChild(card);
  });

  content.appendChild(menuDiv);
}