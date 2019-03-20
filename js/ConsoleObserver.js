// class definition for console observer
class ConsoleObserver {
    constructor() {

    }

    // update method for console observer
    update(model) {
        console.log(`The number is ${model.number} and the color is ${model.color.toUpperCase()}.`)
    }
}