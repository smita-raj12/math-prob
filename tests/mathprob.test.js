import Mulnum from '../src/mathprob.js';

describe('Mulnum', () => {

  test('should correctly returns the sum of multiples of 3 and 5', () => {
    let mulNum= new Mulnum(1000);
    expect(mulNum.multiples()).toEqual(234168);
  });

  /*test('should create a fibonacci sequence from 0 to inputted mulNum', () => {
    let fibNum = 10;
    expect (fibNum.fibonacci()).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
*/
  test('should check prime number', () => {
    let mulNum= new Mulnum(3);
    expect (mulNum.isPrime()).toEqual(true);
  });

  test('should return largest prime number', () => {
    let mulNum= new Mulnum(600851475143);
    expect (mulNum.largestPrimeFactor()).toEqual(6857);
  });
});
