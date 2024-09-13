let cityName=document.getElementById("city-name")
let cityTemp=document.getElementById("city-temp")
let form=document.getElementById("form")
let apiKey="1822a77acf13009fcf0a354629b72f33"

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`
    fetch(url)
    .then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((res)=>{
        console.log(res)
        const div=document.createElement("div")
        div.classList.add("city")
        const {main,sys,name}=res
        let result=`
        <div>
        <h1>${name}</h1>
        <p>
         ${main.temp}<sup>0</sup>C
         ${sys.country}
         </p>
         </div>
         `
         div.innerHTML=result
         cityTemp.appendChild(div)
    })
})