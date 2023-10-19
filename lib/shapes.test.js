const { Triangle, Circle, Square } = require('./shapes');

describe('Shape classes', () => {
    test('Triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    test('Circle', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    test('Square', () => {
        const shape = new Square();
        shape.setColor('green');
        expect(shape.render()).toEqual('<rect width="200" height="200" fill="green" />');
    });
})