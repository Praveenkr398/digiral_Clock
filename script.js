function clock(){
    let hours = document.querySelector('#hr')
    let mints = document.querySelector('#min')
    let second = document.querySelector('#sec')

    let date = new Date()
    hours.innerHTML =date.getHours() 
    mints.innerHTML = date.getMinutes()
    second.innerHTML = date.getSeconds()

   
}

setInterval(clock,1000)