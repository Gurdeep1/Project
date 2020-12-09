const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&APPID=8aabb73501855742c22364ecbdd49a6c'
    request({url, json:true},(error,{body})=>{
            if(error){
                callback('Unable to connect',undefined)
            }else if(body.cod==="400"){
                callback('Unable to find location! Try another one')
            }
            else{
                callback(undefined,body.weather[0].description +'temp : '+body.main.temp)
            }
    })
}
module.exports=forecast