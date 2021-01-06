const request = require('request')


const forecast = (latitude, longitude, callback) => { 
    const url = 'http://api.weatherstack.com/current?access_key=046b7fd689ff1237144995a865982289&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect weather service', undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else {
            callback(undefined, body.current.weather_descriptions[0] +'. It is currently ' + body.current.temperature + ' degress out.' + ' It feels like ' + body.current.feelslike + ' degress out')
        }
    })
}


module.exports = forecast





































//Second Step

// const forecast = (latitude, longitude, callback) => { 
//     const url = 'http://api.weatherstack.com/current?access_key=046b7fd689ff1237144995a865982289&query=' + latitude + ',' + longitude + '&units=f'

//     request({url: url, json: true}, (error, response) => {
//         if(error){
//             callback('Unable to connect weather service', undefined)
//         }else if(response.body.error){
//             callback('Unable to find location',undefined)
//         }else {
//             callback(undefined, response.body.current.weather_descriptions[0] +'. It is currently ' + response.body.current.temperature + ' degress out.' + ' It feels like ' + response.body.current.feelslike + ' degress out')
//         }
//     })
// }



// const url = 'http://api.weatherstack.com/current?access_key=046b7fd689ff1237144995a865982289&query=-112'

// request({ url: url, json: true }, (error, response) => {
//    if(error){
//        console.log(chalk.red("Unable to connect to weather service"))
//    }else if (response.body.error) {
//         console.log('Unable to find location')
//    }else{
//         // console.log(response.body.current)
//      console.log(chalk.blue.inverse(response.body.current.weather_descriptions[0] +'. It is currently ' + response.body.current.temperature + ' degress out.' + ' It feels like ' + response.body.current.feelslike + ' degress out'))
//    }
// }) 
