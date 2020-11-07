import React, {Component} from 'react';

class ItemRow extends Component {
    render() {
        return (
            <div className="ui-item-row">
                <div>
                    <span className={this.props.color + ' ui-item-row__img '}>{this.props.label}</span>
                    <p className="ui-item-row__num">{this.props.name}</p>
                </div>
                <div>
                    <p className="ui-item-row__num ui-num">{this.props.count}</p>
                </div>
            </div>
        );
    }
}

export default ItemRow;
