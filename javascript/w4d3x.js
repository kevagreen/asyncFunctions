

//setTimeout as callback function for randomNumber, called after .5 seconds
   

            //function getRandomNumber that returns a promise
            function getRandomNumber(){
                return new Promise (resolve => {setTimeout(function(){
                    //Multiply Math.random() by 10
                   resolve (Math.random()*10);
                }, 500);
                
            });
        }

            
          
            
        
            //async function that invokes getRandomNumber and print to console
            async function callRan(){
            const num = getRandomNumber();
            console.log(num);
             }


             //call async function
             callRan();

             //asynchronous function that accepts one parameter (a city name)
             async function cityName () {
              let request = await axios.get('https://geocode.xyz/seattle?json=1').then (function(response){
                  console.log(response.data);
                  console.log(response.data.longt);
                  console.log(response.data.latt);

                })
              
            //   let response = await fetch('https://geocode.xyz/seattle?json=1').then (function response() {
            //      return response.text();
            //     }) .then  (data => {
            //         console.log(data);
            //     }  )        
             };
            
             cityName();
    





//create starwars function make it async (waiting on a promise)
//try is similar to a promise, if it does not return a promise, it'll catch an error msg
// async function starwars(){
//     try{
//         const response = await axios.get('https://swapi.dev/api/planets')
//         console.log(response);
//     } catch (error){
//         console.log(error);
//     }
// }

//call starwars function, after try block returns a response or promise is received
//starwars().then((res)=>console.log(res))


//async function sayThings(){
    //     return 'hello all'
    // }
    // sayThings().then((val)=>{
    //     console.log('promise',val)
    // })
    // fetch('https://swapi.dev/api/planets/')
    //     .then((res)=>{
    //        res.json().then((data)=>{
    //            for(let planet of data.results){
    //             console.log(planet.name)
    //            }
    //        })
    //     })
    //axios.get('https://swapi.dev/api/planets/')
    // .then((res)=>{
    //     console.log(res)
    // })
    