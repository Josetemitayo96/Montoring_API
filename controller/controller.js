const request = require('request');


let urls = [{"application_name": "Sporty App", "app_endpoint": "http://sport-quiz.herokuapp.com", "type": "API"},{"application_name": "google", "app_endpoint": "http://google.com", "type": "API"},{"application_name" : "Tayo","app_endpoint": "http://tayo.com", "type": "API"},{"application_name" : "Message","app_endpoint": "https://softnethello.herokuapp.com", "type": "API"}];
class requestApi{
    getApiDetails(req, res){
        for (let i=0; i<urls.length; i++){
            request(urls[i].app_endpoint, (error, response, body) =>{
                let status = {};
                status.code = response.statusCode;
                if (status.code != '200'){
                    status.API = 'Down'
                }else{
                    status.API = 'Active'
                }    
                urls[i].status = status;
                
                if (i == urls.length - 1){
                    res.send(urls);          
                }

            })
            
           
            
          
        }
        // });
        // job.start();
    
    }
}
const checkEndpoint = new requestApi();
module.exports = checkEndpoint;
   