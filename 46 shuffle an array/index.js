let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

function shuffle(array) {
    let currIndex = array.length;

    while (currIndex != 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        currIndex -= 1;

        let temp = array[currIndex];
    }
}