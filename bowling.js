export default class BowlingGame {
    constructor(score) {
        this.total = 0;
        // make an array of rolls out of the score string input
        this.rolls = score.split('').filter(roll => roll !== ' ');
        // add a space after strikes so all frames are strings of length 2
        for (let i = 0; i < this.rolls.length; i++) {
            if (this.rolls[i] === 'X') {
                this.rolls.splice(i + 1, 0, ' ');
                i++; // need to increment i again here since string length is growing by 1
            }
        }
        this.rolls.forEach((roll, index) => {
            switch (roll) {
                case 'X':
                    this.total += 10;
                    break;
                case '/':
                    this.total += 10 - parseInt(this.rolls[index - 1]);
                    break;
                case '-':
                case ' ':
                    // no score added
                    break;
                default:
                    this.total += parseInt(roll);
            }
            // Add bonuses.
            if (
                (index < 2) ||
                (index > 21) ||
                (roll === '-') ||
                (roll === ' ')
            ) {
                // no bonus
            } else {
                // spare bonus
                if (
                    (this.rolls[index - 1] === '/') &&
                    (index < 19)
                 ) {
                    if (roll === 'X') {
                        this.total += 10;
                    } else {
                        this.total += parseInt(roll);
                    }
                }
                // strike's first bonus
                if (
                    (this.rolls[index - 2] === 'X') || 
                    (this.rolls[index - 3] === 'X')
                ) {
                    if (roll === 'X') {
                        this.total += 10;
                    } else if (roll === '/') {
                        this.total += 10 - parseInt(this.roll[index - 1]);
                    } else if ((roll >= 1) && (roll <= 9)) {
                        this.total += parseInt(roll);
                    }
                }
                // strike's second bonus
                if (
                    (index < 19) &&
                    (this.rolls[index - 4] === 'X') || 
                    (this.rolls[index - 5] === 'X')
                ) {
                    if (roll === 'X') {
                        this.total += 10;
                    } else if (roll === '/') {
                        this.total += 10 - parseInt(this.roll[index - 1]);
                    } else if ((roll >= 1) && (roll <= 9)) {
                        this.total += parseInt(roll);
                    }
                }
            }
        });
    } 
}

