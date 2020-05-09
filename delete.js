function digital_root(n) {
    let sum = 0
    n.toString().split("").map(b => sum += Number(b))

    while (sum > 9) {
        sum = digital_root(sum)
    }

    return sum
 }


 console.log(digital_root(380938))