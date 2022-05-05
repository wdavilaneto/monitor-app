import React from 'react';
import axios from "axios";
import {Bar} from "react-chartjs-2";


function getColor(index) {
    const COLORS = [
        'rgb(135,206,250, 0.6)',
        'rgb(0,0,128,0.5)',
        'rgba(120, 120, 120, 0.5)',
        'rgba(220,220,220,0.6)',
        'rgba(26,179,148,0.6)',
        'rgba(56,109,128,0.5)',
        'rgba(98,219,68,0.5)',
    ]
    return COLORS[index];
}

function getLabels(data) {
    let result = [];
    let lastLabel = ""
    for (let each of data) {
        if (lastLabel !== each.friday) {
            result.push(each.friday)
            lastLabel = each.friday;
        }
    }
    return result;
}

function transposeData(data) {

    let content = data.results
    let legends = data.labels;
    let labels = getLabels(content)
    let series = [];

    for (let i = 0; i < legends.length; i++) {
        let ct = [];
        for (let i = 0; i < labels.length; i++) {
            ct.push(0);
        }
        series.push(ct);
    }
    for (let i = 0; i < content.length; i++) {
        let a = legends.indexOf(content[i].label);
        let b = labels.indexOf(content[i].friday);
        series[a][b] = content[i].count;
    }
    let datasets = [];
    for (let i = 0; i < legends.length; i++) {
        datasets.push({
            label: legends[i],
            backgroundColor: getColor(i),
            data: series[i]
        })
    }

    let result = {
        labels: labels,
        datasets: datasets
    }
    return result;
}

class CycleTimeBarGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            board: {},
            data: {},
            options: {}
        };
    }

    componentDidMount() {
        const board = this.props.board;
        this.setState({board: board});
    }

    componentDidUpdate() {
        if (!this.state.loaded) {
            const board = this.props.board;
            if (board === "all") {
                axios.get(`/portfolio/bsr/`, {
                    headers: {"Content-Type": "application/json"},
                }).then((r) => {
                    const data = transposeData(r.data);
                    this.setState({data: data, board: board, loaded: true});
                });
            } else {
                if (board !== undefined) {
                    axios.get(`/portfolio/bsr/${board.id}`, {
                        headers: {"Content-Type": "application/json"},
                    }).then((r) => {
                        const data = transposeData(r.data);
                        this.setState({data: data, board: board, loaded: true});
                    });
                }
            }
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="small float-left col-md-3 m-l-lg m-t-md">
                    <strong>Fluxo de Trabalho</strong> Entragas no Perído.
                </div>
                {/*<div className="small float-right col-md-3 m-t-md text-right">*/}
                {/*    <strong>Entr</strong> - por Unidade.*/}
                {/*</div>*/}
                <div className="flot-chart m-b-xl">
                    <div className="flot-chart-content" id="flot-dashboard5-chart">
                        <Bar
                            data={this.state.data}
                            width={100}
                            height={50}
                            options={{maintainAspectRatio: false}}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default CycleTimeBarGraph;