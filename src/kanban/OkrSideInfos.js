import React from 'react';

class OkrSideInfos extends React.Component {

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
                <div className="wrapper wrapper-content project-manager">
                                <h4>Project description</h4>
                                <img src="img/zender_logo.png" className="img-fluid"/>
                                <p className="small">
                                    There are many variations of passages of Lorem Ipsum available, but the majority
                                    have
                                    suffered alteration in some form, by injected humour, or randomised words which
                                    don't look
                                    even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be
                                    sure there isn't anything embarrassing
                                </p>

                                <p className="small font-bold">
                                    <span><i className="fa fa-circle text-warning"></i> High priority</span>
                                </p>
                                <h5>Project tag</h5>
                                <ul className="tag-list" style={{padding: 0}}>
                                    <li><a href=""><i className="fa fa-tag"></i> Zender</a></li>
                                    <li><a href=""><i className="fa fa-tag"></i> Lorem ipsum</a></li>
                                    <li><a href=""><i className="fa fa-tag"></i> Passages</a></li>
                                    <li><a href=""><i className="fa fa-tag"></i> Variations</a></li>
                                </ul>
                                <h5>Project files</h5>
                                <ul className="list-unstyled project-files">
                                    <li><a href=""><i className="fa fa-file"></i> Project_document.docx</a></li>
                                    <li><a href=""><i className="fa fa-file-picture-o"></i> Logo_zender_company.jpg</a>
                                    </li>
                                    <li><a href=""><i className="fa fa-stack-exchange"></i> Email_from_Alex.mln</a>
                                    </li>
                                    <li><a href=""><i className="fa fa-file"></i> Contract_20_11_2014.docx</a></li>
                                </ul>
                                <div className="text-center m-t-md">
                                    <a href="#" className="btn btn-xs btn-primary">Add files</a>
                                    <a href="#" className="btn btn-xs btn-primary">Report contact</a>

                                </div>
                            </div>
            </React.Fragment>
        );
    };
}

export default OkrSideInfos;