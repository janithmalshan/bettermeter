import React, {Component} from 'react';
import ContentWrapper from "../ui/ContentWrapper";
import ItemRow from "../ui/ItemRow";
import ChartTabView from "../ui/ChartTabView";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="ui-heading">Analytics</div>
                <ChartTabView/>
                <div className="ui-info-wrapper">
                    <div className="ui-info-wrapper__container">
                        <div className="ui-heading">Most Active Sites</div>
                        <div className="ui-info-wrapper__filter">
                            <label className="ui-info-wrapper__filter-label">Sites:</label>
                        </div>
                        <ItemRow label="gl" name="Glyphy" count="6,648"/>
                        <ItemRow label="ds" name="DesignStripe" count="1,374"/>
                        <ItemRow label="dv" name="DesignValley" count="20,748"/>
                        <ItemRow label="dk" name="Neueubel" count="32,884"/>
                        <ItemRow label="ds" name="Last Year" count="182,874"/>
                    </div>
                    <div className="ui-info-wrapper__container">
                        <div className="ui-heading">Top Events</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
