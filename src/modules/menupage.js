function buildMenuItem(name, price, img, menuContainer){
	let menuItem = document.createElement('div')
	let menuName = document.createElement('h3')
	let menuPrice = document.createElement('p')
	let menuImg = document.createElement('img')
	menuItem.classList.add('menu-item')
	menuName.innerText = name
	menuPrice.innerText = price + " $"
	menuImg.src = img
	menuItem.appendChild(menuImg)
	menuItem.appendChild(menuName)
	menuItem.appendChild(menuPrice)
	menuContainer.appendChild(menuItem)
}
function buildMenu(){
	const contentDiv = document.querySelector('#content')
	const menuContainer = document.createElement('div')
	menuContainer.classList.add('menu-container')
	buildMenuItem('apple', '32', 'img/apple.jpg', menuContainer)
	buildMenuItem('juice', '5', 'img/juice.jpg', menuContainer)
	buildMenuItem('meat', '56', 'img/meat.jpg', menuContainer)

	contentDiv.appendChild(menuContainer)
	console.log(contentDiv)
}

export default buildMenu