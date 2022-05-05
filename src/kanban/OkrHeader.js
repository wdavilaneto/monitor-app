import React from 'react';

class OkrHeader extends React.Component {

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
                <div className="ibox">
                    <div className="ibox-content">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="m-b-md">
                                    <a href="#" className="btn btn-white btn-xs float-right">Edit project</a>
                                    <h2>Contract with Zender Company</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <dl className="row mb-0">
                                    <div className="col-sm-4 text-sm-right">
                                        <dt>Status:</dt>
                                    </div>
                                    <div className="col-sm-8 text-sm-left">
                                        <dd className="mb-1"><span className="label label-primary">Active</span></dd>
                                    </div>
                                </dl>
                                <dl className="row mb-0">
                                    <div className="col-sm-4 text-sm-right">
                                        <dt>Created by:</dt>
                                    </div>
                                    <div className="col-sm-8 text-sm-left">
                                        <dd className="mb-1">Alex Smith</dd>
                                    </div>
                                </dl>
                                <dl className="row mb-0">
                                    <div className="col-sm-4 text-sm-right">
                                        <dt>Messages:</dt>
                                    </div>
                                    <div className="col-sm-8 text-sm-left">
                                        <dd className="mb-1"> 162</dd>
                                    </div>
                                </dl>
                                <dl className="row mb-0">
                                    <div className="col-sm-4 text-sm-right">
                                        <dt>Client:</dt>
                                    </div>
                                    <div className="col-sm-8 text-sm-left">
                                        <dd className="mb-1"><a href="#" className="text-navy"> Zender
                                            Company</a></dd>
                                    </div>
                                </dl>
                                <dl className="row mb-0">
                                    <div className="col-sm-4 text-sm-right">
                                        <dt>Version:</dt>
                                    </div>
                                    <div className="col-sm-8 text-sm-left">
                                        <dd className="mb-1"> v1.4.2</dd>
                                    </div>
                                </dl>

                            </div>
                            <div className="col-lg-6" id="cluster_info">

                                <dl className="row mb-0">
                                    <div className="col-sm-4 text-sm-right">
                                        <dt>Last Updated:</dt>
                                    </div>
                                    <div className="col-sm-8 text-sm-left">
                                        <dd className="mb-1">16.08.2014 12:15:57</dd>
                                    </div>
                                </dl>
                                <dl className="row mb-0">
                                    <div className="col-sm-4 text-sm-right">
                                        <dt>Created:</dt>
                                    </div>
                                    <div className="col-sm-8 text-sm-left">
                                        <dd className="mb-1"> 10.07.2014 23:36:57</dd>
                                    </div>
                                </dl>
                                <dl className="row mb-0">
                                    <div className="col-sm-4 text-sm-right">
                                        <dt>Participants:</dt>
                                    </div>
                                    <div className="col-sm-8 text-sm-left">
                                        <dd className="project-people mb-1">
                                            <a href=""><img alt="image" className="rounded-circle" src={"./img/a3.jpg"}/></a>
                                            <a href=""><img alt="image" className="rounded-circle" src={"./img/a1.jpg"}/></a>
                                            <a href=""><img alt="image" className="rounded-circle" src={"./img/a2.jpg"}/></a>
                                            <a href=""><img alt="image" className="rounded-circle" src={"./img/a4.jpg"}/></a>
                                            <a href=""><img alt="image" className="rounded-circle" src={"./img/a5.jpg"}/></a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <dl className="row mb-0">
                                    <div className="col-sm-2 text-sm-right">
                                        <dt>Completed:</dt>
                                    </div>
                                    <div className="col-sm-10 text-sm-left">
                                        <dd>
                                            <div className="progress m-b-1">
                                                <div style={{width: 60 + "%"}}
                                                     className="progress-bar progress-bar-striped progress-bar-animated"></div>
                                            </div>
                                            <small>Project completed in <strong>60%</strong>. Remaining
                                                close the
                                                project, sign a contract and invoice.</small>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default OkrHeader;