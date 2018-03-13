import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component{
    render(){
        return (
        <li style={{cursor:"pointer"}} onClick ={this.props.alertFn}>书名：<b>{this.props.name}</b> 出版社：<b>{this.props.from}</b></li>
        )
    }
}

//Props 验证使用 propTypes，它可以保证我们的应用组件被正确使用，
// React.PropTypes 提供很多验证器 (validator) 来验证传入数据是否有效。
// 当向 props 传入无效数据时，JavaScript 控制台会抛出警告。
Book.propTypes = {
    name: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    alertFn:PropTypes.func.isRequired
}

export default Book;