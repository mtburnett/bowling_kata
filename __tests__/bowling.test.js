import BowlingGame from '../bowling.js';

describe('Jest', () => {
    test('is behaving sanely', () => {
        expect(sum(1, 2)).toBe(3);
    });
    function sum(a, b) {
        return a + b;
    }
});

describe('BowlingGame', () => {
    test(`gives the correct score for game 'X X X X X X X X X X X X'`, () => {
        const game = new BowlingGame('X X X X X X X X X X X X');
        expect(game.total).toBe(300);
    });
    test(`gives the correct score for score '9- 9- 9- 9- 9- 9- 9- 9- 9- 9-'`, () => {
        const game = new BowlingGame('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-');
        expect(game.total).toBe(90);
    });
    test(`gives the correct score for score '5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5'`, () => {
        const game = new BowlingGame('5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5');
        expect(game.total).toBe(150);
    });
})
