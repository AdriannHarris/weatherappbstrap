// const { request } = require('http')
const https = require('https')
const url = ('https://api.weatherstack.com/current?access_key=6dc36778f832ad7b0baf5278f30e5d8b&query=45,-75&units=f')

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()