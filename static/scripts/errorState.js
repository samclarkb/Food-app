export const productNotFound = () => {
	// Refers to the ellements within the results page
	const h2 = document.querySelector('main>article h2')
	const img = document.querySelector('main>article img')
	const h31 = document.querySelector('main>article h3')
	const h32 = document.querySelector('main>article h3:nth-of-type(2)')
	const ul1 = document.querySelector('main>article ul')
	const ul2 = document.querySelector('main>article ul:nth-of-type(2)')
	h2.innerHTML = 'product niet gevonden' // Makes sure the user knows what is happening
	img.src = './static/images/error.jpg'
	// Emties all these html ellememts because there is no data
	h31.innerHTML = ''
	h32.innerHTML = ''
	ul1.innerHTML = ''
	ul2.innerHTML = ''
}
