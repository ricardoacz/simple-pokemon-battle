//Life bar variables
let enemyHp = 100
let userHp = 100

//Charmander Object Code
let charmander = {}
charmander.hp - 100
charmander.scratch = 40
charmander.growl = 2
charmander.speed = 2
charmander.defense = 20

charmander.useScratch = function(){
    enemyHp = enemyHp + squirtleDefense - charmander.scratch
    


    messageBattle.innerText = 'Charmander used scratch!'

    //converting number to string and adding % sign to affect css life bar
    document.querySelector('#enemy-life').style.width = `${String(enemyHp)}%`

    //Computer's turn
    if(enemyHp > 0) {
        pcMove()
    }
    

    if(enemyHp <= 0 && userHp > 0) {
        messageFinal.innerText = 'Charmander won!'
        document.querySelector('#squirtle').style.display = 'none'
        document.querySelector('.moves').style.display = 'none'
        document.querySelector('#play-again').style.display = 'block'
        document.querySelector('#enemy-life').style.display = 'none'
        messageBattle2.style.display = 'none'
    } else if (enemyHp <= 0 && userHp <= 0){
        messageFinal.innerText = 'Tie!'
        document.querySelector('#squirtle').style.display = 'none'
        document.querySelector('#charmander').style.display = 'none'
        document.querySelector('.moves').style.display = 'none'
        document.querySelector('#play-again').style.display = 'block'
        document.querySelector('#enemy-life').style.display = 'none'
        document.querySelector('#user-life').style.display = 'none'
    }
}

//Squirtle
let tackle = 40
let tailWhip = 2
let squirtleSpeed = 1
let squirtleDefense = 20



//Variables for IDs that containt text messages during game
let messageBattle = document.querySelector('#text-message')
let messageBattle2 = document.querySelector('#text-message2')
let messageFinal = document.querySelector('#final-message')

//Click interations, charmander attacks and reset game btn
document.querySelector('#scratch').addEventListener('click', charmander.useScratch)
document.querySelector('#growl').addEventListener('click', useGrowl)
document.querySelector('#play-again').addEventListener('click', playAgain)

//Charmander
let scratch = 40
let growl = 2
let speedCharmander = 2
let charmanderDefense = 20



//Charmander's attack
// function useScratch(){
//     enemyHp = enemyHp + squirtleDefense - charmander.scratch
    


//     messageBattle.innerText = 'Charmander used scratch!'

//     //converting number to string and adding % sign to affect css life bar
//     document.querySelector('#enemy-life').style.width = `${String(enemyHp)}%`

//     //Computer's turn
//     if(enemyHp > 0) {
//         pcMove()
//     }
    

//     if(enemyHp <= 0 && userHp > 0) {
//         messageFinal.innerText = 'Charmander won!'
//         document.querySelector('#squirtle').style.display = 'none'
//         document.querySelector('.moves').style.display = 'none'
//         document.querySelector('#play-again').style.display = 'block'
//         document.querySelector('#enemy-life').style.display = 'none'
//         messageBattle2.style.display = 'none'
//     } else if (enemyHp <= 0 && userHp <= 0){
//         messageFinal.innerText = 'Tie!'
//         document.querySelector('#squirtle').style.display = 'none'
//         document.querySelector('#charmander').style.display = 'none'
//         document.querySelector('.moves').style.display = 'none'
//         document.querySelector('#play-again').style.display = 'block'
//         document.querySelector('#enemy-life').style.display = 'none'
//         document.querySelector('#user-life').style.display = 'none'
//     }
// }

//Charmander's non attacking move
function useGrowl(){
    
    if(tackle >= 10){
        tackle = tackle - growl
    } else {
        tackle = 10
    }
    
    


    messageBattle.innerText = "Charmander used growl! Squirtle's attack was reduced"

    //Computer's turn
    if(enemyHp > 0) {
        pcMove()
    }
}

//Random number (1 or 2)
function chance() {
    return Math.floor(Math.random() *2+1)
}

//Computer makes a move depening on random numer (1 or 2)
function pcMove(){
    if (chance() === 1) {
        //function for Tackle attack
        useTackle()
    } else {
        //function for tail whip
        useTailwhip()
    }
}

//Squirtle's attack
function useTackle(){
    userHp = userHp + charmanderDefense - tackle
    


    messageBattle2.innerText = 'Squirtle used tackle!'

    document.querySelector('#user-life').style.width = `${String(userHp)}%`

    if(userHp <= 0 && enemyHp > 0) {
        messageFinal.innerText = 'Squirtle won!'

        document.querySelector('#charmander').style.display = 'none'
        document.querySelector('.moves').style.display = 'none'
        document.querySelector('#play-again').style.display = 'block'
        document.querySelector('#user-life').style.display = 'none'
        messageBattle.style.display = 'none'
    } else if (enemyHp <= 0 && userHp <= 0){
        messageFinal.innerText = 'Tie!'
        document.querySelector('#squirtle').style.display = 'none'
        document.querySelector('#charmander').style.display = 'none'
        document.querySelector('.moves').style.display = 'none'
        document.querySelector('#play-again').style.display = 'block'
        document.querySelector('#enemy-life').style.display = 'none'
        document.querySelector('#user-life').style.display = 'none'
    }
}

//Squirtle's non attacking move
function useTailwhip(){
    if(charmanderDefense >= 0){
        charmanderDefense = charmanderDefense - tailWhip
    } else {
        charmanderDefense = 0
    }
    
    


    messageBattle2.innerText = "Squirtle used Tail Whip! Charmander's defense was reduced"
}
    

//RESET GAME
function playAgain() {
    
    
    //resetting variables to their original value
    enemyHp = 100
    userHp = 100
    
    //Squirtle
    tackle = 40
    tailWhip = 2
    squirtleSpeed = 1
    squirtleDefense = 20
    
    //Charmander
    scratch = 40
    growl = 2
    speedCharmander = 2
    charmanderDefense = 20
    
    //showing and hiding css parts
    messageBattle.innerText = ''
    messageBattle2.innerText = ''
    messageFinal.innerText = ''

    messageBattle2.style.display = 'block'
    messageBattle.style.display = 'block'

    document.querySelector('#squirtle').style.display = 'block'
    document.querySelector('#charmander').style.display = 'block'
    document.querySelector('.moves').style.display = 'block'
    document.querySelector('#play-again').style.display = 'none'

    document.querySelector('#enemy-life').style.display = 'block'
    document.querySelector('#enemy-life').style.width = '100%'
    document.querySelector('#user-life').style.display = 'block'
    document.querySelector('#user-life').style.width = '100%'
}