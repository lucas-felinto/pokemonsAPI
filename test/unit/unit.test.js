describe('Battle winner', () => {
    it('should get a random number to pick the battle winner according the odds when level is different', () => {
        var randomNumber = (Math.floor(Math.random() * 100) + 1)
        expect(randomNumber <= 100 && randomNumber >= 0)
    })

    it('should get a random number to pick the battle winner when level is equal', () => {
        var randomNumber = Math.floor(Math.random() * 2)
        expect(randomNumber = 1 || 0)
    })
})