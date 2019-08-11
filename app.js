const request = require('request');

/* Calling both the files in this main file i.e. app.js */
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

/* Selecting the 3rd attribute i.e. 'location' for displaying the result. */
const address = process.argv[2];
if(!address)
{
    console.log('Provide address.');
}
else
{
    /* Making use of callback functions. */
    geocode(address,(error,data)=>{
        if(error)
        {
             console.log(error);
        }
        forecast(data.latitude,data.longitude,(error,forecastData)=>{
            
            console.log(data.location+' .');
            console.log(forecastData);
        })
        
    })
}