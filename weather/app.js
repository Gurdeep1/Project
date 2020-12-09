const request=require('request')
// const url='http://api.openweathermap.org/data/2.5/weather?q&APPID=8aabb73501855742c22364ecbdd49a6c&q=78.25,28.67'
// request({url: url,json: true},(error,response)=>{
//     if(error){
//         console.log('unable to connect to weather service!')
//     }else if(response.body.error){
//        console.log('unable to find location')
//     }
// else{
//     console.log(response.body.weather[0].description +'temp : '+response.body.main.temp)
// }
// })

const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const address=process.argv[2]
if(!address){
    console.log('Please provide an address! ')

}else{
geocode(address,(error,{latitude,longitude})=>{
    if(error){
        return console.log(error)
    }
    forecast(latitude,longitude,(error,forecastdata)=>{
        if(error){
            return console.log(error)
        }
        console.log(latitude,longitude)
        console.log(forecastdata)
 })
 
})

}