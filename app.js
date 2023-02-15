

weather = {
  sunny:{
    temp:"70",
    url:'https://www.lovethispic.com/uploaded_images/106488-The-Sun-Setting.jpg',
    text: 'Beautiful African sunset',
  },


  rainy:{
    temp:"50",
    url:'https://media.premiumtimesng.com/wp-content/files/2021/08/freepressjournal_2021-07_eac3ac3c-ea97-47aa-a468-ace529d42d50_rain_raining_raindrops_wet_spring_summer_fall_weather_generic.jpg',
    text: 'Summer rain',
  },


  snowy: {
    temp: "-3",
    url: 'https://www.mcall.com/wp-content/uploads/migration/2021/02/01/45OCNMCYWNC7BKL7MFRGAWPOJA.jpg?w=620',
    text: 'This is cold'
},

}



 const changeSunny = () => {
 let firstpic = document.querySelector('.sImg')
 firstpic.setAttribute('src',weather.sunny.url)
//  -------------------------------------------------------
  // target blue

 let blue = document.querySelector('.tempContainer')
// -----------------------------------------------------------
  // apend Temp

 blue.innerHTML = weather.sunny.temp

// ----------------------------------------------------
    //  target green

 let green = document.querySelector('.txt')
// ----------------------------------------------------
      // append text
 green.innerHTML = weather.sunny.text
  }


  
   const changeRainy = () => {
   let firstpic = document.querySelector('.sImg')
   firstpic.setAttribute('src',weather.rainy.url)
   let blue = document.querySelector('.tempContainer')
   blue.innerHTML = weather.rainy.temp
   let green = document.querySelector('.txt')
   green.innerHTML = weather.rainy.text
  
    }

   const changeSnowy = () => {
   let firstpic = document.querySelector('.sImg')
   firstpic.setAttribute('src',weather.snowy.url)
   let blue = document.querySelector('.tempContainer')
   blue.innerHTML = weather.snowy.temp
   let green = document.querySelector('.txt')
   green.innerHTML = weather.snowy.text
    
     }



    // const changeSunny = () => {
    // let  screen = document.querySelector('.screen')
    //  let weatherImg = document.createElement('img')
    //   weatherImg.setAttribute('src',weather.sunny)
    //   // weatherImg.setAttribute('class','screenpic')
    //   screen.append(weatherImg)
      
    //  }


