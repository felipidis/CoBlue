/* Desafio CoBlue numeros de 0 a 100 */
console.log('DESAFIO')
console.log()
for (let x = 1; x <= 100; x++) {
	if (x % 3 === 0 && x % 5 === 0) {
		console.log('CoBlue')
	} else if (x % 5 === 0) {
		console.log('Blue')
	} else if (x % 3 === 0) {
		console.log('Co')
	} else {
		console.log(x)
	}
}
