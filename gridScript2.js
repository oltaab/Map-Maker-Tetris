const elements = [
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false        
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
            rotation: 0,
            mirrored: false  
        },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,0],
                [1,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,1],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0,1,0],
                [1,1,1],
                [0,1,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [1,0,0],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,0,0],
                [1,1,1],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,1]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,0],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
]

const elements2 = [
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false        
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
            rotation: 0,
            mirrored: false  
        },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,0],
                [1,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,1],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0,1,0],
                [1,1,1],
                [0,1,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [1,0,0],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,0,0],
                [1,1,1],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,1]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,0],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
]

function removeZeroRowsColumns(shape) {
    shape = shape.filter(row => row.some(cell => cell !== 0));
    for (let i = shape[0].length - 1; i >= 0; i--) {
        if (shape.every(row => row[i] === 0)) {
            shape.forEach(row => row.splice(i, 1));
        }
    }
    return shape;
}
let fullLinesScore = 0; 
let extraPoint = 0

const newElements = elements.map(element => ({
    ...element,
    shape: removeZeroRowsColumns(element.shape)
}));

const grid = document.getElementById('grid');
const elementContainer = document.getElementById('element-grid');
const timeGrid = document.getElementById('time');
const gameSeason = document.getElementById('gameSeason');
const score = document.getElementById('score-container');

var randomInt = Math.floor(Math.random() * newElements.length);
let element = newElements[randomInt];
let element1 = elements2[randomInt]

let typeClass = element.type;
let time = element.time; 
let gameLimit = 28; 

createElement(element1); 

function showTime(element){
    timeGrid.innerHTML = '<span style="color: #654321;"><b>Time: ' + time + '</b></span>';
}
showTime(element)

let mission1stScore = 0;
let mission2ndScore = 0;
let mission3rdScore = 0;
let mission4thScore = 0;
let mission5thScore = 0;
let mission6thScore = 0;
let mission7thScore = 0;
let mission8thScore = 0;


const mission1 = document.getElementById('mission-container-1')
const mission2 = document.getElementById('mission-container-2')
const mission3 = document.getElementById('mission-container-3')
const mission4 = document.getElementById('mission-container-4')
const mission5 = document.getElementById('mission-container-5')
const mission6 = document.getElementById('mission-container-6')
const mission7 = document.getElementById('mission-container-7')
const mission8 = document.getElementById('mission-container-8')

const season1 = document.getElementById('season-container-1');
const season1score = document.getElementById('score-season1');  
season1score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';

const season2 = document.getElementById('season-container-2');
const season2score = document.getElementById('score-season2');  
season2score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';

const season3 = document.getElementById('season-container-3');
const season3score = document.getElementById('score-season3');  
season3score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';

const season4 = document.getElementById('season-container-4');
const season4score = document.getElementById('score-season4');  
season4score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';

function showScore(){
    score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + 0 + '</b></span>';
}
showScore(element)

const mission1Score = document.getElementById('score1');
mission1Score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';

const mission2Score = document.getElementById('score2');
mission2Score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';

const mission3Score = document.getElementById('score3');
mission3Score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';

const mission4Score = document.getElementById('score4');
mission4Score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';

const mission5Score = document.getElementById('score5');
mission5Score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';

const mission6Score = document.getElementById('score6');
mission6Score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';

const mission7Score = document.getElementById('score7');
mission7Score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';

const mission8Score = document.getElementById('score8');
mission8Score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';

let seasonScores = [0, 0, 0, 0];
let totalScore = 0; 
let missionIndex = 0; 
let missionSecondIndex = 1; 

mission1.classList.add('selectedMission');
mission2.classList.add('selectedMission');

let missions4Done = false;
let isSeason1Done = true; 
let isSeason2Done = true; 
let isSeason3Done = true; 
let isSeason4Done = true; 

function showSeason() {
    var seasonNumber;
    if(endGame()){
        if (gameLimit > 21) {
            seasonNumber = 1;
            season1.classList.add('selectedo');

        } else if (gameLimit > 14) {
            seasonNumber = 2;
            if(isSeason1Done){
                if(missions4Done){
                    showMission2(missionIndex, missionSecondIndex)
                    mission5.classList.remove('selectedMission');   
                    mission6.classList.remove('selectedMission');
        
                    mission6.classList.add('selectedMission');   
                    mission7.classList.add('selectedMission');
                } else{
                    showMission(missionIndex, missionSecondIndex)
                    mission1.classList.remove('selectedMission');   
                    mission2.classList.remove('selectedMission');
        
                    mission2.classList.add('selectedMission');   
                    mission3.classList.add('selectedMission');
                }
            missionIndex = 1;
            missionSecondIndex = 2; 
            console.log("This is 1st ")
            console.log("index 1: " + missionIndex);
            console.log("index 2: " + missionSecondIndex);

            season1.classList.remove('selectedo');
            season2.classList.add('selectedg');
            isSeason1Done = false; 
            }

            
        } else if (gameLimit > 7) {
            seasonNumber = 3;
            if(isSeason2Done){
                if(missions4Done){
                    showMission2(missionIndex, missionSecondIndex)
                    mission7.classList.remove('selectedMission');
                    mission6.classList.remove('selectedMission');
        
                    mission7.classList.add('selectedMission');
                    mission8.classList.add('selectedMission');
                }else{
                    showMission(missionIndex, missionSecondIndex)
                    mission2.classList.remove('selectedMission');
                    mission3.classList.remove('selectedMission');
        
                    mission3.classList.add('selectedMission');
                    mission4.classList.add('selectedMission');

                }
                missionIndex = 2;
                missionSecondIndex = 3; 
                console.log("Writing for 2nd time")
                console.log("index1" + mission1stScore)
                console.log("index2" + missionSecondIndex)
    
                season2.classList.remove('selectedg');
                season3.classList.add('selectedb');
                isSeason2Done = false;         
            }
        } else if (gameLimit >= 0) {
            seasonNumber = 4;
            if(isSeason3Done){
                if(missions4Done){
                    showMission2(missionIndex, missionSecondIndex)
                    console.log("Writing for 3rd time")
                    console.log("index1" + mission1stScore)
                    console.log("index2" + missionSecondIndex)
        
                    mission7.classList.remove('selectedMission');
                    mission8.classList.remove('selectedMission');
        
                    mission8.classList.add('selectedMission');
                    mission5.classList.add('selectedMission');
                } else{
                    showMission(missionIndex, missionSecondIndex)
                    console.log("Writing for 3rd time")
                    console.log("index1" + mission1stScore)
                    console.log("index2" + missionSecondIndex)
        
                    mission3.classList.remove('selectedMission');
                    mission4.classList.remove('selectedMission');
        
                    mission4.classList.add('selectedMission');
                    mission1.classList.add('selectedMission');
                }
                season3.classList.remove('selectedb');
                season4.classList.add('selectedblue');
                missionSecondIndex = 1; 
                missionIndex = 4;
                isSeason3Done = false; 
            }
        } 
        else if (gameLimit <= 0 && gameLimit > -1) {
            if(isSeason4Done){
                if(missions4Done){
                    showMission2(missionIndex, missionSecondIndex)
                } else{
                    showMission(missionIndex, missionSecondIndex)
                }
                console.log("Writing for 3rd time")
                console.log("index1" + mission1stScore)
                console.log("index2" + missionSecondIndex)
                isSeason4Done = false; 
            }

        }
        gameSeason.innerHTML = '<span style="color: #654321;"> <b> Season: ' + seasonNumber + ' / 4' + ' </b> </span>';
    }
}

let prev1 = 0; 
let prev2 = 0; 
let prev3 = 0; 
let prev4 = 0; 
let prev5 = 0; 
let prev6 = 0; 
let prev7 = 0; 
let prev8 = 0; 

function showMission(missionIndex, missionSecondIndex){
    if (missionIndex == 0 && missionSecondIndex == 1){

        mission1stScore = treeLineScore(mission1stScore);
        mission2ndScore = wateringCanalScore(mission2ndScore);

        prev1 = mission1stScore; 
        prev2 = mission2ndScore; 

        mission1Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission1stScore + '</b></span>';
        mission2Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission2ndScore + '</b></span>';
        
        seasonScoreFinal = mission1stScore + mission2ndScore;
        season1score.innerHTML = '<span style="color: white;"><b>Points: ' + seasonScoreFinal + '</b></span>';
        totalScore += seasonScoreFinal; 
        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';
    } else if (missionIndex == 1 && missionSecondIndex == 2){
        
        mission2ndScore = wateringCanalScore(mission2ndScore) - prev2;
        mission3rdScore = wealthyTownScore(mission3rdScore);
        prev3 = mission3rdScore; 

        mission2Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission2ndScore + '</b></span>';
        mission3Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission3rdScore + '</b></span>';

        seasonScoreFinal = mission3rdScore + mission2ndScore; 
        season2score.innerHTML = '<span style="color: white;"><b>Points: ' + seasonScoreFinal + '</b></span>';

        totalScore += seasonScoreFinal; 
        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';

    } else if( missionIndex == 2 && missionSecondIndex == 3){

        mission4thScore = magiciansValleyScore(mission4thScore);
        prev4 = mission4thScore; 
        mission3rdScore = wealthyTownScore(mission3rdScore) - prev3;

        mission3Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission3rdScore + '</b></span>';
        mission4Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission4thScore + '</b></span>';
        
        seasonScoreFinal = mission3rdScore + mission4thScore; 
        season3score.innerHTML = '<span style="color: white;"><b>Points: ' + seasonScoreFinal + '</b></span>';
        totalScore += seasonScoreFinal; 
        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';

    } else if(missionIndex == 3 && missionSecondIndex == 1){

        mission4thScore =  magiciansValleyScore(mission4thScore) - prev4;
        mission1thScore = emptySiteScore(mission1stScore) - prev1; 

        mission4Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission4thScore + '</b></span>';
        mission1Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission1stScore + '</b></span>';

        seasonScoreFinal = mission4thScore + mission1stScore; 

        season4score.innerHTML = '<span style="color: white;"><b>Points: ' + seasonScoreFinal + '</b></span>';
        totalScore += seasonScoreFinal; 
        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';
    } 
}

function showMission2(){ 
    if(missionIndex == 0 && missionSecondIndex == 1){
        mission5thScore = emptySiteScore(mission5thScore);
        prev5 = mission5thScore; 
        mission6thScore = terracedHouseScore(mission6thScore); 
        prev6 = mission6thScore; 

        mission6Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission6thScore + '</b></span>';
        mission5Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission5thScore + '</b></span>';
        seasonScoreFinal = mission6thScore + mission5thScore; 
        season1score.innerHTML = '<span style="color: white;"><b>Points: ' + seasonScoreFinal + '</b></span>';
        totalScore += seasonScoreFinal; 
        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';
    
    }  else if(missionIndex == 1 && missionSecondIndex == 2){
        mission6thScore = terracedHouseScore(mission6thScore) - prev6; 
        mission7thScore =  oddNumberedSilosScore(mission7thScore);
        prev7 = mission7thScore; 

        mission7Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission7thScore + '</b></span>';
        mission6Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission6thScore + '</b></span>';

        seasonScoreFinal = mission7thScore + mission6thScore; 
        season2score.innerHTML = '<span style="color: white;"><b>Points: ' + seasonScoreFinal + '</b></span>';
        totalScore += seasonScoreFinal; 
        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';

    }  else if(missionIndex == 2 && missionSecondIndex == 3){
        mission7thScore = terracedHouseScore(mission7thScore) - prev7; 
        mission8thScore =  richCountrysideScore(mission8thScore);
        prev8 = mission8thScore; 

        mission7Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission7thScore + '</b></span>';
        mission8Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission8thScore + '</b></span>';

        seasonScoreFinal = mission7thScore + mission8thScore; 
        season3score.innerHTML = '<span style="color: white;"><b>Points: ' + seasonScoreFinal + '</b></span>';
        totalScore += seasonScoreFinal; 
        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';
        
    } else if(missionIndex == 3 && missionSecondIndex == 1){
        mission5thScore = terracedHouseScore(mission7thScore) - prev5; 
        mission8thScore =  richCountrysideScore(mission8thScore) - prev8;

        mission5Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission5thScore + '</b></span>';
        mission8Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission8thScore + '</b></span>';

        seasonScoreFinal = mission8thScore + mission5thScore; 
        season4score.innerHTML = '<span style="color: white;"><b>Points: ' + seasonScoreFinal + '</b></span>';
        totalScore += seasonScoreFinal; 
        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';
    }
}


showSeason(); 
function createElement(element) {
    while (elementContainer.firstChild) {
        elementContainer.removeChild(elementContainer.firstChild);
    } 

    for (let i=0; i < element.shape.length; i++) {
        for (let j=0; j < element.shape[0].length; j++) {
            console.log(i)
            console.log(j)
            const cell = document.createElement('div');

            if (element.shape[i][j] === 1) {
                switch (typeClass) {
                    case "forest":
                        cell.classList.add('forest');
                        break;
                    case "town":
                        cell.classList.add('town');
                        break;
                    case "farm":
                        cell.classList.add('farm');
                        break;
                    case "water":
                        cell.classList.add('water');
                        break;
                }
            } 
            else {
                cell.classList.add('elementCell');
            }
            elementContainer.appendChild(cell);
        }
    }
}

function createGrid() {
    while (grid.firstChild) {
       grid.removeChild(grid.firstChild);
    } 

    const mountainCellsGrid = new Set(['2-2', '4-9', '6-4', '9-10', '10-6']);

    for (let row = 1; row <= 11; row++) {
      for (let column = 1; column <= 11; column++) {

        const cell = document.createElement('div');
        cell.id = `${row}-${column}`; 


        cell.addEventListener('mouseover', function() {

            var clickable = false;

            for(let i = 0; i < element.shape.length; i++){
                for(let j = 0; j < element.shape[0].length; j++){
                    const targetCell = document.getElementById(`${row+i}-${column+j}`);
                    let hasCellClass =  targetCell.classList.contains('forest') || 
                                        targetCell.classList.contains('town') || 
                                        targetCell.classList.contains('farm') || 
                                        targetCell.classList.contains('water');
                    if (element.shape[i][j] === 1 && (mountainCellsGrid.has(`${row+i}-${column+j}`) || hasCellClass)){
                        clickable = true;
                    }
                }
            }

            if(!clickable){
                for(let i = 0; i < element.shape.length; i++){
                    for(let j = 0; j < element.shape[0].length; j++){
                        if( row+i <= 11 && column+j <= 11){
                            const targetCell = document.getElementById(`${row+i}-${column+j}`);
                                 
                            if (element.shape[i][j] === 1){
                                switch (typeClass) {
                                    case "forest":
                                        targetCell.classList.remove('cell');
                                        targetCell.classList.add('forest2');
                                        break;
                        
                                    case "town":
                                        targetCell.classList.remove('cell');
                                        targetCell.classList.add('town2');
                                        break;
                        
                                    case "farm":
                                        targetCell.classList.remove('cell');
                                        targetCell.classList.add('farm2');
                                        break;
                        
                                    case "water":
                                        targetCell.classList.remove('cell');
                                        targetCell.classList.add('water2');
                                    break;
                                }        
                            }      
                        } 
                    }
                }
            }
          });

          cell.addEventListener('mouseout', function() {
            for(let i = 0; i < element.shape.length; i++){
                for(let j = 0; j < element.shape[0].length; j++){
                    const targetCell = document.getElementById(`${row+i}-${column+j}`);

                        if (element.shape[i][j] === 1){
                            switch (typeClass) {
                                case "forest":
                                    targetCell.classList.add('cell');
                                    targetCell.classList.remove('forest2');
                                break;
            
                                case "town":
                                    targetCell.classList.add('cell');
                                    targetCell.classList.remove('town2');
                                break;
            
                                case "farm":
                                    targetCell.classList.add('cell');
                                    targetCell.classList.remove('farm2');
                                break;
            
                                case "water":
                                    targetCell.classList.add('cell');
                                    targetCell.classList.remove('water2');
                                break;
                            } 
                        } 
                    }
                }
            });
        
        if (endGame()){
        cell.addEventListener('click', function() {

            cellClicked = true;
            var clickable = false;

            for(let i = 0; i < element.shape.length; i++){
                for(let j = 0; j < element.shape[0].length; j++){
                    const targetCell = document.getElementById(`${row+i}-${column+j}`);
                    let hasCellClass =  targetCell.classList.contains('forest') || 
                                        targetCell.classList.contains('town') || 
                                        targetCell.classList.contains('farm') || 
                                        targetCell.classList.contains('water');
                    if (element.shape[i][j] === 1 && (mountainCellsGrid.has(`${row+i}-${column+j}`) || hasCellClass)){
                        clickable = true;
                    }
                }
            }

            if(!clickable){
                for(let i = 0; i < element.shape.length; i++){
                    for(let j = 0; j < element.shape[0].length; j++){
                        if( row+i <= 11 && column+j <= 11){
                            const targetCell = document.getElementById(`${row+i}-${column+j}`);                                   
                            if (element.shape[i][j] === 1){
                                switch (typeClass) {
                                    case "forest":
                                        targetCell.classList.remove('forest2');
                                        targetCell.classList.add('forest');
                                        break;
                        
                                    case "town":
                                        targetCell.classList.remove('town2');
                                        targetCell.classList.add('town');
                                        break;
                        
                                    case "farm":
                                        targetCell.classList.remove('farm2');
                                        targetCell.classList.add('farm');
                                        break;
                        
                                    case "water":
                                        targetCell.classList.remove('water2');
                                        targetCell.classList.add('water');
                                    break;
                                }        
                            }      
                        } 
                    }
                }
            }
            var randomInt = Math.floor(Math.random() * newElements.length);
            if(!clickable){
                if (missionIndex == 0){
                    fullLinesScore = treeLineScore(fullLinesScore);
                } else if (missionIndex == 1){
                    fullLinesScore = wateringCanalScore(fullLinesScore);
                } else if( missionIndex == 2){
                    fullLinesScore = wealthyTownScore(fullLinesScore);
                } else if(missionIndex == 3){
                    fullLinesScore = magiciansValleyScore(fullLinesScore);
                } else if(missionIndex == 4){
                    fullLinesScore = richCountrysideScore(fullLinesScore)
                } else if(missionIndex == 5){
                    fullLinesScore =  oddNumberedSilosScore(fullLinesScore)
                } else if(missionIndex == 6){
                    fullLinesScore = terracedHouseScore(fullLinesScore)
                } else if(missionIndex == 7){
                    fullLinesScore = emptySiteScore(fullLinesScore) 
                }
                  
                gameLimit = gameLimit - time; 
                showSeason(); 
                element = newElements[randomInt];
                element1 = elements2[randomInt];
                typeClass = element.type;
                time = element.time; 
                createElement(element1);
                showTime(element);
                showGameTime(element);
            }
        });
    }   
            
        if (mountainCellsGrid.has(`${row}-${column}`)) {
          cell.classList.add('mountain');
        } else {
            cell.classList.add('cell');
        }
        grid.appendChild(cell);
      }
    }
}
createGrid()

function endGame(){
    if (gameLimit > -3 && gameLimit < 0){
        season4.classList.remove('selectedblue');
        gameLimit = 28;      

        totalScore +=  fullLinesScore + calculateSurroundedMountainsScore(extraPoint);
        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';
        season1score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';
        season2score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';
        season3score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';
        season4score.innerHTML = '<span style="color: white;"><b>Points: ' + 0 + '</b></span>';
        gameSeason.innerHTML = '<span style="color: #654321;"> <b> Season: ' + 1 + ' / 4' + ' </b> </span>';

        isSeason1Done = true; 
        isSeason2Done = true; 
        isSeason3Done = true; 
        isSeason4Done = true;
        missions4Done = true; 
        mission1.classList.remove('selectedMission');
        mission4.classList.remove('selectedMission');

        mission5.classList.add('selectedMission');
        mission6.classList.add('selectedMission');
        createGrid()

        return False;
    }
    return true; 
}

const rotateButton = document.querySelector("#rotateButton");
const flipButton = document.querySelector("#flipButton");

function handleRotate(element) {
    let newShape = element.shape[0].map((col, i) => element.shape.map(row => row[i]));
    newShape = newShape.map(row => row.reverse());
    element.rotation = (element.rotation + 90) % 360;
    return newShape;
}

function handleFlip(element) {
    const newShape = element.shape.map(row => row.slice().reverse());
    element.mirrored = !element.mirrored;
    return newShape;
}

document.querySelector("#rotateButton").addEventListener('click', () => {
    element.shape = handleRotate(element);
    element1.shape = handleRotate(element1);
    createElement(element1); 
});

document.querySelector("#flipButton").addEventListener('click', () => {
    element.shape = handleFlip(element);
    element1.shape = handleFlip(element1);
    createElement(element1); 
});


// Mission 1
function treeLineScore(mission1stScore) {
    mission1stScore = 0
    let longestLine = 0;
    for (let j = 1; j <= 11; j++) {
        let currentLineLength = 0;
        let maxLineLength = 0;
        for (let i = 1; i <= 11; i++) {
            let cell = document.getElementById(`${i}-${j}`);
            if (cell.classList.contains('forest')) {
                currentLineLength++;
                maxLineLength = Math.max(maxLineLength, currentLineLength);
            } else {
                currentLineLength = 0;
            }
        }
        longestLine = Math.max(longestLine, maxLineLength);
    }
    mission1stScore += longestLine * 2;
    return mission1stScore;
}


// Mission 2
function wateringCanalScore(mission2ndScore) {
    mission2ndScore = 0
    for (let j = 1; j <= 11; j++) {
        let farmCount = 0;
        let waterCount = 0;
        for (let i = 1; i <= 11; i++) {
            let cell = document.getElementById(`${i}-${j}`);
            if (cell.classList.contains('farm')) {
                farmCount++;
            } else if (cell.classList.contains('water')) {
                waterCount++;
            }
        }
        if (farmCount === waterCount && farmCount > 0) {
            mission2ndScore += 4;
        }
    }
    return mission2ndScore;
}



// Mission 3
function wealthyTownScore(mission3rdScore) {
    mission3rdScore = 0
    const terrainTypes = ['forest', 'town', 'mountain', 'farm', 'water'];

    for (let i = 1; i <= 11; i++) {
        for (let j = 1; j <= 11; j++) {
            let cell = document.getElementById(`${i}-${j}`);
            if (cell.classList.contains('town')) {
                let adjacentTerrains = new Set();
                for (let [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
                    let adjacentCell = document.getElementById(`${i + di}-${j + dj}`);
                    if (adjacentCell) {
                        for (let terrain of terrainTypes) {
                            if (adjacentCell.classList.contains(terrain)) {
                                adjacentTerrains.add(terrain);
                                break; 
                            }
                        }
                    }
                }
                if (adjacentTerrains.size >= 3) {
                    mission3rdScore += 3;
                }
            }
        }
    }
    return mission3rdScore;
}

function checkWater(x, y) {
    let adjacentCell = document.getElementById(`${x}-${y}`);
    if (adjacentCell && adjacentCell.classList.contains('water')) {
        return 2; 
    }
    return 0;
}

// Mission 4
function magiciansValleyScore(mission4thScore) {
    mission4thScore = 0
    for (let i = 1; i <= 11; i++) {
        for (let j = 1; j <= 11; j++) {
            let cell = document.getElementById(`${i}-${j}`);
            if (cell.classList.contains('water')) {
                for (let [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
                    let adjacentCell = document.getElementById(`${i + di}-${j + dj}`);
                    if (adjacentCell && adjacentCell.classList.contains('mountain')) {
                        mission4thScore += 3;
                        break; 
                    }
                }
            }
        }
    }
    return mission4thScore;
}

// mission 5 
function emptySiteScore(mission5thScore) {
    mission5thScore = 0
    for (let i = 1; i <= 11; i++) {
        for (let j = 1; j <= 11; j++) {
            let cell = document.getElementById(`${i}-${j}`);
            if (cell.classList.contains('town')) {
                for (let [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
                    let adjacentCell = document.getElementById(`${i + di}-${j + dj}`);
                    if (adjacentCell && !adjacentCell.classList.contains('forest') &&
                        !adjacentCell.classList.contains('town') &&
                        !adjacentCell.classList.contains('mountain') &&
                        !adjacentCell.classList.contains('farm') &&
                        !adjacentCell.classList.contains('water')) {
                        mission5thScore += 2;
                    }
                }
            }
        }
    }
    return mission5thScore;
}


// Mission 6
function terracedHouseScore(mission6thScore) {
    mission6thScore = 0
    let longestRow = 0;
    for (let i = 1; i <= 11; i++) {
        let currentRowLength = 0;
        let maxRowLength = 0;
        for (let j = 1; j <= 11; j++) {
            let cell = document.getElementById(`${i}-${j}`);
            if (cell.classList.contains('town')) {
                currentRowLength++;
                maxRowLength = Math.max(maxRowLength, currentRowLength);
            } else {
                currentRowLength = 0;
            }
        }
        longestRow = Math.max(longestRow, maxRowLength);
    }
    mission6thScore += longestRow * 2;
    return mission6thScore;
}

// Mission 7 
function oddNumberedSilosScore(mission7thScore) {
    mission7thScore = 0
    for (let j = 1; j <= 11; j += 2) { 
        let isFullColumn = true;
        for (let i = 1; i <= 11; i++) {
            let cell = document.getElementById(`${i}-${j}`);
            if (!cell.classList.contains('forest') &&
                !cell.classList.contains('town') &&
                !cell.classList.contains('mountain') &&
                !cell.classList.contains('farm') &&
                !cell.classList.contains('water')) {
                isFullColumn = false;
                break;
            }
        }
        if (isFullColumn) {
            mission7thScore += 10;
        }
    }
    return mission7thScore;
}

// Mission 8
function richCountrysideScore(mission8thScore) {
    mission8thScore = 0
    const terrainTypes = ['forest', 'town', 'mountain', 'farm', 'water'];

    for (let i = 1; i <= 11; i++) {
        let terrainSet = new Set();
        for (let j = 1; j <= 11; j++) {
            let cell = document.getElementById(`${i}-${j}`);
            for (let terrain of terrainTypes) {
                if (cell.classList.contains(terrain)) {
                    terrainSet.add(terrain);
                    break; 
                }
            }
        }
        if (terrainSet.size >= 5) {
            mission8thScore += 4;
        }
    }
    return mission8thScore;
}

// Extra Points Function
function calculateSurroundedMountainsScore(extraPoint) {
    const mountainCells = new Set(['2-2', '4-9', '6-4', '9-10', '10-6']); 
    mountainCells.forEach(mountainCell => {
        const [row, col] = mountainCell.split('-').map(Number);
        let isSurrounded = true;

        for (let [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const adjacentCell = document.getElementById(`${row + di}-${col + dj}`);
            if (!adjacentCell || !adjacentCell.classList.contains('forest') &&
                !adjacentCell.classList.contains('town') &&
                !adjacentCell.classList.contains('mountain') &&
                !adjacentCell.classList.contains('farm') &&
                !adjacentCell.classList.contains('water')) {
                isSurrounded = false;
                break;
            }
        }

        if (isSurrounded) {
            extraPoint += 1;
        }
    });
    return extraPoint;
}


// I tried to do the "save" but it didn't work, just wanted to show that I tried
// Save: The game saves its state continuously to localStorage. When loading a page, if there is such a saved state, it is loaded from there, otherwise a new game is started. At the end of the game, the saved state is deleted (2 points).
// function saveGameState() {
//     const gameState = {
//         fullLinesScore, 
//         totalScore, 
//         gameLimit, 
//         missionIndex, 
//         seasonScores,
//     };
//     localStorage.setItem('gameState', JSON.stringify(gameState));
// }

// function loadGameState() {
//     const savedState = localStorage.getItem('gameState');
//     if (savedState) {
//         const gameState = JSON.parse(savedState);
//         fullLinesScore = gameState.fullLinesScore;
//         totalScore = gameState.totalScore;
//         gameLimit = gameState.gameLimit;
//         missionIndex = gameState.missionIndex;
//         seasonScores = gameState.seasonScores;
//     } else {
//         startNewGame();
//     }
// }

// function deleteGameState() {
//     localStorage.removeItem('gameState');
// }
// window.onload = function() {
//     loadGameState();
// };

// function endCurrentGame() {
//     deleteGameState();
// }
