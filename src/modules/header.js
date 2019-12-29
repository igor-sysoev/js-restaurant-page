
function setActive(active){
	let buttons = document.querySelectorAll('li')
	buttons.forEach(item => item.classList.remove('active'))
	switch(active){
		case 'about': aboutBtn.classList.add("active")
		break;
		case 'menu': menuBtn.classList.add("active")
		break;
		case 'contact': contactBtn.classList.add('active')
		break;
	}

}

function buildHeader(active = 'about'){

	const contentDiv = document.querySelector('#content')
	let headerDiv = document.createElement('header')
	let headerH2 = document.createElement('h2')
	let headerNav = document.createElement('nav')
	let navUl = document.createElement('ul');
	let aboutBtn = document.createElement('li')
	let menuBtn = document.createElement('li')
	let contactBtn = document.createElement('li');
	let textContainer = document.createElement('div')

	aboutBtn.textContent = 'About'
	aboutBtn.setAttribute('id', 'aboutBtn')
	menuBtn.textContent = 'Menu'
	menuBtn.setAttribute('id', 'menuBtn')
	contactBtn.textContent = 'Contact'
	contactBtn.setAttribute('id', 'contactBtn');
	headerH2.textContent = 'Spicy Java'

	navUl.appendChild(aboutBtn)
	navUl.appendChild(menuBtn)
	navUl.appendChild(contactBtn)
	headerDiv.appendChild(headerH2);
	headerNav.appendChild(navUl)
	headerDiv.appendChild(headerNav);
	contentDiv.appendChild(headerDiv);
	headerDiv.classList.add('main-nav');
	setActive(active);
	
}

export default buildHeader