import React from 'react';
import OkrHeader from "./OkrHeader";
import OkrSideInfos from "./OkrSideInfos";
import Objective from "./Objective";
import OkrDashboard from "./OkrDashboard";
// import { Pie } from 'react-peity?';

class Okr extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            objective: {},
            data: {},
            options: {}
        };
    }

    componentDidMount() {
        // const board = this.props.board;
        // this.setState({board: board});
    }

    componentDidUpdate() {
        if (!this.state.loaded) {
            this.setState({loaded: true});
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-sm-4">
                        <h2>Project detail</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">
                                <strong>Project detail</strong>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content animated fadeInUp">
                    <div className="row">
                        <div className="col-lg-9">
                            {/*<OkrHeader/>*/}
                            <OkrDashboard />
                        </div>
                        <div className="col-lg-3">
                            <OkrSideInfos/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default Okr;