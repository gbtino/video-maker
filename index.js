const readLine = require('readline-sync')

function start() {
    const content = {}

    content.serchTerm = askAdnReturnSerchTerm()
    content.prefix = askAdnReturnPrefix()

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