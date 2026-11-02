export function loadContact() {
  const content = document.getElementById('content');
  const contactDiv = document.createElement('div');

  const header = document.createElement('h1');
  header.textContent = 'Контакты';

  const address = document.createElement('p');
  address.textContent = 'Адрес: г. Москва, ул. Пирожковая, д. 10';

  const phone = document.createElement('p');
  phone.textContent = 'Телефон: +7 (999) 123-45-67';

  const hours = document.createElement('p');
  hours.textContent = 'Часы работы: ежедневно с 8:00 до 22:00';

  const social = document.createElement('p');
  social.innerHTML = 'Соцсеть: <a href="#">@crumble_cafe</a>';

  const bookBtn = document.createElement('button');
  bookBtn.textContent = 'Забронировать столик';
  bookBtn.style.marginTop = '20px';
  bookBtn.style.marginBottom = '20px';
  bookBtn.onclick = () => alert('Столик забронирован! Мы вам перезвоним.');

  contactDiv.appendChild(header);
  contactDiv.appendChild(address);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(hours);
  contactDiv.appendChild(social);
  contactDiv.appendChild(bookBtn);

  // Форма обратной связи (Задание 3.1)
  const form = document.createElement('form');
  form.innerHTML = `
    <h3>Обратная связь</h3>
    <div style="margin-bottom: 10px;">
      <input type="text" id="name" placeholder="Имя" style="padding:5px; width: 200px;" />
      <span id="name-error" style="color:red; font-size:12px; margin-left: 10px;"></span>
    </div>
    <div style="margin-bottom: 10px;">
      <input type="text" id="email" placeholder="Email" style="padding:5px; width: 200px;" />
      <span id="email-error" style="color:red; font-size:12px; margin-left: 10px;"></span>
    </div>
    <div style="margin-bottom: 10px;">
      <textarea id="message" placeholder="Сообщение" style="padding:5px; width: 300px; height: 80px;"></textarea>
    </div>
    <button type="submit">Отправить</button>
  `;

  form.onsubmit = (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    
    let isValid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    nameInput.style.borderColor = '';
    emailInput.style.borderColor = '';

    if (nameInput.value.trim().length < 2) {
      nameError.textContent = 'Минимум 2 символа';
      nameInput.style.borderColor = 'red';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = 'Некорректный Email';
      emailInput.style.borderColor = 'red';
      isValid = false;
    }

    if (isValid) {
      alert('Спасибо, ' + nameInput.value.trim() + '!');
      form.reset();
    }
  };

  contactDiv.appendChild(form);
  content.appendChild(contactDiv);
}