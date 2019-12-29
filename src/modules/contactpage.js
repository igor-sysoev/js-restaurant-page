
function buildContact(){
 const contentDiv = document.querySelector('#content')
 const contanctContainer = document.createElement('div')
 const contanctText = document.createElement('p')
 const contactImg = document.createElement('img')
 contactImg.src = 'img/heaven.jpg'
 contanctText.innerText = "You can find us somewhere. I really don't know. Just go right. Or left. Whatever. Go straight. Do whatever you want. Life's yours, kid. You'll find us when the time's right."
 contanctContainer.appendChild(contactImg)
 contanctContainer.appendChild(contanctText);
 contanctContainer.classList.add('contact-container')
 contentDiv.appendChild(contanctContainer);

}

export default buildContact