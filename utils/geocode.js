const request = require('request')
/* Creating a new ES6 callback function 'geocode' */
const geocode = (address,callback)=>{
    
    /* Fetching API from 'api.mapbox.com' */
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWJoaXNoZWtiYWlucyIsImEiOiJjanlzN2hhMDcwajE3M2VtaTN5NGtvNmExIn0.N0ZlROQy78C_PKmzUkzVtQ&limit=1';
    
    /* Using REQUEST method for HTTP calls*/ 
    request({url:url , json:true},(error,response)=>{
        
        /* If there is an network error, */
        if(error)
        {
            callback('Unable to connect to location services',undefined);
        }

        /* If the desired attribute doesnot exists in API call. */
        else if(response.body.features.length === 0)
        {   
            callback('Unable to find location. Try again',undefined);
        }
        
        /* Displaying the content of API. */
        else{ 
            callback(
            undefined,{
            latitude : response.body.features[0].center[1],
            longitude : response.body.features[0].center[0],
            location : response.body.features[0].place_name
        })
    }
    }   )
} 

/* Encapsulating the code so that it can be used in other files as well. */
module.exports = geocode;