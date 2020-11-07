import React, {Component} from 'react';
import TabItem from "./TabItem";
import iconClock from '../../images/ic-clock.svg'
import iconChart from '../../images/ic-chart.svg'
import iconT1 from '../../images/ic-t1.svg'
import iconT2 from '../../images/ic-t2.svg'
import ItemChartRow from "./ItemChartRow";
import icon from "../../images/ic-gindara.svg";
import {Hidden} from "@material-ui/core";

class ChartTabView extends Component {
    render() {
        return (
            <div>
                <div className="ui-tab-wrapper">
                    <TabItem name="Pageviews" count="223.5k" icon={iconChart} value={iconT1} className="00"/>
                    <TabItem name="Unique Users" count="74.858" icon={iconChart} value={iconT2}/>
                    <TabItem name="Average visit time" count="01:45" icon={iconClock} value={iconT1}/>
                    <TabItem name="Bounce Rate" count="25.7%" icon={iconChart} value={iconT2}/>
                </div>
                <div className="ui-tab-content">
                    <Hidden smDown> {/* show in desktop*/}
                        <div className="ui-tab-content-left">
                            <ItemChartRow label="gl" count="32,884" icon={icon}/>
                            <ItemChartRow label="ds" count="6,884" icon={icon}/>
                            <ItemChartRow label="dk" count="2,884" icon={icon}/>
                        </div>
                    </Hidden>
                    <div className="ui-tab-content-right"></div>
                </div>
            </div>
        );
    }
}

export default ChartTabView;
