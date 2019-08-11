const request = require('request')

/* Creating a new ES6 callback function 'forecast' */
const forecast = (latitude,longitude,callback)=>{

    /* Fetching API from 'api.darksky.net' */
    const url = 'https://api.darksky.net/forecast/1f77aabe7ca471d8695c14fb1523e10a/'+latitude+','+longitude +'?units=si';

    /* Using REQUEST method for HTTP calls*/ 
    request ({url , json : true},(error,response)=>{
        
        /* If there is an network error, */
        if(error)
        {
            callback('Error',undefined);
        }

        /* If the desired attribute doesnot exists in API call. */
        else if(response.body.error)
        {
            callback('Unable to find location.',undefined);
        }
        
        /* Displaying the content of API. */
        else
        {
            callback(undefined,
                    response.body.daily.data[0].summary +
                    ' Maximum temperature is ' + response.body.daily.data[0].temperatureMax + ' degrees .' +
                    ' Minimum temperature is ' + response.body.daily.data[0].temperatureMin + ' degrees .' +
                    ' Chances of rain is ' + response.body.daily.data[0].precipProbability  + '.' 
                )
        }
    })
}

/* Encapsulating the code so that it can be used in other files as well. */
module.exports = forecast;