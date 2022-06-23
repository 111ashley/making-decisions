/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25 
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack){
    console.log 'Jon Snow has better attack than Jamie'
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log 'Jamie has a better attack than Jon'
} else {
    console.log('Jon and Jamie have the same attack')
}

let jonSnowHealth = 100
let jonSnowDefense = 0

//Jamie attacks first - use an if/else to determine if Jon Snow can survive the attack. If he does not, console.log "Jon Snow has been slain." Otherwise,
// console.log "Jon Snow's health"

if(jonSnowHealth <= jamieLannisterAttack ) {
    console.log(`Jon Snow has been slain`)
} else {
    // jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    jonSnowHealth >= jamieLannisterAttack
    console.log(`Jon Snows health is down to ${jonSnowHealth}` )
}

    jonSnowDefense += 25

    if(jonSnowHealth <= jamieLannisterAttack - jonSnowDefense ) {
        console.log(`Jon Snow has been slain`)
    } else {
        // jonSnowHealth = jonSnowHealth - jamieLannisterAttack
        jonSnowHealth -=(jamieLannisterAttack - jonSnowDefense)
        console.log(`Jon Snows health is down to ${jonSnowHealth}` )
    }