
function buildMain(){
	const contentDiv = document.querySelector('#content')
	const container = document.createElement('div')
	const infoTitle = document.createElement('h2')
	const info = document.createElement('p')
	const image = document.createElement('img')
	const textContainer = document.createElement('div')
	infoTitle.textContent = 'Lorem ipsum dolor.'
	info.textContent = 
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique pariatur quo, modi numquam magni cupiditate in nesciunt minus, dolorum tenetur culpa quis quisquam sequi dolorem, alias dignissimos placeat distinctio. Consequatur.'
	image.src = 'img/restaurant.jpg'

	textContainer.appendChild(infoTitle)
	textContainer.appendChild(info)
	container.appendChild(textContainer)
	container.appendChild(image)
	container.classList.add('container-about')
	container.setAttribute('id', 'container')
	contentDiv.appendChild(container)
}


export default buildMain