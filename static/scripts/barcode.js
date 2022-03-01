import { dataOphalen } from './fetch.js'
import { enableButton } from './ui.js'

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
	await video.play()

	list.append(video)

	function render() {
		barcodeDetector
			.detect(video)
			.then(barcodes => {
				barcodes.forEach(barcode => {
					if (!itemsFound.includes(barcode.rawValue)) {
						itemsFound.push(barcode.rawValue)
						barcodeValue = barcode.rawValue
						dataOphalen(barcodeValue)
						video.remove()
						enableButton()
						document.getElementById('resultaten').scrollIntoView()
						document.querySelector('main>div:nth-of-type(2)>div:last-of-type').remove()
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
