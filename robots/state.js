const fs = require('fs')
const contentFilePath = './content.json'

function save(content) {
    const contetString = JSON.stringify(content)
    return fs.writeFileSync(contentFilePath, contetString)
}

function load() {
    const fileBuffer = fs.readFileSync(contentFilePath, 'utf-8')
    const contetJson = JSON.parse(fileBuffer)
    return contetJson
}

module.exports = {
    save,
    load
}