import React from "react";


class TableTools extends React.Component {

  render() {
    return (
      <div className="ibox-title">
        <h5>{this.props.title}</h5>
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
    );
  }
}

export default TableTools;
