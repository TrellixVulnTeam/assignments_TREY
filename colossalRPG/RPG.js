const readlineSync = require('readline-sync');
let notDead = true;

const username = readlineSync.question('You made it! Welcome to The Forest of Lunafreya. What is your name, brave one?: ');
console.log('Welcome to the gauntlet, ' + username + '...');
class Protagonist {
    constructor(player, hp, ap) {
        this.player = player
        this.hp = hp
        this.ap = ap
        this.satchel = ['Hi-Potion']
    }
}
const player = new Protagonist(username, 100, 100)

class Mob {
    constructor(enemy, hp, ap) {
        this.enemy = enemy
        this.hp = hp
        this.ap = ap
    }
}
const tonberry = new Mob("Tonberry", 500, 500);
const cactaur = new Mob("Cactuar", 25, 200);
const flan = new Mob("Flan", 25, 25);
const evilTwin = new Mob("Evil Twin", 100, 100);
const enemies = [tonberry, cactaur, flan, evilTwin];

while (notDead) {
    const controls = readlineSync.keyIn('Walk [w], Check your satchel [i], or Quit [q]? ', { limit: 'wiq' });
    if (controls === 'w') {
        walking()
    } else if (controls === 'i') {
        openSatchel()
    } else if (controls === 'q') {
        notDead = false
        console.log('Ok, bye I guess..')
    }
}

function walking() {
    const chance = Math.random();
    if (chance > 0.25) {
        console.log('*So far, so good. You can keep walking or use the other options previously provided.*')
    } else {
        enemyAppears()
    }
}

function openSatchel() {
    console.log(player.satchel);
}



function enemyAppears() {
    fightLoop();
};
function fightLoop() {
    const random = enemies[Math.floor(Math.random() * enemies.length)];
    // do a loop here until enemy hp or player hp is 0 or less, or if they get away
    while (player.hp > 0 && random.hp > 0) {
        // optionally ask if the player wants to hit, use item, or run, etc...
        const fightControls = readlineSync.keyIn('Think fast! The ' + random.enemy + ' has shown its ugly face! [r]RUN , [s]Attack!!! , or [q]quit??? ', { limit: 'srq' });

        const oddOfEscape = Math.random()

        if (fightControls === 'r') {
            if (oddOfEscape > .5) {
                console.log('You have escaped!')
            } else {
                enemyAttack()
            }
        } else if (fightControls === 's') {
            playerAttack(random);
            enemyAttack();
        } else if (fightControls === 'q') {
            notDead = false;
            console.log('Okay, bye I guess...')
            break;
        }

    };
    // if hit
    // if the player gets hit, subtract his hp
    // if the enemy gets hit, subtract its hp
    // if item
    // implement effect of item
    // if run
    // run random chance of running   
    // print the result of each hit
    // repeat until once character has hp of 0 or less
    // Once out of the loop, if the character succeeded, you can check if the enemy had an item
    // if enemy had item, add it to player inventory
}
function enemyAttack(random) {
    player.hp -= Math.floor(Math.random() * random.ap)
    console.log(player.hp);
}
function playerAttack(random) {
    random.hp -= Math.floor(Math.random() * player.ap)
    console.log(random.hp);
}
