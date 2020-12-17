const baseURL = 'https://api.nasa.gov/planetary/apod';
const key = '8rlDfoenZLgm3OPhCsCnzXiyTzhIivmrBfObBOrX';

const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const moreInfoBtn = document.querySelector('.btn');
const modalBody = document.querySelector('.modal-body');
const modalTitle = document.querySelector('.modal-title');

fetch(`${baseURL}?api_key=${key}`)
.then(response => response.json())
.then(json => displayImage(json));

function displayImage(spaceObject) {
    console.log(spaceObject); 
        
    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = spaceObject.hdurl;

    let title = document.createElement('h1');
    title.className = 'card-title';
    title.innerText = spaceObject.title
    title.style = 'font-family: space-age;';

    let date = document.createElement('p');
    date.className = 'card-text';
    date.innerText = spaceObject.date;
    date.style.fontFamily = 'kiona-regular';

    let expl = document.createElement('p');
    expl.innerText = spaceObject.explanation;
    expl.style.fontFamily = 'kiona-regular';

    moreInfoBtn.style.fontFamily = 'kiona-regular';

    modalTitle.innerText = spaceObject.title;
    modalTitle.style.fontFamily = 'space-age';

    card.insertBefore(img, cardBody);
    cardBody.insertBefore(title, moreInfoBtn);
    cardBody.insertBefore(date, moreInfoBtn);
    modalBody.appendChild(expl);
}