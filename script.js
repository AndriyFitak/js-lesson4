const genereteRand = (min = 1,max = 100) => (Math.floor(Math.random() * (max - min)))


const genereteArr = (n) => { 
    let newArr = []
    for(let i = 0; i < n; i++){
        newArr[i] = genereteRand()
    }
    return newArr
}

const showArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

const getMaxValue = (arr) => {
    let maxValue = arr[0]
    for (let i = 0; i<arr.length; i++){
        if (arr[i] > maxValue){
            maxValue = arr[i]
        }
    }
    return maxValue
}

const swapValue = (a,b) => {
    let c = a 
    a = b
    b = c 
    return [a,b]
}

const swapMinMax = (arr) => {
    let minValue = arr[0]
    let maxValue = arr[0]
    let minIndex = 0
    let maxIndex = 0
    for (let i = 0; i < arr.length; i++){
        if (maxValue < arr[i]){
            maxIndex = i
            maxValue = arr[i]
        }
        if (minValue > arr[i]){
            minIndex = i
            minValue = arr[i]
        }
    }
    for(let i = 0; i < arr.length; i++){
        if (i == minIndex){
            arr[i] = maxValue
        }
        if (i == maxIndex){
            arr[i] = minValue
        }
    }
    return arr
}

let arr = genereteArr(5)
showArray(arr)

console.log(`This is max value:${getMaxValue(arr)}`)

// милі = кілометри * 0.6213

function convert() {
    const miles = prompt("Введіть кількість миль:");
    const kilometers = miles * 1.60934; // 1 миля = 1.60934 км
    console.log(kilometers)
    return kilometers;
}




