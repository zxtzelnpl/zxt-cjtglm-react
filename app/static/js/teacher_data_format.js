import chart_format from 'chart_format'
import teacher_img from 'teacher_img'
import teacher_stock from 'teacher_stock'

export default function(list){
    let new_list=[]
    list.forEach((product)=>{
        let records=[];
        if(product.fiveday!==''){
            records.push(chart_format[product.fiveday])
        }
        if(product.nextday!==''){
            records.push(chart_format[product.nextday])
        }
        if(product.risen!==''){
            records.push(chart_format[product.risen])
        }
        if(product.threeday!==''){
            records.push(chart_format[product.threeday])
        }

    })
}