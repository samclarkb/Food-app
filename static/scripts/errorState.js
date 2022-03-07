const p = document.querySelector('main > div:last-of-type p')

export const errorState = () => {
	p.innerHTML = 'Er is geen product gevonden, probeer het nog eens'
}
