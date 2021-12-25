function Party(){
    Party_organizer(function(guest){
        let Pizzas = Pizzas(guest);
        let cd = Colddrinks(guest);
        console.log("the Pizzas is "+Pizzas);
        console.log("the colddrink is "+ cd);
    })
}

function Pizzas(guest){
    return guest*2;
}

function Colddrinks(guest){
    guest*3;
}

function Party_organizer(guest, weather){
    let weather = '';
    setTimeout(function(){
        weather = 'rainy';
        no_of_guest(weather, 100, function(){
            console.log("I got my guest after 4s'");
        });
    }, 4000)
}

function no_of_guest(weather, guest, cb){
    if(weather == 'rainy') cb(guest/2);
    else cb(guest);
}