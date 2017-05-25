export default function (array, className = 'menu') {
  const menu = document.createElement('ul');
  menu.classList.add(className);
  menu.innerHTML = array.map(item => `<li>${item}</li>`);
  return menu
}