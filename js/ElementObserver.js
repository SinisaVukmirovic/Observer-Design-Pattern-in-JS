// class definition of square element observer, its number and bg color
class ElementObserver {
    constructor(elemId) {
        this.element = document.getElementById(elemId);
    }

    // update method of this observer
    // passing in model as argument and accesing number and color by it
    update(model) {
        this.element.innerHTML = model.number;
        this.element.style.backgroundColor = model.color;
    }
}