# My Portfolio

- Live website -(https://www.carlospwd.com/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Play preview video for each of the project card
- See modal displaying information on project card selected
- Submit email form and send email out to the developer of the webs

## My process

### Screenshot

- The full end result of my portfolio

![carlospwd netlify app_](https://user-images.githubusercontent.com/85038929/134842106-3038347d-28ec-470e-b7cf-dc3f41b76616.png)

- Modal card displaying selected project information

![carlospwd netlify app_ (1)](https://user-images.githubusercontent.com/85038929/134842122-5fa12ef9-1afe-4af0-9056-3fa06ed9f5b6.png)

### Built with

- Semantic HTML5 markup
- CSS
- JavaScript
- BootStrap
- JQuery

### What I learned

This project was my first time implementing bootstrap and jquery into my project. I thought jquery was complex at first, but after getting the hang of its settings and reading through the documentation, I found that I saved a lot of time using this framework. I usually try to keep accessibility in mind, but bootstrap already gets that taken care of. I tried to keep animations to a minimum. I didn't want to rely on every user having above-average internet speed, and I learned that animations could be incredibly taxing on mobile devices. I used jquery to add some exciting animations into my nav settings. There were already many blogs and methods to do this, and I wanted to try it out. I'm glad I did since it made my portfolio look more professional, and I learned a lot about programming frameworks. As for the video previews, I was thinking of downloading video files, but I quickly learned that it could drastically slow down the website's loading speed. I also had a problem where I didn't want to create an individual modal for each card, so I used JSON object and for loops to pass in values depending on the card chosen. The JSON object also allowed me to add values and automatically update my project section by appending a new child. I did this using for loops.

- Here is a shortened example of how I set up my JSON object

```JavaScript
const projects =  `{
    // this portion displays on card before clicked
      "title": "",
      "image": "",
      "description": "",

    // This portion goes inside the modal window

      "live": "",
      "code": "",
        "made_with": {
            "0":"HTML",
            "1":"CSS",
            "2":"JavaScript"
        },
      "preview": "",
      "longer_description": ""
  }`

// example with values
const projects = `[
  {
      "title": "Coffee Roasters - Subscription",
      "image": "url(../img/coffeeroasters-subscription.png)",
      "description": "This is a 3-page coffee subscription website. Users should be able to: View the optimal layout for each page depending on their device's screen size, See hover states for all interactive elements throughout the site, Make selections to create a coffee subscription and see an order summary modal of their choices.",
      "live": "https://cpwd-coffeeroasters.netlify.app/",
      "code": "https://github.com/Carlos-A-P/coffeeroasters-subscription-site",
      "made_with": {
          "0":"HTML",
          "1":"CSS",
          "2":"JavaScript"
      },
      "preview": "<div style=\\"padding:82% 0 0 0;position:relative;\\"><iframe src=\\"https://player.vimeo.com/video/615312720?h=e2fb553814&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\\" frameborder=\\"0\\" allow=\\"autoplay; fullscreen; picture-in-picture\\" allowfullscreen style=\\"position:absolute;top:0;left:0;width:100%;height:100%;\\" title=\\"coffee_roasters\\"></iframe></div><script src=\\"https://player.vimeo.com/api/player.js\\"></script>\",

      "longer_description": "This was a tough challenge that tested a lot of my javascript skills and organizational skills. It was a lot more than I expected but overall a very educational experience. I learned that there are many ways to do things, but some may be much easier and efficient than others. For example, my accordion was comprised of many buttons, but I first started by using div elements along with click event listeners. I later discovered that it was very tedious to make it accessible and decided to go with buttons instead, which comprised its own challenges with inner tags. Overall, I wanted to make an app that was mainly functional and accessible, so I didn't focus too much on transitions. I enjoyed this project, and I certainly learned a lot from it."
  }
]`

```

- In this function, I gather the information that I want from the JSON object and pass it to my function where I want to make the div and append the div to the parent

```JavaScript
function displayProjects() {
    for (let i = 0; i < JSON.parse(projects).length; i++) {
        addCard(JSON.parse(projects)[i].image, JSON.parse(projects)[i].title, JSON.parse(projects)[i].description)
    }
}
displayProjects()
```

- Function for adding cards by appending it to parent div.
- This display the information and image on card selection
- Passes the information to modal with onlcick event on button with card title

```JavaScript
function addCard(card_image, card_title, card_text) {
    // create a card div
    let projectCard = document.createElement('div')
    projectCard.classList.add('card')
    // create image div to add background image for card
    let cardImage = document.createElement('div')
    cardImage.classList.add('project-img')
    cardImage.style.backgroundImage = String(card_image)
    // create card body
    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body', 'd-flex', 'flex-column')
    //create card card title
    let cardTitle = document.createElement('h3')
    cardTitle.classList.add('card-title')
    cardTitle.innerHTML = String(card_title)
    // create card textContent
    let cardText = document.createElement('p')
    cardText.classList.add('card-text')
    cardText.innerHTML = String(card_text)
    //create button
    let cardButton = document.createElement('button')
    cardButton.classList.add('btn', 'mt-auto')
    cardButton.setAttribute('type', 'button')
    cardButton.setAttribute('data-bs-toggle', 'modal')
    cardButton.setAttribute('data-bs-target', '#staticBackdrop')
    // add onclick attribute to pass in modal function to gather modal info
    cardButton.setAttribute('onClick', `modalInfo('${card_title}')`)
    cardButton.innerHTML = 'View more'
    // start assembling card div
    projectCard.appendChild(cardImage)
    projectCard.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(cardButton)

    //add card to parent div
    myProjects.appendChild(projectCard)
    {/*
    <div class="card">
        <div class="project-img"></div>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the
                card's content.</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop" onClick = 'modalInfo('card_title')'>
                View more
            </button>
        </div>
    </div>
*/}
}
```

- Function inserts the info into the modal: big description, code and live urls, and list of technologies

```JavaScript
function modalInfo(myCard) {
    let arr
    for (let i = 0; i < JSON.parse(projects).length; i++) {
        // if the card chosen is the same as the JSON title
        if (myCard === String(JSON.parse(projects)[i].title)) {
            // modal title = "title"
            modalTitle.innerText = String(JSON.parse(projects)[i].title)
            // card preview video
            cardPreview.innerHTML = JSON.parse(projects)[i].preview
            // card description = "longer_description"
            card_description.innerText = String(JSON.parse(projects)[i].longer_description)
            // href = "code"
            codeBtn.setAttribute('href', `${JSON.parse(projects)[i].code}`)
            // href = "live"
            liveBtn.setAttribute('href', `${JSON.parse(projects)[i].live}`)
            // adding "made_with" values in variable
            arr = JSON.parse(projects)[i].made_with
            let item = []
            for (let j = 0; j < Object.keys(arr).length; j++) {
                // loop through arr variable to add values in an array and join as li tags together to add inside parent ul
                item.push(`<li>${arr[j]}</li>`)
                techList.innerHTML = item.join('')
            }
        }
    }
}
```

```JavaScript

```

- In the first is a onclick function set for navigation list elements. The function adds a scroll animation and scrolls 100px above selected div
- in the second function, the navbar stays transparent when at the top of the page but will change background color once scrolled down

```JavaScript
//=========adding space above id I want href to scroll to with smooth animation

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 500);
});

//=========transparent navbar

// this basically says when user scrolls from the top 10px toggle class
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 10);
});

```

### Useful resources

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

email forum

- [Formspree](https://formspree.io/) - Formspree is a form backend, API, and email service for HTML & JavaScript forms. It's the simplest way to embed custom contact us forms.

icon page

- [Free vector icons - SVG, PSD, PNG, EPS & Icon Font](https://www.flaticon.com/) - Download Exclusive, High-Quality Content for Free, for Both Personal and Commercial Use.

## Author

- Website - [Carlos Perez](https://carlospwd.netlify.app)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
