document.querySelector('#resultButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const place = document.querySelector('select').value
    try{
        const response = await fetch(`https://fise-bmx-results-2022-api.herokuapp.com/api/${place}`)
        const data = await response.json()


        console.log(data)
        document.querySelector('h2').innerText = data.riderName

        document.querySelector('#score').innerText = `Final Score = ${data.riderFinalScore}`



    }catch(error){
        console.log(error)
    }
}



//trying to popluate a drop down menu similar to DnD Api we did
//Had to manipulate a little differently as we had a straight up object, but I was able to retreive and array of the object keys (which is the places 1st-12th) by using Object.keys :D 

fetchRiderList()
function fetchRiderList(){
  const url = `https://fise-bmx-results-2022-api.herokuapp.com/api/`

  fetch(url)
      .then(res => res.json())
      .then( obj =>{
          console.log(obj)
          console.log(Object.keys(obj))
          let place = Object.keys(obj)

          place.forEach( obj => {
            const opt = document.createElement('option')
              opt.textContent = obj
              document.querySelector('#classes1').appendChild(opt)
          

        })
      })
      .catch(err => {
        console.log(`error ${err}`)
    });
}