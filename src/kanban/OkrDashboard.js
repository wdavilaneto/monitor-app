import React from 'react';
import axios from "axios";

class OkrDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            result: [],
            total: 0,
            options: {}
        };
    }

    componentDidMount() {
        // const board = this.props.board;
        // this.setState({board: board});
        axios.get(`/api/board?show_okr=true`, {}).then((r) => {
            console.log(r);
            this.setState({result: r.data.results, loaded: true});

        });
    }

    componentDidUpdate() {
        if (!this.state.loaded) {
            console.log("updated")
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="ibox">
                    <div className="ibox-title">
                        <h5>All projects assigned to this account</h5>
                    </div>
                    <div className="ibox-content">

                        <div className="project-list">
                            <table className="table table-hover">
                                <tbody>
                                {this.state.result.map((board) => (
                                    <tr key={board.id}>
                                        <td className="project-status">
                                            <span className="label label-primary">Active</span>
                                        </td>
                                        <td className="project-title" style={{width: 70 + "%"}}>
                                            <a href="#">{board.name}</a>
                                            <br/> <small>{board.description}</small>
                                        </td>
                                        <td className="project-completion" style={{width: 130 + "px"}}>
                                            <small>Completion with: 48%</small>
                                            <div className="progress progress-mini">
                                                <div style={{width: 48 + "%"}} className="progress-bar"></div>
                                            </div>
                                        </td>
                                        <td className="project-people">
                                            {/*<a href=""><img alt="image" className="rounded-circle" src="img/a3.jpg"/></a>*/}
                                            {/*<a href=""><img alt="image" className="rounded-circle" src="img/a1.jpg"/></a>*/}
                                            {/*<a href=""><img alt="image" className="rounded-circle" src="img/a2.jpg"/></a>*/}
                                            {/*<a href=""><img alt="image" className="rounded-circle" src="img/a4.jpg"/></a>*/}
                                            {/*<a href=""><img alt="image" className="rounded-circle" src="img/a5.jpg"/></a>*/}
                                        </td>

                                    </tr>
                                ))}
                                <tr>
                                    <td className="project-status">
                                        <span className="label label-default">Unactive</span>
                                    </td>
                                    <td className="project-title">
                                        <a href="project_detail.html">Many desktop publishing packages and web</a>
                                        <br/>
                                        <small>Created 10.08.2014</small>
                                    </td>
                                    <td className="project-completion">
                                        <small>Completion with: 8%</small>
                                        <div className="progress progress-mini">
                                            <div style={{width: 8 + "%"}} className="progress-bar"></div>
                                        </div>
                                    </td>
                                    <td className="project-people">
                                        <a href=""><img alt="image" className="rounded-circle" src="img/a5.jpg"/></a>
                                        <a href=""><img alt="image" className="rounded-circle" src="img/a3.jpg"/></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default OkrDashboard;