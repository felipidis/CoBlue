console.log('Desafio Bônus')
console.log()
let word = 'coblue'
let word2 = 'Coblue'
let flag = 0
let wordConverted = ''

function conversion(word) {
	let initial = word[0]
	let conversionArray = []

	if (initial == initial.toUpperCase()) {
		flag = 1
	} else {
		flag = 0
	}

	conversionArray.push(initial)

	for (let i = 1; i < word.length; i++) {
		if (flag == 1) {
			conversionArray.push(word[i].toLowerCase())
			flag = 0
		} else {
			conversionArray.push(word[i].toUpperCase())
			flag = 1
		}
	}
	wordConverted = conversionArray.toString().split(',').join('')
	console.log(wordConverted)
}

conversion(word)
console.log()
conversion(word2)
