var budget = prompt("Ваш бюджет на месяц?", 30000);
var dailyBudget = parseInt(budget)/30;
var shopName = prompt("Название вашего магазина?", "Пряничная");
var mainList = {
	budget : budget,
	shopName : shopName,
	shopGoods : [],
	employers : [
		{
			firstName: "Vasya",
			lastName : "Pupkin",
			age : 45,
			position : "Seller"
		},
        {
            firstName: "Kolya",
            lastName : "Vasichkin",
            age : 30,
            position : "Manager"
        }
	],
	open : true
};

for (var i=0; i<3; i++) {
    mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?", "Пряники"))
}
console.log(mainList);

alert('Ваш бюджет на 1 день составит: ' + dailyBudget.toFixed(2));
