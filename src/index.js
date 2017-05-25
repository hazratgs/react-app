import createMenu from './menu'
import s from './style.css'

console.log(s.app)
const menu = createMenu(['Главная', 'Обо мне', 'Портфолио', 'Контакты', 'Соц. сети', 'Работы', 'Мех'])
document.body.appendChild(menu)