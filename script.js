/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// *FUNZIONI -------------------------------------------------------------
// creo funzione per generare celle
function createCell(number){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.append(number);
    return cell;
}



// * FASE INIZIALE -------------------------------------------------------
// Prendo elementi dal DOM
const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const h2 = document.querySelector('h2');
const grid = document.querySelector('.grid');



// * EVENTI --------------------------------------------------------------
const rows = 10;
const cols = 10;
const totalCells = rows * cols; 


// aggiungo event listener al button
button.addEventListener('click', function(){
    // rimuovo nodo
    if (h2){
        container.removeChild(h2);
        // genero griglia al click aggiungendo le celle
        for(let i = 1 ; i <= totalCells; i++){
            const cell = createCell(i);
            
            cell.addEventListener('click', function(){
                cell.classList.toggle('clicked');
                console.log('cella n:' + i);
            });
            
            grid.appendChild(cell);
        }
    }  
});