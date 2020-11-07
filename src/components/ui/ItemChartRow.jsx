import React, {Component} from 'react';

class ItemChartRow extends Component {
    render() {
        return (
            <div className="ui-item-row">
                <div>
                    <span className="ui-item-row__img ui-border ui-z-index1">{this.props.label}</span>
                    <span className="ui-item-row__img icon"><img src={this.props.icon}/></span>
                </div>
                <div>
                    <p className="ui-item-row__num ui-num">{this.props.count}</p>
                </div>
            </div>
        );
    }
}

export default ItemChartRow;
