import React, {Component} from 'react';
import ContentWrapper from "../ui/ContentWrapper";
import ItemRow from "../ui/ItemRow";
import ChartTabView from "../ui/ChartTabView";
import ItemChartRow from "../ui/ItemChartRow";

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
                        <ItemRow label="gl" name="Glyphy" count="6,648" color="ui-item-row__img--orange"/>
                        <ItemRow label="ds" name="DesignStripe" count="1,374" color="ui-item-row__img--blue"/>
                        <ItemRow label="dv" name="DesignValley" count="20,748" color="ui-item-row__img--red"/>
                        <ItemRow label="dk" name="Neueubel" count="32,884" color="ui-item-row__img--green"/>
                        <ItemRow label="ds" name="Last Year" count="182,874" color="ui-item-row__img--blue"/>
                    </div>
                    <div className="ui-info-wrapper__container">
                        <div className="ui-heading">Top Events</div>
                        <div className="ui-info-wrapper__filter">
                            <label className="ui-info-wrapper__filter-label">Events:</label>
                        </div>
                        <ItemRow label="5/10" name="Today" count="6,648" color="ui-item-row__img--orange"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
