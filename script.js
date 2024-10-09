/*
Question 1

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1] 
*/


function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++){ // Outer loop
    for (let j = 0; j < numbers.length; j++){ // Inner loop
      if (numbers[i] + numbers[j] === target && i != j){ // If both numbers are different and sum up to the target
        return [i, j] // Return the indexs
      }
    }
  }
}


/*
Question 2

Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/


function towerBuilder(nFloors) {
  const towerOfStars = [] 
  const width = 2 * nFloors - 1 // Calculates total width of tower
  
  for (let i = 1; i <= nFloors; i++){
    let numOfStars = 2 * i - 1 // Calculates the amount of stars in the current floor
    let numOfSpaces = (width - numOfStars) / 2 // Calculates the number of spaces at the start/end of the current floor
    let row = " ".repeat(numOfSpaces) + "*".repeat(numOfStars) + " ".repeat(numOfSpaces) // Joins it all in one string
                                           
    towerOfStars.push(row)
  }
  
  return towerOfStars
}


/*
Question 3

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
*/


function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}


function declareWinner(fighter1, fighter2, firstAttacker) {
  console.log(`Fighter 1: Name ${fighter1.name}, Health ${fighter1.health}`)
  console.log(`Fighter 2: Name ${fighter2.name}, Health ${fighter2.health}`)
  
  let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2 // Determines who the first attacker is
  let defender = firstAttacker === fighter1.name ? fighter2 : fighter1 // Determines who is not the first attacker
  
  while (fighter1.health > 0 && fighter2.health > 0){
    defender.health -= attacker.damagePerAttack // The current attacker removes the current defenders health
    console.log(`${attacker.name} attacks ${defender.name}; ${defender.name} now has ${defender.health} health`)
    
    if (defender.health <= 0){ // If the current defender has no more health
      return attacker.name // The winner is returned
    }
    [attacker, defender] = [defender, attacker] // This switches the attacker and defender turns
  }
}