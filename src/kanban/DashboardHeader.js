import React from "react";
import CycleTimeBarGraph from "./CycleTimeBarGraph";
import axios from "axios";
import DashBoardModel from "./Models";

class DashboardHeader extends React.Component {
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
                // axios.get(`/portfolio/bsr/`, {}, {
                //     headers: {"Content-Type": "application/json"},
                // }).then((r) => {
                //     const result = r.data;
                //     this.setState({items: result, board: board, loaded: true});
                // });
                // axios.get(`/portfolio/bsr/${board.id}`, {}).then((r) => {
                //     const result = r.data;
                //     console.log(result);
                //     this.setState({deploys: result});
                // });
            }
            // else {
            //     if (board !== undefined) {
            //         axios.put(`/portfolio/bsr/${board.id}`, {}, {
            //             headers: {"Content-Type": "application/json"},
            //         }).then((r) => {
            //             const result = r.data;
            //             this.setState({items: result, board: board, loaded: true});
            //         });
            //     }
            // }
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
                    <div className="col-lg-12">
                        <CycleTimeBarGraph board={this.state.board}/>
                    </div>
                </div>
            </React.Fragment>
        )
            ;
    }
}


export default DashboardHeader;


  

