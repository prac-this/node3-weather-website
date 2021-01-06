const request = require('request')


const geocode =  (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoidGhpc2lzcHJhZGVlcDk2IiwiYSI6ImNramlueXZ6czNwcmsycHJ1MTFocG5wYnkifQ.ng-9tAH2JId6A6ThrMqTLA&limit=1'
    
    request({url, json: true}, (error, {body}) =>{
      if(error) {
          callback('Unable to connect to location services', undefined)
      }else if(body.features.length === 0){
          callback('Unable to find location. Try another search.', undefined)
      }else{
          callback(undefined, {
              latitude: body.features[0].center[1],
              longitude: body.features[0].center[0],
              location: body.features[0].place_name
          })
      }
    })
  }




  module.exports = geocode






























  ///Second Step
//   const request = require('request')


//   const geocode =  (address, callback) => {
//       const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoidGhpc2lzcHJhZGVlcDk2IiwiYSI6ImNramlueXZ6czNwcmsycHJ1MTFocG5wYnkifQ.ng-9tAH2JId6A6ThrMqTLA&limit=1'
      
//       request({url: url, json: true}, (error, response) =>{
//         if(error) {
//             callback('Unable to connect to location services', undefined)
//         }else if(response.body.features.length === 0){
//             callback('Unable to find location. Try another search.', undefined)
//         }else{
//             callback(undefined, {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//       })
//     }
  
  








//first
  //Geocoding
//Address -> lat/long ->weather

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoidGhpc2lzcHJhZGVlcDk2IiwiYSI6ImNramlueXZ6czNwcmsycHJ1MTFocG5wYnkifQ.ng-9tAH2JId6A6ThrMqTLA&limit=1'


// request({url: geocodeURL, json: true}, (error, response) => {

//     if(error){
//         console.log(chalk.red('Unable to Connect location services'))
//     }else if(response.body.features.length === 0){
//         console.log(chalk.redBright('Unable to find location'))
//     }else{
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]

//     console.log(latitude, longitude)
//     }
    
// })



