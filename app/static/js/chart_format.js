export default function (str){
    let obj={}
    let arr=str.split('---')
    let distinguish = str.slice(-4)
    switch(distinguish){
        case '最大涨幅':
            obj.title = arr.pop()
            obj.date=[]
            obj.data1=[]
            obj.data2=[]
            arr.forEach((item)=>{
                let arr_item = item.split('+')
                obj.date.push(arr_item[0])
                obj.data1.push(arr_item[1])
                obj.data2.push(arr_item[2])
            })
            return obj
        case '上涨概率':
            obj.title = arr.pop()
            obj.date=[]
            obj.data=[]
            arr.forEach((item)=>{
                let arr_item = item.split('+')
                obj.date.push(arr_item[0])
                obj.data.push(arr_item[1])
            })
            return obj
        case '上涨个数':
            obj.title = arr.pop()
            obj.data = arr
            return obj
        default:
            obj.title = '五日平均涨幅'
            obj.date=[]
            obj.data=[]
            arr.forEach((item)=>{
                let arr_item = item.split('+')
                obj.date.push(arr_item[0])
                obj.data.push(arr_item[1])
            })
            return obj
    }
}