import { getData } from './fetch.js'
import { enableButton } from './ui.js'
import { loadingState, removeLoadingState } from './loadingState.js'

export async function detect() {
	const barcodeDetector = new BarcodeDetector()
	const list = document.querySelector('main>div:nth-of-type(2)>div:nth-of-type(1)')
	let itemsFound = []
	const mediaStream = await navigator.mediaDevices.getUserMedia({
		video: { facingMode: 'environment' },
	})

	let barcodeValue

	const video = document.createElement('video')
	video.srcObject = mediaStream

	loadingState()
	await video.play()
	removeLoadingState()

	list.append(video)

	function render() {
		barcodeDetector
			.detect(video)
			.then(barcodes => {
				barcodes.forEach(barcode => {
					if (!itemsFound.includes(barcode.rawValue)) {
						itemsFound.push(barcode.rawValue)
						barcodeValue = barcode.rawValue
						getData(barcodeValue)
						video.remove()
						window.location.hash = barcodeValue
						enableButton()
						console.log(document.querySelector('main>div:last-of-type'))
						document.querySelector('main>div:last-of-type').classList.add('laatZien')
						document.getElementById('resultaten').scrollIntoView()
						document
							.querySelector('main>div:nth-of-type(2)>div:nth-of-type(4)')
							.remove()
					}
				})
			})
			.catch(console.error)
	}

	const renderLoop = () => {
		requestAnimationFrame(renderLoop)
		render()
	}
	renderLoop()
}

export const renderProduct = barcodeHash => {
	dataOphalen(barcodeHash)
	document.getElementById('resultaten').scrollIntoView({ block: 'end' })
}

// Source: https://daily-dev-tips.com/posts/detecting-barcodes-from-the-webcam/
