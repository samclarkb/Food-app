export const removeEmpty = () => {
	const emptyState = document.querySelector('section>div:nth-of-type(4)') // refers to empty state

	if (emptyState) {
		emptyState.remove() // This querySelector selects the emty state
	}
}
