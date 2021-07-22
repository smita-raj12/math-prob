export default class Mulnum{
    constructor(mulNum){
      this.mulNum = mulNum
    }


  multiples() {
    let sum = 0;
    for (let i = 0; i <=this.mulNum; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
        }
    }
    return sum;
  }  

/* fibonacci(number) {
    if (number == 0) {
        return [0];
    }
    if (number == 1) {
        return [0, 1];
    } else {
        let fibo = fibonacci(number - 1);
        let nextElement = fibo [number-1] + fibo [number-2];
        fibo.push(nextElement);
        return fibo;
    }*/

    isPrime() {
      if (this.mulNum == 2 || this.mulNum == 3) return true;
      for (let i = 2; i * i < this.mulNum; i++) {
          if (this.mulNum % i === 0) return false;
      }
      return true;
  }


  largestPrimeFactor() {
    let i = 2;
    while (i * i < this.mulNum) {
        while (this.mulNum % i == 0) {
          this.mulNum /= i;
        }
        i ++;
    }
    return this.mulNum;
  }
}

