var wrap = document.body.querySelector(".wrapper");

var dragon_health=10;
var user_health=5;

while(dragon_health > 0 && user_health > 0 ){
  var hits = prompt("How many hits are you going to attempt to hit the dragon (up to five hits)?");


randon_damage_user=Math.floor(Math.random() * hits) +1;
if(randon_damage_user>5){
  dragon_health=dragonHealth-1; 
}

else{
 dragon_health= dragon_health - randon_damage_user ; 
}

  
if(dragon_health > 0){
  random_damage_dragon = Math.floor(Math.random() * 2)+1;
  user_health = user_health - random_damage_dragon;
}
  
else{
  damage_done_by_user = 10 - dragon_health;
  damage_done_by_dragon = 5 - user_health;
  wrap.innerHTML = "User Damage:" + damage_done_by_user + "  Dragon Damage:" + damage_done_by_dragon + "  USER WINS!!!!";
}

if(user_health <= 0){
  damage_done_by_user = 10 - dragon_health;
  damage_done_by_dragon = 5 - user_health;
  wrap.innerHTML = "User Damage:" + damage_done_by_user + "  Dragon Damage:" + damage_done_by_dragon + "  DRAGON WINS!!!!";
}



}