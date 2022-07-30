var me = document.getElementById('me')
var value1 = localStorage.getItem('value1')
var value2 = localStorage.getItem('value2')
var value3 = localStorage.getItem('value3')
var scoreOf  = document.createElement("p");
var playerName  = document.createElement("inputName");
console.log('1', value1)
console.log('2', value2)
console.log('3', value3)
//function clearScore() {
    //newItem.hidden
    //newItem.textContent = ``
    //me.removeChild(newItem)
//}
function largestValue() {
    if (value3 > value2) {
        scoreOf.textContent = `3 of 3`
    } else if(value2 > value1) {scoreOf .textContent = `2 of 3`
    }else if (value1 === 0){scoreOf .textContent = `1 of 3`}else{`0 of 3`}
    
}
//clearScore()
largestValue()
me.appendChild(scoreOf )

console.log(storeResults)
//i need to add the data of the score from local storage into an array then convert that array into a LIST containing the name of the player
// then the score and display that list on index3.html
 localStorage.getItem('correctQ1')

