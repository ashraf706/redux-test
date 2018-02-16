import {counter} from "../Counter";


describe('counter reducer', () => {
    it('Increment should increment the value', () => {
        expect(counter(0, {type : 'INCREMENT'})).toEqual(1)
    });

    it('should create an action to increase counter', () => {
        expect(counter(1, {type : 'INCREMENT'})).toEqual(2)
    });

    it('Decrement should decrement the value', () => {
        expect(counter(2, {type : 'DECREMENT'})).toEqual(1)
    });

    it('Decrement should decrement the value', () => {
        expect(counter(1, {type : 'DECREMENT'})).toEqual(0)
    });

    it('Undefined type should return state', () => {
        expect(counter(2, {})).toEqual(2)
    });

    it('Unexpected type should return initial state', () => {
        expect(counter(2, {type : 'SOMETHING'})).toEqual(2)
    });

    it('For undefined stated it should return initial state', () => {
        expect(counter(undefined, {})).toEqual(0)
    });

});
