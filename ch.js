// /* .......................Problem (01) ..................*/


function seerToMon(seer){
    if(typeof seer != 'number'){
        return 'Please put (string,boolean,object) in place object then error';
    }
        let mon = seer / 40;
        return mon;
    }

    let totalSeer = 400;
    let totalMon = seerToMon(totalSeer);
    console.log(totalMon);


// /* .......................Problem (02) ..................*/


function totalSales(shirt, pant, shoes){
    if(typeof shirt, pant, shoes <= 0){
        return 'Please put (!=) in place (<) then error message';
    }
        const shirtRate = 100;
        const pantRate = 200;
        const shoesRate = 500;
        const totalSalesShirtRate = shirt * shirtRate; 
        const totalSalesPantRate = pant * pantRate; 
        const totalSalesShoesRate = shoes * shoesRate; 

        const totalShirtPantShoesRate = totalSalesShirtRate + totalSalesPantRate + totalSalesShoesRate;
        return totalShirtPantShoesRate;

    }

    const totalShirtPantShoesQuantity = totalSales(10, 3, 2);
    console.log( totalShirtPantShoesQuantity);


/* .......................Problem (03) ..................*/


function deliveryCost(tShirt) {
   if(typeof tShirt != 'number'){
    return 'Please put (string,boolean,object) in place object then error';
   }
    const deliveryFirst100TShirt = 100;
    const deliverySecond100TShirt = 80;
    const deliveryRestTShirt = 50;

    if (tShirt <= 100) {
        const cost = tShirt * deliveryFirst100TShirt;
        return cost;
    } 
    
    else if (tShirt <= 200) {
        
        const firstDeliveryTShirt = 100 * deliveryFirst100TShirt;
        const restTShirt = tShirt - 100;
        const secondDeliveryTShirt = restTShirt * deliverySecond100TShirt;
        const totalDelivery = firstDeliveryTShirt + secondDeliveryTShirt;
        return totalDelivery;
    } 

    else {
        const firstDeliveryTShirt = 100 * deliveryFirst100TShirt;
        const secondDeliveryTShirt = 100 * deliverySecond100TShirt;
        const restTShirt = tShirt - 200;
        const restDeliveryTShirt = restTShirt * deliveryRestTShirt;
        const totalDelivery = firstDeliveryTShirt + secondDeliveryTShirt + restDeliveryTShirt;
        return totalDelivery;

    }

}

const delivery = deliveryCost(320);
console.log(delivery);


// /* .......................Problem (04) ..................*/

function perfectFriend(friends){
    let friend = friends [0];
    if(typeof friends != 'object'){
        return 'Please put (number,string,boolean) in place object then error';
    }

    for(let i = 0; i < friends.length; i++){
        element = friends[i];
        if(element.length == 5 ){
            friend = element;
        }
            
    }

    return friend;
        

    }

    let friendsList = ['parves', 'noman', 'abusayed', 'tohiduzzaman', 'kuddus', 'koituri'];
    let mainFriends = perfectFriend(friendsList);
    console.log(mainFriends);
