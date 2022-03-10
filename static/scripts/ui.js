import { detect } from './barcode.js'

const scanner = document.querySelector('button')

// Activating the camera and disable the button when the camera is active
export const scanButton = () => {
	scanner.addEventListener('click', detect)
	scanner.addEventListener('click', function () {
		scanner.disabled = true // disables the button so you can't use it again while the camera is enabled
	})
}

// enbales the button when the product information was
export const enableButton = () => {
	console.log(scanner)
	scanner.disabled = false
}
