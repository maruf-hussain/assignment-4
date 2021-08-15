১. [ ফাংশন নেম দিতে হবে seerToMon]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে সের। তারপর সেটাকে মন এ কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে। 

.

২. [ ফাংশন নেম দিতে হবে totalSales]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 

১ টি শার্টের দাম – ১০০ টাকা

১ টি প্যান্টের দাম – ২০০ টাকা 

১ টি জুতার দাম – ৫০০ টাকা 

এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি করে তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে। 

.

৩. [ ফাংশন নেম দিতে হবে deliveryCost]: প্যারামিটার হিসাবে নিবে কয়টা টি-শার্ট ডেলিভারি করবে। 

যদি ১০০ বা তার কম টি-শার্ট পাঠাও তাহলে প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে। 

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম টি শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। 

যদি ২০০ এর বেশি টি-শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০১ থেকে ২০০ পর্যন্ত যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। ২০০ এর বেশি যতগুলা আছে সেগুলার সবগুলা প্রতিটা ৫০ টাকা করে দিতে হবে। 



এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা ডেলিভার খরচ হবে। 

আমার ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। 



৪. [ ফাংশন নেম দিতে হবে perfectFriend]: বিস্তারিত ভিডিওতে দেখো। 
5 word name friend ke dekate hobe


.

কিছু কমন প্রশ্ন: 

প্রশ্ন-১: ফ্যাংশন লেখার পর সেই ফাংশনকে কল করে টেস্ট করে console.log করে চেক করা লাগবে? 

উত্তর: তুমি চাইলে সেই ফাংশনকে কল করে ফাংশনের রিটার্ন একটা ভেরিয়েবলে রেখে সেই ভেরিয়েবল কে console.log করে রেজাল্ট ঠিক আছে কিনা চেক করতে পারো। তবে তোমাকে চেক করলে মার্ক্স্ বেশি দেয়া হবে। আর চেক না করলে মার্ক্স্ দেয়া হবে না। এমন কিছু না। তুমি চেক করা না করা অপশনাল। 



প্রশ্ন-২: সবসময় কি সংখ্যা বা স্ট্রিং রিটার্ন করবো।  

উত্তর: সব প্যারামিটার ঠিক থাকলে সঠিক সংখ্যা বা সঠিক ভ্যালু রিটার্ন করবে। সেটা সংখ্যা বা স্ট্রিং হতে পারে। আর যদি এক বা একাধিক ইনপুট খারাপ থাকে তাহলে কোন error স্ট্রিং হিসেবে রিটার্ন করে দিবে। 


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
