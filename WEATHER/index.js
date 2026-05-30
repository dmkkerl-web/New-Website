let UserInput =document.getElementById("input");
let SearchBtn =document.getElementById("searchbtn");

 let Temp =document.getElementById("Temperature");
 let Weather =document.getElementById("Weather");
 let Humidity =document.getElementById("Humidity");
 let CityName=document.getElementById("cityName");
 let windspeed =document.getElementById("wind");
 let error =document.getElementById("error");



  const ApiKey="8a458b33ba5ed586b85cbbfc0214241f";

  async function checkWeather(city){

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
    console.log("Fetching started");
    try{
             const response = await fetch(url);
             console.log(response.status);

            if(!response.ok){
                 throw new Error("City not found");
            }
            const data =await response.json();
            console.log("success,your data: ",data); 

            Temp.innerHTML=`${data.main.temp} Degrees`  ;
           Humidity.textContent=`${data.main.humidity}%`;
           CityName.innerHTML=`${data.name}`;
           Weather.innerHTML=`${data.weather[0].main}...${data.weather[0].description}`;
           windspeed.innerHTML=`${data.wind.speed}m/s`;
           error.style.display="none";
             
    }
    catch(ERROR){
        error.innerHTML=`${ERROR}`;
    }
   
    

  }
  SearchBtn.addEventListener('click',()=>{
 checkWeather(UserInput.value);
  });
