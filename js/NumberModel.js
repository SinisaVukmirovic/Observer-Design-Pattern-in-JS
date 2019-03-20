// model class definition
class NumberModel {
    constructor() {
        // initial/default values of the number, color and observers
        this.number = 0;
        this.color = 'red';
        this.observers = [];
    }

    // increment method and choosinga color at random
    increment() {
        const colors = ['red', 'blue', 'green', 'yellow'];

        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.number++;

        // notifiying the observers about the changes of number and color
        this.notifyObservers();
    }

    // creating and add observer method to the model
    addObserver(obs) {
        // adding an element to the observers array
        this.observers.push(obs);
    }

    // creating a notify observers method
    notifyObservers() {
        // looping through all observers and notifiying them when change has been made
        for (let obs of this.observers) {
            // update method with antire model passes as argument
            obs.update(this);
        }
    }
}