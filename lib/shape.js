class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error('Method render() must be implemented')
    }
}

module.exports = Shape;