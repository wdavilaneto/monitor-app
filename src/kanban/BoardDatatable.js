import React from "react";
import axios from "axios";
import DownloadLink from "react-download-link";


class BoardDataTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            board: {},
            items: [],
            loading: false
        };
    }

    componentDidUpdate() {
        const board = this.props.board;
        if (board.id && board.id !== this.state.board.id) {
            axios.get(`/api/task?board_id=${board.id}`).then((r) => {
                const items = r.data.results;
                this.setState({items: items, board: board});
            });
        }
    }

    toggle() {
        this.setState({
            loading: !this.state.loading,
            progress: 0.5,
        });
    }

    getDataFromURL = (url, id) => new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url + id, {headers: {'Cache-Control': 'no-cache'}})
                .then(response => response.blob())
                .then(data => {
                    resolve(data)
                });
        });
    }, 2000);

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeIn">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox ">
                            {/*<a href={`/api/download_task/${this.state.board.name}.xlsx`}>excel</a>*/}
                            <DownloadLink
                                label="Download"
                                filename={`${this.state.board.id}.xlsx`}
                                exportFile={() => Promise.resolve(this.getDataFromURL('/api/download_task/', this.state.board.id))}
                            />
                            <div className="ibox-content">
                                <table className="table table-stripped toggle-arrow-tiny">
                                    <thead>
                                    <tr>
                                        <th style={{width: 25 + "px"}}>id</th>
                                        <th style={{width: 90 + "px"}}>week ID</th>
                                        <th style={{width: 90 + "px"}}>start</th>
                                        <th style={{width: 90 + "px"}}>end</th>
                                        <th style={{width: 90 + "px"}}>CT</th>
                                        <th>Tarefa</th>
                                        <th style={{width: 55 + "px"}}>labels</th>
                                        <th style={{width: 20 + "px"}}>A</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.items.map((item, key) => (
                                        <tr key={key}>
                                            <td>{item.trello_id}</td>
                                            <td><b>{item.friday}</b></td>
                                            <td>{item.start.substr(0, 10)}</td>
                                            <td>{item.end.substr(0, 10)}</td>
                                            <td>{item.cycle_time} dia(s)</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <span className={"label " +
                                                (item.label === 'História' || item.label === 'Ajuste' ? 'label-primary'
                                                    : (item.label === 'Correção' ? 'label-alert' : 'label-warning'))}>{item.label}</span>
                                            </td>
                                            <td>
                                                <div>ok</div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardDataTable;
