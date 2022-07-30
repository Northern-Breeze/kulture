import { isOdd } from "../../src/helper/isOdd";

describe('Testing odd numbers', () => {
    it('Pass for odd numbers', () => {
        const evenValue = { postId: 1 }
        const num = isOdd(evenValue);
        expect(num).toBe(false);
    })
    it('Pass for even numbers', () => {
        const evenValue = { postId: 4 }
        const num = isOdd(evenValue);
        expect(num).toBe(true);
    })
})