const request = require('request');


const forecast = (latitude, longitude, callback) => {
    const url = ('http://api.weatherstack.com/current?access_key=6dc36778f832ad7b0baf5278f30e5d8b&query=' + latitude + ',' + longitude + '&units=f')

request({ url:url, json:true}, (error, { body }) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
      } else if (body.error) {
        callback ('Unable to find location', undefined)
      } else {
        callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current. temperature + ' degrees out. But it feels like ' + body.current.feelslike + ' degrees out.')
      }
    })

}

module.exports = forecast