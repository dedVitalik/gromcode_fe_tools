import { sum, mult } from '../calculator';

it('should add 1 and 2 = 3', () => {
    const sumForTest = sum(1, 2);
    expect(sumForTest).toEqual(3);
});

it('should mult 2 and 3 = 6', () => {
    const multForTest = mult(2, 3);
    expect(multForTest).toEqual(6);
});