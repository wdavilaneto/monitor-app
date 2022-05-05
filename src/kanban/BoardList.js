import React from "react";
import axios from "axios";
import TableTools from "../commons/TableTools";
import "../css/plugins/iCheck/custom.css";
import { Link } from "react-router-dom";

class BoardList extends React.Component {
  state = {
    iboards: [],
  };

  componentDidMount() {
    axios.get("/api/board").then((res) => {
      const iboards = res.data;
      this.setState({ iboards });
    });
  }

  render() {
    return (
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
                    {/*<Link to={`/board/${iboard.id}`}>{iboard.name}</Link>*/}
                    <Link to={`/trello/${iboard.id}`}>{iboard.name}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default BoardList;
