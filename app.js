// define variables

const btn = document.querySelector('#btn');
const job = document.querySelector('#job');
const location = document.querySelector('#location');

const form = document.querySelector('#form');

const API_ID =
const API_KEY =

const data ={

},

// event listener
btn.addEventListener('click', () => {

});



//fetch
//input box

const myResults = document.getElementById('my-job-result');
const myResultsModern = document.querySelector('#my-job-result')

// data -> 10
// loop

data.forEach( item => {
    console.log()
    const divJobs = document.createElement('div')
    divJobs.innerHTML = '<h2>${item.jobtitle}</h2> <p>@{item.date}</p>'

    myResults.appendChild(divJobs)
})