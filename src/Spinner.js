import React from "react";

import "./Spinner.scss";

class Spinner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="spinner-container">
                <div className="spinner">
                </div>
            </div>
        );
    }
}

export default Spinner;