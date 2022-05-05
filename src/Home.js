import React from "react";

import ProjectCards from "./kanban/ProjectCards";
import DashboardHeader from "./kanban/DashboardHeader";

class Home extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <React.Fragment>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-10">
                        <h2>Teams board</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a>App views</a>
                            </li>
                            <li className="breadcrumb-item active">
                                <strong>Teams board</strong>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="wrapper wrapper-content animated fadeInRight">
                    {/*<div className="wrapper wrapper-content animated fadeIn">*/}
                    <div className="row">
                        <div className="col-lg-12">
                            <DashboardHeader board={"all"}/>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <ProjectCards/>
                    </div>
                    {/*<div className="row">*/}
                    {/*    <div className="col-lg-12">*/}
                    {/*        <BoardList/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
