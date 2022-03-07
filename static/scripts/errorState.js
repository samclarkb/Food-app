const h2 = document.querySelector('main>div:last-of-type h2')
const img = document.querySelector('main>div:last-of-type img')
const h3een = document.querySelector('main>div:last-of-type h3')
const h3twee = document.querySelector('main>div:last-of-type h3:nth-of-type(2)')

export const productNotFound = () => {
	h2.innerHTML = 'product niet gevonden'
	img.classList.add('nietLatenZien')
	h3een.classList.add('nietLatenZien')
	h3twee.classList.add('nietLatenZien')
	h2.classList.add('marginH2')
}
