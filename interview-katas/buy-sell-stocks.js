//--------Buy and Sell stocks II -----------

/* We have to determine the maximum profit that can be obtained by making the transactions 
(no limit on the number of transactions done). For this we need to find out those sets of buying 
and selling prices which together lead to the maximization of profit.*/

const prices= [1, 7, 2, 3, 6, 7, 6, 7];

function profit(prices){
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++){
        //Verify if arr[i] is a peak or valley
        if (prices[i] > prices[i - 1]){
            maxProfit += prices[i] - prices[i - 1];
        }
    }

    return maxProfit;
};

console.log(profit(prices));