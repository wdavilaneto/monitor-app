import React from "react";
import axios from "axios";
import BoardDataTable from "./BoardDatatable";
import CycleTimeBarGraph from "./CycleTimeBarGraph";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: undefined,
            done: false
        }
    }

    componentDidMount() {
        const {boardId} = this.props.match.params;
        if (boardId) {
            axios.get(`/api/board/${boardId}`).then((res) => {
                const board = res.data;
                this.setState({board, done: true});
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-10">
                        <br/>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">
                                <strong>{this.state.done ? this.state.board.name : "[loading...]"}</strong>
                            </li>
                        </ol>
                    </div>
                    <div className="col-lg-2">
                    </div>
                </div>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    <CycleTimeBarGraph board={this.state.board}/>
                                </div>
                            </div>
                            <BoardDataTable board={this.state.board}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Board;
