export const numbersFractionCalculator = (numbers: number[]) => {
    var response = {
        positives: '',
        negative: '',
        zeros: '',
    }

    var numbersPositives = 0
    var numbersNegatives = 0
    var numbersZero = 0


    for(var i=0; i<numbers.length; i++) {
        var number = numbers[i]
        if(number > 0) numbersPositives++
        if(number < 0) numbersNegatives++
        if(number == 0) numbersZero++
    }

    response.positives = (numbersPositives / numbers.length).toFixed(6)
    response.negative = (numbersNegatives / numbers.length).toFixed(6)
    response.zeros = (numbersZero / numbers.length).toFixed(6)

    return response;

};
