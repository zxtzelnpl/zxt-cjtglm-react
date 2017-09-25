import chart_format from './chart_format'
import teacher_stock from './teacher_stock'
import teacher_position from './teacher_position'

export default function(products){
    products.forEach((product)=>{
        let records=[];
        if(product.fiveday!==''){
            records.push(chart_format(product.fiveday))
        }
        if(product.nextday!==''){
            records.push(chart_format(product.nextday))
        }
        if(product.risen!==''){
            records.push(chart_format(product.risen))
        }
        if(product.threeday!==''){
            records.push(chart_format(product.threeday))
        }
        product.records = records;
        product.stock = teacher_stock(product.name)
        product.lables = teacher_position(product.position)
    })
}