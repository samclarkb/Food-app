export const productNotFound = () => {
	const h2 = document.querySelector('main>div:last-of-type h2')
	const img = document.querySelector('main>div:last-of-type img')
	const h31 = document.querySelector('main>div:last-of-type h3')
	const h32 = document.querySelector('main>div:last-of-type h3:nth-of-type(2)')
	const ul1 = document.querySelector('main>div:last-of-type ul')
	const ul2 = document.querySelector('main>div:last-of-type ul:nth-of-type(2)')
	h2.innerHTML = 'product niet gevonden'
	img.src = './static/images/error.jpg'
	h31.innerHTML = ''
	h32.innerHTML = ''
	ul1.innerHTML = ''
	ul2.innerHTML = ''
}
