const readLine = require('readline-sync')
const state = require('./state.js')

function robot(){
    const content = {
        maximumSentences: 7
    }

    content.serchTerm = askAdnReturnSerchTerm()
    content.prefix = askAdnReturnPrefix()
    state.save(content)

    function askAdnReturnSerchTerm() {
        return readLine.question('Type a Wikipedia search term: ')
    }
    
    function askAdnReturnPrefix() {
        const prefixes = ["Who is","What is","The history of"] 
        const selectedPrefixIndex = readLine.keyInSelect(prefixes)   
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }
}

module.exports = robot
    