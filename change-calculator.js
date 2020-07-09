//---------FUNCTION THAT OUTPUTS THE DENOMINATIONS FOR CHANGE OWED TO A CUSTOMER--------------
const calculateChange = function(total, cash) {
    let change = cash - total;
    let changeObj = {};

    const denominations = {
        twentyDollar: 2000,
        tenDollar: 1000,
        fiveDollar: 500,
        twoDollar: 200,
        oneDollar: 100,
        quarter: 25,
        dime: 10,
        nickel: 5,
        penny: 1
    };

    const values = Object.values(denominations);

    for (let i = 0; change > 0 && i < values.length; i++) {
        let value = values[i]; 

        if (value <= change) {

            const key = Object.keys(denominations).find(key => denominations[key] === value);
            changeObj[key] = Math.floor(change / value);
            change -= value * changeObj[key];
        }
    }

    return changeObj;

  };
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));