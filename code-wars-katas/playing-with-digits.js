//Function that k where (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

function digPow(n, p){
    const digits = `${n}`.split('').map(x => Number(x));
    
    let sumOfPowers = 0;
    let power = p;
    
    for (let i = 0; i < digits.length; i++) {
      sumOfPowers += Math.pow(digits[i], p);
      p++;
    }
    
    const k = sumOfPowers / n;
    
    if (Number.isInteger(k)) {
      return k;
    } else {
      return -1;
    }
  }

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51