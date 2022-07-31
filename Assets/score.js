//list of vars
var me = document.getElementById('me')
var inputSaveName = document.getElementById('others')
var otherScores = document.createElement('p');
var value = localStorage.getItem('value')
var scoreOf  = document.createElement('p');
var storageInput = document.getElementById('storage')
var saveBtn = document.getElementById('save')
var tryAgain = document.getElementById('tryAgain')
// allows user to input a name and display it with his or her score
storageInput.addEventListener('input', name=>{
    inputSaveName.textContent = name.target.value + ` got ${value} of 3`
})
var save = () => {
    localStorage.setItem('list', inputSaveName.textContent) 
}
saveBtn.addEventListener('click', save)

// for displaying the results
function largestValue() {
    scoreOf.textContent = `${value} of 3`
    
}

// displays imedate results 
largestValue()
me.appendChild(scoreOf)
// saves as a html el
inputSaveName.appendChild(otherScores)
otherScores.textContent = localStorage.getItem('list')



