import React, {Component} from 'react';
import axios from "axios";
import DashBoardModel from "./Models";
import {Link} from "react-router-dom";
import {Sparklines, SparklinesBars, SparklinesLine} from 'react-sparklines';
import {Card} from "react-bootstrap";

class ProjectCard extends Component {
    state = {
        loaded: false,
        deploys: [],
        board: {},
        total: 0,
        stats: {}
    };

    calculateStatistics(data) {
        let entrega = 0;
        let correcao =0;
        let operacao = 0;
        for (let each of data) {
            if (each.label === "História" || each.label === "Ajuste") {
                entrega += 1;
            }
            if (each.label === "Correção") {
                correcao += 1;
            }
            if (each.label === "Operação" || each.label === "Outros") {
                operacao += 1;
            }
        }
        return {entrega: entrega, correcao: correcao, operacao:operacao}
    }

    componentDidMount() {
        const board = this.props.board;
        this.setState({board: board});
        if (typeof board.id !== "undefined") {
            axios.get(`/portfolio/bsr/${board.id}`, {}).then((r) => {
                const result = r.data.results;
                const stats = this.calculateStatistics(result)
                this.setState({stats: stats, total: r.data.total, loaded: true});
            });
        }
    }

    render() {
        return (

            <div className="ibox">
                {/*<Card hoverable>*/}
                <div className="ibox-title">
                    {/*<span className={`label float-right label-${this.getLabel()}`}></span>*/}
                    <h5>GSI - {this.state.board.name}</h5>
                </div>
                <div className="ibox-content">
                    <div className="team-members">
                        {/*<a href="#"><img alt="member" className="rounded-circle" src="../img/a1.jpg"/></a>*/}
                        {/*<a href="#"><img alt="member" className="rounded-circle" src="../img/a2.jpg"/></a>*/}
                        {/*<a href="#"><img alt="member" className="rounded-circle" src="../img/a3.jpg"/></a>*/}
                        {/*<a href="#"><img alt="member" className="rounded-circle" src="../img/a5.jpg"/></a>*/}
                        {/*<a href="#"><img alt="member" className="rounded-circle" src="../img/a6.jpg"/></a>*/}
                    </div>
                    <Link to={`/board/${this.state.board.id}`}>
                        <h4>{this.state.board.name}</h4>
                    </Link>
                    <p style={{height: 80 + "px"}}>
                        {this.state.board.description}
                    </p>
                    <div>
                        <span>Status of current project:</span>
                        <div className="stat-percent">48%</div>
                        <div className="progress progress-mini">
                            <div style={{width: 48 + "%"}} className="progress-bar"></div>
                        </div>
                    </div>
                    <div className="row  m-t-sm">
                        <div className="col-sm-4">
                            <div className="font-bold">Entregas</div>
                            {this.state.stats.entrega}
                        </div>
                        <div className="col-sm-4">
                            <div className="font-bold">Correções</div>
                            {this.state.stats.correcao}
                        </div>
                        <div className="col-sm-4 text-right">
                            <div className="font-bold">Operações</div>
                            {this.state.stats.operacao}
                            {/*<i className="fa fa-level-up text-navy"></i>*/}
                        </div>
                    </div>
                </div>
                {/*</Card>*/}
            </div>
            // <div className="ibox">
            //     <div className="ibox-title">
            //         <div className="ibox-tools">
            //             <span className={`label float-right label-${this.getLabel()}`}>{this.getStatus()}</span>
            //         </div>
            //         <h5>{this.state.board.name}</h5>
            //     </div>
            //     <div className="ibox-content">
            //         <div>
            //             <div className="float-right text-right">
            //                 <span className="bar_dashboard"> {this.state.deploys.reduce((a, b) => a + b, 0)} E</span>
            //                 <br/>
            //                 <div className="stat-percent font-bold text-success">-% <i className="fa fa-bolt"></i>
            //                 </div>
            //             </div>
            //             <h4>
            //                 <div className="minigaph">
            //                     <Sparklines data={this.state.deploys}>
            //                         {/*<SparklinesBars style={{stroke: "white", fill: "#41c3f9", fillOpacity: ".25"}}/>*/}
            //                         {/*<SparklinesLine style={{stroke: "#41c3f9", fill: "none"}}/>*/}
            //                     </Sparklines>
            //                 </div>
            //                 <br/>
            //                 <small className="m-r">
            //                     <Link to={`/board/${this.state.board.id}`}>
            //                         {this.state.deploys.reduce((a, b) => a + b, 0)} Entregas
            //                     </Link>
            //                 </small>
            //             </h4>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default ProjectCard;