import React from "react";

import TableTools from "../commons/TableTools";
import axios from "axios";

// import "../font-awesome/css/font-awesome.css"
import "../css/plugins/iCheck/custom.css";
import { Link } from "react-router-dom";
// import "../css/animate.css"
// import "../css/style.css"

class TrelloBoardsTable extends React.Component {
  state = {
    boards: [],
    iboards: [],
  };

  componentDidMount() {
    axios.get("/api/trello").then((res) => {
      const boards = res.data.results;
      this.setState({ boards });
    });
    axios.get("/api/board").then((res) => {
      const iboards = res.data.results;
      this.setState({ iboards });
    });
  }

  saveBoard(board, event) {
    event.preventDefault();
    if (!board.checked) {
      axios
        .post("/api/board/" + board.id, board, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          board.checked = true;
          axios.get("/api/board").then((res) => {
            const iboards = res.data.results;
            this.setState({ iboards });
            console.log(iboards);
          });
        });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="ibox">
            <TableTools title="GSI"></TableTools>
            <div className="ibox-content">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Board ID</th>
                    <th>Board Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.iboards.map((iboard) => (
                    <tr key={iboard.id}>
                      <td>{iboard.id}</td>
                      <td>
                        <Link to={`/trello/${iboard.id}`}>{iboard.name}</Link>
                      </td>
                      <td>delete</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ibox">
            <TableTools title="Trellos Disponíveis"></TableTools>
            <div className="ibox-content">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Board ID</th>
                    <th>Board Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.boards.map((board) => (
                    <tr key={board.id}>
                      <td>
                        <input
                          name={board.id}
                          checked={board.checked}
                          type="checkbox"
                          className="icheckbox_square-green"
                          onChange={(event) => this.saveBoard(board, event)}
                          key={board.id}
                          value={board.checked}
                        />
                      </td>
                      <td>{board.id}</td>
                      <td>{board.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrelloBoardsTable;
