const readLine = require('readline-sync')
const robots = {
    text : require('./robots/texts.js')
}

async function start() {
    const content = {
        maxnumSenteces: 7
    }

    content.serchTerm = askAdnReturnSerchTerm()
    content.prefix = askAdnReturnPrefix()

    await robots.text(content)

    function askAdnReturnSerchTerm() {
        return readLine.question('Type a Wikipedia search term: ')
    }
    
    function askAdnReturnPrefix() {
        const prefixes = ["Who is","What is","The history of"] 
        const selectedPrefixIndex = readLine.keyInSelect(prefixes)   
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

    console.log(content)
}

start()