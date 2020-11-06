import React, {Component} from 'react';

const MainWrapper = (props) =>{
    return (
        <div className="ui-main-wr">
            <div className="ui-main-wr-inner" {...props}></div>
        </div>
    );
}

export default MainWrapper;
