import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class TrelloBoard extends React.Component {
    state = {
        done: false,
        board: {
            id: null,
            name: null
        },
        items: [],
    };

    componentDidMount() {
        // const { match: {boardId} } = this.props
        const {boardId} = this.props.match.params;
        axios.get(`/api/board/${boardId}`).then((res) => {
            const board = res.data;
            axios.get(`/api/trello/${board.sid}`).then((r) => {
                const values = r.data;
                this.setState({board: board, items: values, done: true});
            });
        });
    };

    saveOne(item, event) {
        if (!item.checked) {
            delete item.checked;
            axios
                .post("/api/task/" + item.id, item, {
                    headers: {"Content-Type": "application/json"},
                })
                .then((res) => {
                    item.checked = true;
                    this.setState({});
                });
        }
    };

    saveAll() {
        this.state.items.map((item, key) => {
            if (!item.checked) {
                delete item.checked;
                axios
                    .post("/api/task/" + item.id, item, {
                        headers: {"Content-Type": "application/json"},
                    })
                    .then((res) => {
                        item.checked = true;
                    })
            }
            return true;
        });
        this.setState({});
    };

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
                            <li className="breadcrumb-item">
                                <Link to={`/board/${this.state.board.id}`}>
                                    {this.state.done ? this.state.board.name : "loading.."}
                                </Link>
                            </li>
                            <li className="breadcrumb-item active">
                                <strong>Trello</strong>
                            </li>
                        </ol>
                    </div>
                    <div className="col-lg-2">

                    </div>
                </div>
                <div className="wrapper wrapper-content animated fadeIn">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    <button className="btn btn-outline-primary" onClick={() => this.saveAll()}>Import
                                        All
                                    </button>
                                    <div className="ibox-tools">
                                        <a href="/" className="collapse-link">
                                            <i className="fa fa-chevron-up"></i>
                                        </a>
                                        <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-wrench"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-user">
                                            <li>
                                                <a href="/" className="dropdown-item">
                                                    Config option 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" className="dropdown-item">
                                                    Config option 2
                                                </a>
                                            </li>
                                        </ul>
                                        <a href="/" className="close-link">
                                            <i className="fa fa-times"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="ibox-content">
                                    {!this.state.done ? (
                                        <div className="spiner-example">
                                            <div className="sk-spinner sk-spinner-rotating-plane"></div>
                                        </div>
                                    ) : (
                                        <table className="table table-stripped toggle-arrow-tiny">
                                            <thead>
                                            <tr>
                                                <th>Tarefa</th>
                                                <th style={{width: 15 + "%"}}>labels</th>
                                                <th>CT</th>
                                                <th style={{width: 55 + "px"}}>start</th>
                                                <th style={{width: 55 + "px"}}>end</th>
                                                <th style={{width: 55 + "px"}}>week ID</th>
                                                <th style={{width: 15 + "px"}}>id</th>
                                                <th style={{width: 95 + "px"}}>action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.state.items.map((data, key) => (
                                                <tr key={key}>
                                                    <td>{data.name}</td>
                                                    <td>{data.label}</td>
                                                    <td>{data.cycle_time}</td>
                                                    <td>{data.start.substr(0, 10)}</td>
                                                    <td>{data.end.substr(0, 10)}</td>
                                                    <td>{data.friday}</td>
                                                    <td>{data.trello_id}</td>
                                                    <td>
                                                        <div>
                                                            <input
                                                                checked={data.checked}
                                                                type="checkbox"
                                                                className="icheckbox_square-green"
                                                                onChange={(event) => this.saveOne(data, event)}
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default TrelloBoard;
