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

export function formatDate(data){
    if(data.title.indexOf('平均涨幅')>-1){
        let num = average(data.data)
        return num +'%'
    }
    else if(data.title.indexOf('最大涨幅')>-1){
        let arr = data.data1.concat(data.data2)
        let num = Math.max.apply(undefined,arr)
        return num +'%'
    }
    else if(data.title.indexOf('上涨个数')>-1){
        let num = data.data[0]
        return num
    }
    else if(data.title.indexOf('上涨概率')>-1){
        let sum = data.data.reduce((prev,curr)=>{
            return prev + parseInt(curr)
        },0)

        let num = parseInt(sum*100/(data.data.length*2))
        return num + '%'
    }
}

export function numToChinese(num){
    switch(num){
        case 1:
            return '次'
        case 2:
            return '二'
        case 3:
            return '三'
        case 4:
            return '四'
        case 5:
            return '五'
    }
}