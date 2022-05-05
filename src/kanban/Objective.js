import React from 'react';

class Objective extends React.Component {

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
                <div className="ibox ">
                    <div className="ibox-title">
                        <h5>Pie Charts <small>With custom colors.</small></h5>
                        <div className="ibox-tools">
                            <a className="close-link">
                                <i className="fa fa-times"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <table className="table table-bordered white-bg">
                            <thead>
                            <tr>
                                <th>Graph</th>
                                <th>Code</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>
                                    <span className="pie" style={{display: "none"}}>1/5</span>
                                    <span className="pie">1/5</span>
                                </td>
                                <td>
                                    <code>&lt;span class="pie"&gt;1/5&lt;/span&gt;</code>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="pie" style={{display: "none"}}>226/360</span>
                                    <svg className="peity" height="16" width="16">
                                        <path
                                            d="M 8 8 L 8 0 A 8 8 0 1 1 2.2452815972907922 13.55726696367198 Z"
                                            fill="#1ab394"></path>
                                        <path
                                            d="M 8 8 L 2.2452815972907922 13.55726696367198 A 8 8 0 0 1 7.999999999999998 0 Z"
                                            fill="#d7d7d7"></path>
                                    </svg>
                                </td>
                                <td>
                                    <code>&lt;span class="pie"&gt;226/360&lt;/span&gt;</code>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="pie" style={{display: "none"}}>0.52/1.561</span>
                                    <svg className="peity" height="16" width="16">
                                        <path
                                            d="M 8 8 L 8 0 A 8 8 0 0 1 14.933563796318165 11.990700825968545 Z"
                                            fill="#1ab394"></path>
                                        <path
                                            d="M 8 8 L 14.933563796318165 11.990700825968545 A 8 8 0 1 1 7.999999999999998 0 Z"
                                            fill="#d7d7d7"></path>
                                    </svg>
                                </td>
                                <td>
                                    <code>&lt;span class="pie"&gt;0.52/1.561&lt;/span&gt;</code>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="pie" style={{display: "none"}}>1,4</span>
                                    <svg className="peity" height="16" width="16">
                                        <path
                                            d="M 8 8 L 8 0 A 8 8 0 0 1 15.60845213036123 5.52786404500042 Z"
                                            fill="#1ab394"></path>
                                        <path
                                            d="M 8 8 L 15.60845213036123 5.52786404500042 A 8 8 0 1 1 7.999999999999998 0 Z"
                                            fill="#d7d7d7"></path>
                                    </svg>
                                </td>
                                <td>
                                    <code>&lt;span class="pie"&gt;1,4&lt;/span&gt;</code>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="pie" style={{display: "none"}}>226,134</span>
                                    <svg className="peity" height="16" width="16">
                                        <path
                                            d="M 8 8 L 8 0 A 8 8 0 1 1 2.2452815972907922 13.55726696367198 Z"
                                            fill="#1ab394"></path>
                                        <path
                                            d="M 8 8 L 2.2452815972907922 13.55726696367198 A 8 8 0 0 1 7.999999999999998 0 Z"
                                            fill="#d7d7d7"></path>
                                    </svg>
                                </td>
                                <td>
                                    <code>&lt;span class="pie"&gt;226,134&lt;/span&gt;</code>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="pie" style={{display: "none"}}>0.52,1.041</span>
                                    <svg className="peity" height="16" width="16">
                                        <path
                                            d="M 8 8 L 8 0 A 8 8 0 0 1 14.933563796318165 11.990700825968545 Z"
                                            fill="#1ab394"></path>
                                        <path
                                            d="M 8 8 L 14.933563796318165 11.990700825968545 A 8 8 0 1 1 7.999999999999998 0 Z"
                                            fill="#d7d7d7"></path>
                                    </svg>
                                </td>
                                <td>
                                    <code>&lt;span class="pie"&gt;0.52,1.041&lt;/span&gt;</code>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default Objective;