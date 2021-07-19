// array .reduce(callback, initialValue)

const numbersArray = [1, 2, 3, 4];
const lettersArray = ['r', 'e', 'd', 'u', 'c', 'e', 'r'];

const reducerCallback = (accumulator, item) => {
    console.log("accumulator, item ", accumulator, item);
    return accumulator + item;
};

const total = numbersArray.reduce(reducerCallback, 0);
const newString = lettersArray.reduce(reducerCallback, '');

console.log("Total is: ", total);
console.log("New string is: ", newString);

const stateReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.item
        case 'RESET':
            return '';
        default:    
            return state;
    }
}


// create a global STORE object to store the state changes
let wordStore = '';
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'r' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'e' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'd' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'u' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'x' });
console.log("Word store value is: ", wordStore);

wordStore = stateReducer(wordStore, { type: 'RESET' });
console.log("Word store after reset: ", wordStore);