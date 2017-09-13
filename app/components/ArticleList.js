import './ArticleList.less'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'

class ArticleList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        if(this.props.articlelist.size>0){
            let list_html=[...this.props.articlelist.values()].map((article)=>{
                return (
                    <Link className="box" key={article.id} to={"/article/"+article.id}>
                        <p className="description">{article.description}</p>
                        <span className="createTime">{article.createTime}</span>
                    </Link>
                )
            })
            return (
                <div className="article-list">
                    {list_html}
                </div>
            )
        }
        else{
            return (
                <div className="none" />
            )
        }

    }
}

export default ArticleList