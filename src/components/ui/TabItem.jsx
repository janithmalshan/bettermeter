import React, {Component} from 'react';
import icon from '../../images/ic-views.svg'

class TabItem extends Component {
    render() {
        return (
            <div className="ui-tab-item">
                <div className="ui-tab-item__top">{this.props.name}<img src={icon}/></div>
                <div className="ui-tab-item__bottom">
                    <img src={this.props.icon}/>
                    <label className="ui-num">{this.props.count}</label>
                    <img src={this.props.value}/>
                </div>
            </div>
        );
    }
}

export default TabItem;
