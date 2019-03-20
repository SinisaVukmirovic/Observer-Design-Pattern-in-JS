// class definition for history observer for keeping track of the past/last 5 colors
class HistoryObserver {
    constructor() {
        // creating an empty array for color history
        this.colorHistory = [];
    }

    update(model) {
        // adding the current color to the beggining of the color history array as first letter only
        this.colorHistory.unshift(model.color[0].toUpperCase());

        // message to be passed in the console
        let msg = `The most recent 5 colors were: `;

        // looping over the passed colors 
        for (let i = 0; i < 5; i++) {
            if (this.colorHistory[i]) {
                msg += this.colorHistory[i] + ' ';
            }
        }

        console.log(msg);
    }
}