/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/
// Jon, embarrassed, intends to head back to Winterfell asap. First, let's create a backpack for him so he can begin to pack his bags. Create a variable called backpack, that is equal to an empty array.

let backpack = []

// Now let's add three strings to his array

backpack.push(`sword`,`shield`,`food`)

console.log(backpack)

//Realizing that his backpack is going to be too full to add other essentials, Jon decides to take his sword out and place it on his belt. Remove this sword from the backpack.

let belt = backpack.splice(0,1)
//let belt2 = backpack.slice(0,1)

// console.log(belt)
// console.log(belt2)
// console.log(backpack)

//Now Jon decides he wants to add his fur coat to his backpack. Create a variable called furCoat and give it a string value of "fur coat". Then add that variable to the backpack.

let furCoat = `fur coat`


backpack.unshift(furCoat)
//backpack.splice(2,0,furCoat)


//Realizing it is freezing outside, Jon decides to take the fur coat back out and put it on. Without using splice, remove the fur coat from the array.
backpack.shift()


//Let's check how much stuff we have in our backpack

let itemcCount = backpack.length
console.log(itemcCount)

//backpack.reverse()

//console.log(backpack[0])

//There is currently no where near enough supplies to make the journey to Winterfell. Let's add some other essentials. Add the strings: flint, blanket, knife, and toothbrush

backpack.push(`flint`,`blanket`,`knife`,`toothbrush`)

console.log(backpack)

//Split up his content into two bags. Use splice method to move flint,blanket, and knife

let backpack2 = backpack.splice(backpack.length - 4,4)

console.log(backpack2)

// Using bracket syntax, console.log the first item in backpack2

//console.log(backpack2[0])
//Let's see the contents of Jon's backpacks. Use a for loop on each backpack to console.log each item.

for(let i=0;i<backpack.length;i++){
    console.log(backpack[i])
}

for(let i=0;i<backpack2.length;i++){
    console.log(backpack2[i])
}

for(i = 0;i<3;i++){
    console.log(i,'==========',backpack2[i])
}









