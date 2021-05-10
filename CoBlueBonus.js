console.log('Desafio Bônus')
console.log()
let word = 'coblue'
let word2 = 'Coblue'

function conversion(word) {
	let initial = word[0]
	let conversionArray = []
	let wordConverted = ''
	let flag = 0
	
	if (initial == initial.toUpperCase()) {
		flag = 1
	} else {
		flag = 0
	}
	
	//criando um array de strings com cada letra 
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
	
	// passando o array como uma string unica para a variável wordConverted
	wordConverted = conversionArray.toString().split(',').join('')
	console.log(wordConverted)
}

conversion(word)
console.log()
conversion(word2)
