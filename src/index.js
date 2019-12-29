
import buildHeader from './modules/header'
import buildMain from './modules/mainpage'
import buildContact from './modules/contactpage'
import buildMenu from './modules/menupage'

function removePages(){
	const contentDiv = document.querySelector("#content")
	while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
}

function initializePage(){
	buildHeader();
	buildMain();
	setEventListeners()
}

function setEventListeners(){
	
	let aboutBtn = document.querySelector('#aboutBtn')
	let menuBtn = document.querySelector('#menuBtn')
	let contactBtn = document.querySelector('#contactBtn')

	aboutBtn.addEventListener('click', () =>{
		removePages()
		buildHeader('about');
		buildMain()
		setEventListeners()
	})

	menuBtn.addEventListener('click', () =>{
		removePages()
		buildHeader('menu')
		buildMenu()
		setEventListeners()
	})

	contactBtn.addEventListener('click', () =>{
		removePages()
		buildHeader('contact')
		buildContact()
		setEventListeners()
	})
}

initializePage();


