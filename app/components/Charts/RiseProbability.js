import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './Charts.less'
import chart_bg from '../../static/img/teacher/rise-probability.png'

function myCanvas(main,record){
    let {title,date,data} = record
    let {sin,cos,PI} = Math
    let totalRise,risePercent;
    totalRise = data.reduce(function (previousValue, currentValue) {
        currentValue = currentValue < 1 ? 0 : currentValue;
        return Number(previousValue) + Number(currentValue);
    }, 0);
    risePercent = parseInt(totalRise * 100 / (data.length * 2)) + '%';



    const dpr = Math.max(window.devicePixelRatio || 1, 1);//2
    let canvas=document.createElement('canvas');
    let WIDTH=main.scrollWidth;
    let HEIGHT=main.scrollHeight;
    const colors=['#fdc453','#fdc453','#f17d62'];
    canvas.style.width=WIDTH+'px';
    canvas.style.height=HEIGHT+'px';
    canvas.width=WIDTH*dpr;
    canvas.height=HEIGHT*dpr;
    main.appendChild(canvas);
    const context=canvas.getContext('2d');
    context.scale(dpr,dpr);
    writeTitle(context,title);
    middleImage(context);

    /*有图片有限画图片，剩余函数内部调用*/
    function middleImage(ctx){
        ctx.save();
        ctx.beginPath();
        let image=new Image();
        let dwidth=140
            ,dheight=133
            ,dx=(WIDTH-dwidth)/2
            ,dy=(HEIGHT-dheight)/2+50;//后期修正
        image.setAttribute('src',chart_bg);
        image.onload=function(){
            ctx.drawImage(image,dx,dy,dwidth,dheight);
            totalNum(ctx,dx,dy,dwidth,dheight);
            bigArc(ctx);
        };
        ctx.restore();
    }

    /*写标题*/
    function writeTitle(ctx,title){
        ctx.save();
        ctx.beginPath();
        ctx.font = "bold 18px Microsoft YaHei";
        ctx.textBaseline='top';
        ctx.textAlign='center';
        ctx.fillText(title,WIDTH/2,5);
        ctx.restore();
    }

    /*画上大圆环*/
    function bigArc(ctx){
        let startAngle=-1/8*PI
            ,endAngle=-7/8*PI
            ,x=WIDTH/2
            ,y=190
            ,radius=130;

        ctx.save();

        ctx.beginPath();
        ctx.strokeStyle='#fff7e8';
        ctx.lineWidth=2;
        ctx.arc(x,y,radius,startAngle,endAngle,true);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle='#fbe2ae';
        ctx.setLineDash([2, 6]);
        ctx.lineDashOffset = 1;
        ctx.lineWidth=2;
        ctx.arc(x,y,radius,startAngle,endAngle,true);
        ctx.stroke();
        ctx.restore();

        data.forEach(function(value,index){
            dataUpNumbers(ctx,index,value,radius,x,y,startAngle,endAngle)
        });
    }

    /*画圆弧上的数字圆*/
    function dataUpNumbers(ctx,index,value,RADIUS,X,Y,startAngle,endAngle){
        let text=date[index];
        let radius=20;

        let angle=endAngle+(startAngle-endAngle)/4*index;
        let x=X+cos(angle)*RADIUS;
        let y=Y+sin(angle)*RADIUS;

        ctx.save();

        ctx.beginPath();
        ctx.shadowColor = "#ccc";
        ctx.shadowBlur = 20;
        ctx.fillStyle="white";
        ctx.arc(x,y,radius,0,2*PI,false);
        ctx.fill();

        ctx.restore();
        ctx.save();

        ctx.beginPath();
        ctx.shadowColor = "#8d817e";
        ctx.shadowOffsetY = 4;
        ctx.shadowOffsetX = 4;
        ctx.fillStyle=colors[value];
        ctx.arc(x,y,radius,0,2*PI,false);
        ctx.fill();

        ctx.restore();
        ctx.save();

        ctx.beginPath();
        ctx.font = 'bolder 22px Microsoft YaHei serif';
        ctx.textBaseline='middle';
        ctx.textAlign='right';
        ctx.fillStyle="white";
        ctx.fillText(value,x,y);


        ctx.beginPath();
        ctx.font = 'bolder 6px Microsoft YaHei serif';
        ctx.textBaseline='middle';
        ctx.textAlign='left';
        ctx.fillText("个",x,y);

        ctx.beginPath();
        ctx.font = '8px Microsoft YaHei serif';
        ctx.textBaseline='top';
        ctx.textAlign='center';
        ctx.fillStyle="black";
        if(index===0){
            x+=5;
        }else if(index===4){
            x-=5;
        }
        ctx.fillText(text,x,y+radius*1.2);

        ctx.restore();
    }

    /*上涨概率数字*/
    function totalNum(ctx,dx,dy,dwidth,dheight){
        ctx.save();
        ctx.beginPath();

        let x=parseInt(dx+dwidth/2);
        let y=parseInt(dy+dheight/2);

        ctx.font = '32px Microsoft YaHei serif';
        ctx.shadowColor = "#b6503a";
        ctx.shadowOffsetY = 2;
        ctx.shadowOffsetX = 2;
        ctx.textBaseline='middle';
        ctx.textAlign='center';
        ctx.fillStyle="#f17d62";
        ctx.fillText(risePercent,x,y);
        ctx.restore();
    }
}

class RiseProbability extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        myCanvas(this.main,this.props.record)
    }

    render() {
        let date_len=this.props.record.date.length
        let word = this.props.record.title.slice(0,1)
        let totalRise = this.props.record.data.reduce(function (previousValue, currentValue) {
            currentValue = currentValue < 1 ? 0 : currentValue;
            return Number(previousValue) + Number(currentValue);
        }, 0);
        let risePercent = parseInt(totalRise * 100 / (this.props.record.data.length * 2)) + '%';
        return (
            <div className="rise-probabilty charts">
                <div className="main" ref={(main)=>{this.main=main}} />
                <div className="text">
                    <p>数据统计：</p>
                    <p>1、统计阶段：最近<span>{date_len}</span>个交易日，共计<span>{this.props.record.data.length * 2}</span>只标的；</p>
                    <p>2、统计数字：</p>
                    <p>(1)数字“1”表示推出2只标的中{word}日有1只上涨;</p>
                    <p>(2)数字“2”表示推出2只标的中{word}日有2只上涨;</p>
                    <p>3、统计结果：统计期间上涨标的总数为 <span className="red">{totalRise}</span>只，上涨率为 <span className="red">{risePercent}</span>。</p>
                </div>
            </div>
        )
    }
}

export default RiseProbability