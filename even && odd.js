let arr = [4, 16, 19, 22, 11, 144, 967, 19124]
num = {
    even: [],
    odd: []
}
for (let item of arr){
    if (item % 2 == 0){
        num.even.push(item)
    }else{
        num.odd.push(item)
    }
}