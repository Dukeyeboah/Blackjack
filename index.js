let player = {
    name: "Duke",
    chips: 500
}

let cards = [] // array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el") - another way of getting the content, 
//but we have to use the # to specify to the query selector that its the id called sum-el, if it was a class we would use .sum-el
//querySelector is asking the CSS selector for the id(#) called sum-el
//the getElementById specifies that its an ID in the method name. 
//CSS selectors are things like .class selector, #id selector, body, h1 etc
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    // let firstCard = getRandomCard()
    // cards.push(firstCard)
    // let secondCard = getRandomCard()
    // cards.push(secondCard) 
    // I tried this method too and it worked
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] previous doing it one by one
    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    
    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    } //for this you can just do else{}, because that takes care of all other scenarios/alternatives
    
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}


