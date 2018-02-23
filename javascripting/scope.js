const a = 1, b = 2, c = 3

firstFunction = () => {
    const b = 5, c = 6
    secondFunction = () => {
        const b = 8
        console.log('a: ' + a + ', b: ' + b + ', c: ' + c)
        thirdFunction = () => {
            const a = 7, c = 9
            fourthFunction = () => {
                const a = 1, c = 8
            }

            fourthFunction()
        }

        thirdFunction()
    }

    secondFunction()
}

firstFunction()