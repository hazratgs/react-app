import createMenu from './menu'
import s from './style.css'
import image from './photo_2016-12-08_12-18-24.jpg'

const menu = createMenu(['Главная', 'Обо мне', 'Портфолио', 'Контакты', 'Соц. сети', 'Работы', 'Мех']);
menu.classList.add(s.app);

const img = document.createElement('img')
img.src = image

document.body.appendChild(menu);
document.body.appendChild(img);