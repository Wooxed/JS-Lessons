
// @ts-ignore
test('Task 01', ()=>{
    function sum(a: number) {
        return (b: number) => {
            return a + b
        }
    }

    expect(sum(3)(6)).toBe(9)
})

test('Task 02', ()=> {
    function makeCounter(){
        let count = 0
        return () => {
            return ++count
        }
    }
    const counter = makeCounter()
    expect(counter()).toBe(1)
    expect(counter()).toBe(2)
    const counter2 = makeCounter()
    expect(counter2()).toBe(1)
    expect(counter()).toBe(3)
})

test('Task 03', ()=> {
    function makeCounter(startCounter: number) {
        return {
            count: startCounter,
            increase() {
                return this.count + 1
            },
            decrease() {
                return this.count - 1
            },
            reset() {
                return this.count = 0
            },
            set() {
                return this.count = startCounter
            },
        }
    }
    expect(makeCounter(1).increase()).toBe(2)
    expect(makeCounter(1).decrease()).toBe(0)
    expect(makeCounter(1).reset()).toBe(0)
    expect(makeCounter(5).set()).toBe(5)

})