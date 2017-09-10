export function average(){
    let array=[],all=0,len,average
    Array.prototype.forEach.call(arguments,(arg)=>{
        if(typeof arg === 'number'){
            array.push(arg)
        }
        else if(typeof arg === 'string'){
            array.push(arg)
        }
        else if(arg instanceof Array){
            array = array.concat(arg)
        }
    })

    array.forEach((num)=>{
        if(typeof num!=='number'){
            num = parseInt(num)
        }
        all+=num
    })
    len = array.length
    average = Math.round(all*100/len)/100
    return average
}