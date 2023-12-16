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

let mission1stScore = 0;
let mission2ndScore = 0; 
let mission3rdScore = 0; 
let mission4thScore = 0; 

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

const mission1 = document.getElementById('mission-container-4')
const mission2 = document.getElementById('mission-container-3')
const mission3 = document.getElementById('mission-container-1')
const mission4 = document.getElementById('mission-container-2')

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

let totalScore = 0; 
let missionIndex = 0; 
let missionSecondIndex = 1; 
mission1.classList.add('selectedM');
mission2.classList.add('selectedM');

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
            showMission(missionIndex, missionSecondIndex)
            missionIndex = 1;
            missionSecondIndex = 2; 
            console.log("This is 1st ")
            console.log("index 1: " + missionIndex);
            console.log("index 2: " + missionSecondIndex);

            season1.classList.remove('selectedo');
            season2.classList.add('selectedg');

            mission1.classList.remove('selectedM');   
            mission2.classList.remove('selectedM');

            mission2.classList.add('selectedM');   
            mission3.classList.add('selectedM');
            isSeason1Done = false; 
            }

            
        } else if (gameLimit > 7) {
            seasonNumber = 3;
            if(isSeason2Done){
                showMission(missionIndex, missionSecondIndex)
                missionIndex = 2;
                missionSecondIndex = 3; 
                console.log("Writing for 2nd time")
                console.log("index1" + mission1stScore)
                console.log("index2" + missionSecondIndex)
    
                season2.classList.remove('selectedg');
                season3.classList.add('selectedb');
    
                mission2.classList.remove('selectedM');
                mission3.classList.remove('selectedM');
    
                mission3.classList.add('selectedM');
                mission4.classList.add('selectedM');
                isSeason2Done = false; 
            }
            

        } else if (gameLimit >= 0) {
            seasonNumber = 4;
            if(isSeason3Done){
                showMission(missionIndex, missionSecondIndex)
                missionSecondIndex = 1; 
                missionIndex = 4;

                season3.classList.remove('selectedb');
                season4.classList.add('selectedblue');
    
                mission3.classList.remove('selectedM');
                mission4.classList.remove('selectedM');
    
                mission4.classList.add('selectedM');
                mission1.classList.add('selectedM');
                isSeason3Done = false; 
            }
        } 
        else if ((gameLimit < 0 && gameLimit >= -1)) {
            seasonNumber = 1;
            console.log("does it get stuck here?")
            console.log(isSeason4Done)
            if(isSeason4Done){
                showMission(missionIndex, missionSecondIndex)
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

function showMission(missionIndex, missionSecondIndex){
    if (missionIndex == 0 && missionSecondIndex == 1){

        mission1stScore = borderlands(mission1stScore);
        mission2ndScore = sleepyValley(mission2ndScore);

        prev1 = mission1stScore; 
        prev2 = mission2ndScore; 

        mission1Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission1stScore + '</b></span>';
        mission2Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission2ndScore + '</b></span>';
        
        seasonScoreFinal = mission1stScore + mission2ndScore; 
        season1score.innerHTML = '<span style="color: white;"><b>Points: ' + seasonScoreFinal + '</b></span>';

        totalScore += seasonScoreFinal; 
        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';

    } else if (missionIndex == 1 && missionSecondIndex == 2){
        
        mission2ndScore = sleepyValley(mission2ndScore) - prev2;
        mission3rdScore = edgeOfTheForest(mission3rdScore) 
        prev3 = mission3rdScore; 

        mission2Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission2ndScore + '</b></span>';
        mission3Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission3rdScore + '</b></span>';
        seasonScoreFinal = mission3rdScore + mission2ndScore; 
        season2score.innerHTML = '<span style="color: white;"><b>Points: ' + seasonScoreFinal + '</b></span>';

        totalScore += seasonScoreFinal; 
        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';

    } else if( missionIndex == 2 && missionSecondIndex == 3){
        mission4thScore = wateringPotatoes(mission4thScore);
        prev4 = mission4thScore; 
        mission3rdScore = edgeOfTheForest(mission3rdScore) - prev3;
        mission3Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission3rdScore + '</b></span>';
        mission4Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission4thScore + '</b></span>';
        seasonScoreFinal = mission3rdScore + mission4thScore; 
        season3score.innerHTML = '<span style="color: white;"><b>Points: ' + seasonScoreFinal + '</b></span>';

        totalScore += seasonScoreFinal; 
        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';

    } else if(missionIndex == 3 && missionSecondIndex == 1){
        mission1stScore = borderlands(mission1stScore) - prev1;
        mission4thScore = wateringPotatoes(mission4thScore) - prev4;

        mission4Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission4thScore + '</b></span>';
        mission1Score.innerHTML = '<span style="color: white;"><b>Points: ' + mission1stScore+ '</b></span>';

        seasonScoreFinal = mission1stScore + mission4thScore; 
        season4score.innerHTML = '<span style="color: white;"><b>Points: ' + seasonScoreFinal + '</b></span>';
        console.log("Season 4")
        console.log(season4score)

        totalScore += seasonScoreFinal; 
        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';
    } 
}

let extraPoint = 0;

function endGame(){
    if (gameLimit <= 0 && gameLimit <= -1){
        showMission(3, 1); 

        console.log("Writing for 3rd time")
        console.log("index1" + missionIndex)
        console.log("index2" + missionSecondIndex)

        console.log()

        isSeason4Done = false; 

        season4.classList.remove('selectedblue');
        totalScore += calculateSurroundedMountainsScore(extraPoint);


        score.innerHTML = '<span style="color: #654321;"><b>Total Score: ' + totalScore + '</b></span>';
        const box = document.getElementById('box');
        const gameOverCover = document.getElementById('Game-over-cover');

        gameOverCover.classList.remove('hide'); 
        box.classList.remove('hide'); 
        box.classList.add('flex'); 
        
        season1.classList.remove('selectedo');
        season2.classList.remove('selectedg');
        season3.classList.remove('selectedb');
        season4.classList.remove('selectedblue');

        mission1.classList.remove('selectedM');
        mission2.classList.remove('selectedM');
        mission3.classList.remove('selectedM');
        mission4.classList.remove('selectedM');
        return False;
    }
    return true; 
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
function borderlands(mission1stScore){
    let fullRowsAndCols = 0;
    mission1stScore = 0 
    for (let i = 1; i <= 11; i++) {
        let isFullRow = true;
        for (let j = 1; j <= 11; j++) {
            let cell = document.getElementById(`${i}-${j}`);
            if (!cell.classList.contains('forest') &&
                !cell.classList.contains('town') &&
                !cell.classList.contains('mountain') &&
                !cell.classList.contains('farm') &&
                !cell.classList.contains('water')) {
                isFullRow = false;
                break; 
            }
        }
        if (isFullRow) {
            fullRowsAndCols++; 
        }
    }
    for (let j = 1; j <= 11; j++) {
        let isFullColumn = true;
        for (let i = 1; i <= 11; i++) {
            let cell = document.getElementById(`${i}-${j}`);
            if (!cell.classList.contains('forest') &&
                !cell.classList.contains('town') &&
                !cell.classList.contains('farm') &&
                !cell.classList.contains('mountain') &&
                !cell.classList.contains('water')) {
                isFullColumn = false;
                break; 
            }
        }
        if (isFullColumn) {
            fullRowsAndCols++; 
        }
    }    

    console.log("full Rows " + fullRowsAndCols)
    console.log("Total before add " + mission1stScore)
    mission1stScore += fullRowsAndCols; 
    console.log("total after " + mission1stScore)
    return mission1stScore*6; 
}

// Mission 2
function sleepyValley(mission2ndScore) {
    mission2ndScore = 0;
    console.log("Its me")

    for (let i = 1; i <= 11; i++) {
        let forestCount = 0;

        for (let j = 1; j <= 11; j++) {

            let cell = document.getElementById(`${i}-${j}`);
            if (cell.classList.contains('forest')) {
                console.log("yes IT CONTAINS")
                forestCount++;
            }
        }
            console.log("Forest Count");
            console.log(forestCount);
        if (forestCount === 3) {
            console.log("IT WAS 3 OF THEM")
            mission2ndScore += 4; 
            console.log("FullLinesScore inside loop: " + mission2ndScore)
        }
    }
    console.log("Its me")
    console.log("FullLinesScore outside: " + mission2ndScore)
    return mission2ndScore;
}


// Mission 3
function wateringPotatoes(mission3rdScore) {
    mission3rdScore = 0;
    const gridSize = 11;

    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            let cell = document.getElementById(`${i}-${j}`);
            if (cell && cell.classList.contains('farm')) {
                mission3rdScore += checkWater(i - 1, j); 
                mission3rdScore += checkWater(i + 1, j); 
                mission3rdScore += checkWater(i, j - 1); 
                mission3rdScore += checkWater(i, j + 1); 
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
function edgeOfTheForest(mission4thScore) {
    mission4thScore = 0;
    const gridSize = 11; 

    for (let j = 1; j <= gridSize; j++) {
        mission4thScore += checkForest(1, j); 
        mission4thScore += checkForest(gridSize, j); 
    }

    for (let i = 2; i <= gridSize - 1; i++) {
        mission4thScore += checkForest(i, 1); 
        mission4thScore += checkForest(i, gridSize); 
    }
    return mission4thScore;
}

function checkForest(x, y) {
    let cell = document.getElementById(`${x}-${y}`);
    if (cell && cell.classList.contains('forest')) {
        return 1; 
    }
    return 0;
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

