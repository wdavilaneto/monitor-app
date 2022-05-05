import React from "react";
import CycleTimeBarGraph from "./CycleTimeBarGraph";
import axios from "axios";
import DashBoardModel from "./Models";

class TextboardHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            board: {},
            items: DashBoardModel
        };
    }

    floatFormated(x) {
        return Number.parseFloat(x).toFixed(2);
    }

    componentDidMount() {
        const board = this.props.board;
        this.setState({board: board});
    }

    componentDidUpdate() {
        const board = this.props.board;
        if (!this.state.loaded) {
            if (board === "all") {
                axios.put(`/api/bsr`, {}, {
                    headers: {"Content-Type": "application/json"},
                }).then((r) => {
                    const result = r.data;
                    this.setState({items: result, board: board, loaded: true});
                });
                axios.post(`/api/bsr/${board.sid}`, {}).then((r) => {
                    const result = r.data;
                    console.log(result);
                    this.setState({deploys: result});
                });
            } else {
                if (board !== undefined) {
                    axios.put(`/api/bsr/${board.sid}`, {}, {
                        headers: {"Content-Type": "application/json"},
                    }).then((r) => {
                        const result = r.data;
                        this.setState({items: result, board: board, loaded: true});
                    });
                }
            }
        }
    }

    valueOf(index) {
        const result = this.state.items[index];
        if (result !== undefined) {
            return result;
        }
        return DashBoardModel;
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-4">
                        <h1 className="m-b-xs"> {this.valueOf('História').count} </h1>
                        <small>Novas Funcionalidades</small>
                        <div id="sparkline1" className="m-b-sm">
                            ddd
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <small className="stats-label">Dias Total</small>
                                <h4>{this.valueOf('História').sum} </h4>
                            </div>
                            <div className="col-4">
                                <small className="stats-label">Média</small>
                                <h4>{this.floatFormated(this.valueOf('História').mean)} </h4>
                            </div>
                            <div className="col-4">
                                <small className="stats-label">Mediana</small>
                                <h4>{this.floatFormated(this.valueOf('História').median)} </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <h1 className="m-b-xs">
                            {this.valueOf('Ajuste').count + this.valueOf('Correção').count}
                        </h1>
                        <small>
                            Ajuste + Correção
                        </small>
                        <div id="sparkline2" className="m-b-sm"></div>
                        <div className="row">
                            <div className="col-4">
                                <small className="stats-label">Total</small>
                                <h4>{this.valueOf('Ajuste').sum + this.valueOf('Correção').sum}</h4>
                            </div>

                            <div className="col-4">
                                <small className="stats-label">Média</small>
                                <h4>{this.floatFormated((this.valueOf('Ajuste').mean + this.valueOf('Correção').mean) / 2)}</h4>
                            </div>
                            <div className="col-4">
                                <small className="stats-label">Mediana</small>
                                <h4>{this.floatFormated((this.valueOf('Ajuste').median + this.valueOf('Correção').median) / 2)}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="row m-t-xs">
                            <div className="col-6">
                                <h5 className="m-b-xs">Atendimento</h5>
                                <h1 className="no-margins">{this.valueOf('Atendimento').count}</h1>
                                <div className="font-bold text-navy">
                                    {this.valueOf('Atendimento').sum}d <i className="fa fa-bolt"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <h5 className="m-b-xs">Operações</h5>
                                <h1 className="no-margins">{this.valueOf('Operação').count}</h1>
                                <div className="font-bold text-navy">
                                    {this.valueOf('Operação').sum}d <i className="fa fa-bolt"></i>
                                </div>
                            </div>
                        </div>

                        <table className="table small m-t-sm">
                            <tbody>
                            <tr>
                                <td><strong>xxx</strong> Backlog</td>
                                <td><strong>xxx</strong> média</td>
                            </tr>
                            <tr>
                                <td><strong>xx</strong> In Progress</td>
                                <td><strong>xx</strong> média</td>
                            </tr>
                            <tr>
                                <td><strong>xx</strong> Finalizados</td>
                                <td><strong>xx</strong> média</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
            ;
    }
}


export default TextboardHeader;




