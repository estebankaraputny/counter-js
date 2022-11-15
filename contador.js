const value = document.getElementById(`valueOfCounter`)
const addCounter = document.getElementById(`addOfCounter`)
const downCounter = document.getElementById(`downOdCounter`)

let valueCounter = 0



addCounter.addEventListener(`click`, (event) =>{
    valueCounter++;
    value.textContent = valueCounter;
    if (valueCounter >= 50){
        addCounter.disabled = true;
    } else {
        downCounter.disabled = false;
    }
}  )

downCounter.addEventListener(`click`, (event) =>{
    valueCounter--;
    value.textContent = valueCounter;
    if (valueCounter <= 0){
        downCounter.disabled = true;
        } else {
           addCounter.disabled = false;
        }
})
