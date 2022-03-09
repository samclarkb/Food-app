import { detect } from './barcode.js'

// Activating the camera and disable the button when the camera is active
export const scanButton = () => {
	const scanner = document.querySelector('button')
	scanner.addEventListener('click', detect)
	scanner.addEventListener('click', function () {
		scanner.disabled = true // disables the button so you can't use it again while the camera is enabled
	})
}

// enbales the button when the product information was
export const enableButton = () => {
	const scanner = document.querySelector('button')
	console.log(scanner)
	scanner.disabled = false
}
