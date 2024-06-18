const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data){
    let area = 0
    let volumes = 0
    let coast = 0
    data.shops.forEach(shop => {
        area += shop.width *  shop.length;

    });
    volumes = area * data.height;
    coast = data.moneyPer1m3 * volumes;
    let budgetStatus = coast > data.budget ? "not enough" : "enough"
    return `areas of all shops :${area} m2 \nvolumes of all shops : ${volumes} m2\n${budgetStatus}`;

}

console.log(isBudgetEnough(shoppingMallData))