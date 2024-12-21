import { myNew } from '../src/index';

describe('myNew function', () => {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    Person.prototype.greet = function () {
        return `Hello, my name is ${this.name}`;
    };

    test('should create an object with the correct prototype and properties', () => {
        const person = myNew(Person, 'Alice', 25);
        expect(person).toBeInstanceOf(Person);
        expect(person.name).toBe('Alice');
        expect(person.age).toBe(25);
    });

    test('should attach methods to the prototype', () => {
        const person = myNew(Person, 'Bob', 30);
        expect(person.greet()).toBe('Hello, my name is Bob');
    });

    test('should return object explicitly returned by constructor', () => {
        function ExplicitReturn() {
            return { message: 'This is an explicit return' };
        }

        const obj = myNew(ExplicitReturn);
        expect(obj).toEqual({ message: 'This is an explicit return' });
    });

    test('should return the new object if constructor does not return explicitly', () => {
        function NoReturn(name) {
            this.name = name;
        }

        const obj = myNew(NoReturn, 'NoReturn');
        expect(obj.name).toBe('NoReturn');
        expect(obj).toBeInstanceOf(NoReturn);
    });

    test('should handle constructors that are not functions', () => {
        const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
        const obj = myNew(null);
        expect(obj).toBeUndefined();
        expect(warnSpy).toHaveBeenCalledWith('null is not a function');
        warnSpy.mockRestore();
    });

    test('should support constructor with no arguments', () => {
        function NoArgs() {
            this.message = 'No arguments';
        }

        const obj = myNew(NoArgs);
        expect(obj.message).toBe('No arguments');
        expect(obj).toBeInstanceOf(NoArgs);
    });
});
