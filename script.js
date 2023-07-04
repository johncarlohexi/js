const getAnswer = document.querySelectorAll(".answers")
const htmlUser = document.getElementById("userChoice")
const htmlPC = document.getElementById("computerChoice")
const getWinner = document.getElementById("checkWinner")
let pcAnswer;
let userChoice;


getAnswer.forEach((pic) => {
    pic.addEventListener("click", () => {
        htmlUser.textContent = pic.parentElement.id
        let picId = pic.parentElement.id;
        userChoice = picId
        getPcAnswer(pcAnswer)
        checkWinner(userChoice, pcAnswer)
    })
})

function checkWinner(user, pc) {
    if (user == pc) {
        getWinner.textContent = "Its a Tie!"
    }
    else if (user = "paper" && pc == "rock") {
        getWinner.textContent = "You Won!"
    } else if (user == "rock" && pc == "scissors") {
        getWinner.textContent = "You Won!"
    } else if (user == "scissors" && pc == "paper") {
        getWinner.textContent = "You Won!"
    } else {
        getWinner.textContent = "You Lose!"
    }
}

function getPcAnswer(pcChoice1) {
    pcChoice1 = Math.floor(Math.random() * 3 + 1)
        switch(pcChoice1) {
        case 1:
            pcAnswer = "rock"
            htmlPC.textContent = "rock"
            break;
        case 2:
            pcAnswer = "paper"
            htmlPC.textContent = "paper"
            break;
        case 3:
            pcAnswer = "scissors"
            htmlPC.textContent = "scissors"
            break;
        default:
    }
}

