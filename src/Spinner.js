import React from 'react';

// Spinner functional component
const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
}
// defaultProps
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;