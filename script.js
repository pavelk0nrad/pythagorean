var rest = 0.2;
var audioContext = null;
var oscillatorNode = null;
var gainNode = null;
var stopTime = 0;

// Sound engine
function beep(frequency, durationSec, ramp = false) {
    if (oscillatorNode == null) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        stopTime = audioContext.currentTime;

        oscillatorNode = audioContext.createOscillator();
        oscillatorNode.type = "sine";

        gainNode = audioContext.createGain();
        gainNode.gain.value = rest;

        oscillatorNode.connect(gainNode);
        gainNode.connect(audioContext.destination);

        if (ramp) {
            oscillatorNode.frequency.setValueAtTime(frequency, stopTime);
        }

        oscillatorNode.start();
        oscillatorNode.onended = function() {
            oscillatorNode = null;
            gainNode = null;
            audioContext = null;
        };
    }

    if (ramp) {
        oscillatorNode.frequency.linearRampToValueAtTime(frequency, stopTime);
    } else {
        oscillatorNode.frequency.setValueAtTime(frequency, stopTime);
    }

    stopTime += durationSec;
    oscillatorNode.stop(stopTime);
}

function test1() {
    beep(440, 0.5);
}

function test2() {
    beep(50, 2, true);
    beep(5000, 2, true);
    beep(50, 0, true);
}
//end of sound engine

let scale = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "bb", "b",];           
let div = "<hr>"

let x = 220 //A
let tone = 0

function wholeTone (){
    tone = userInput * (9/8)
    userInput = tone
    return createScaleN(tone)
}
function perfectForth(semitones){
    tone = (userInput * (3/2) /2)
    userInput = tone
    console.log(semitones)
    function findInterval(){
            let counterOfTone = 0
            
            while(counterOfTone <= semitones){
                if (positionOfTone > 11){
                    positionOfTone = 0
                    }
                else {
                positionOfTone +=1;
                counterOfTone +=1;
                }
            }
        }
        findInterval()
        console.log(positionOfTone)

        createScaleN(tone)
        console.log(positionOfTone)
    return positionOfTone
}

function semiTone (semitones){
    tone = userInput * (3/2)
    userInput = tone
    console.log(semitones)
        function findInterval(){
            let counterOfTone = 0
            
            while(counterOfTone <= semitones){
                if (positionOfTone > 11){
                    positionOfTone = 0
                    }
                else {
                positionOfTone +=1;
                counterOfTone +=1;
                }
            }
        }
        findInterval()
        console.log(positionOfTone)

        createScaleN(tone)
        console.log(positionOfTone)
    return positionOfTone
}
function rootTone (){
    root = 65.18518518518518
    userInput = root
    positionOfTone = 0
    
    return createScaleN(userInput)
            
}
function createScaleN (frequency){


let scale2 = 
       [  [tone, frequency.toFixed(1)],
        [tone, (frequency * (9 / 8)).toFixed(1)],
        [tone, (frequency * (81 / 64)).toFixed(1)],
        [tone, (frequency * (4 / 3)).toFixed(1)],
        [tone, (frequency * (3 / 2)).toFixed(1)],
        [tone, (frequency * (27 / 16)).toFixed(1)],
        [tone, (frequency * (243 / 128)).toFixed(1)],
        [tone, (frequency * (2 / 1)).toFixed(1)]]

table = document.createElement("table")
table.setAttribute('class', 'table table-dark table-hover table-scale');
const divElement = document.getElementById('scales');
divElement.setAttribute('class', 'scales');

divElement.appendChild(table);
divElement.setAttribute('class', 'container p-3 mb-2 bg-dark text-white');

document.body.appendChild(divElement)


   
    let tbody = document.createElement("tbody")
    table.appendChild(tbody);
    let counterOfTone = 0
    let tr = document.createElement("tr")
        tbody.appendChild(tr)
        
    
    
    while (counterOfTone < 8){
    

    if (positionOfTone > 11){
        if (positionOfTone == 12){
            positionOfTone = 0
        }
        else if (positionOfTone == 13){
            positionOfTone = 1
        }
    }
    
    if (counterOfTone == 3){
        positionOfTone -= 1
    }
    if (counterOfTone == 7){
        positionOfTone -= 1
        counterOfTone += 1
   let td = document.createElement("td")
   tr.appendChild(td)
   
   td.textContent = (scale[positionOfTone])

        }
    else{
       
        let td = document.createElement("td")
        tr.appendChild(td)
        td.textContent = (scale[positionOfTone])
        counterOfTone +=1
        positionOfTone +=2
        }
    
    }
        let tr2 = document.createElement("tr");
        tbody.appendChild(tr2)
       
        for (let i in scale2){
       
    

   let td = document.createElement("td")
   tr2.appendChild(td)
   
   td.textContent = scale2[i][1]
   beep(scale2[i][1], rest)
   console.log(positionOfTone)
    }
    let isRoot = true
return isRoot
}