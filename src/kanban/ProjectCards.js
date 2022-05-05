import React, {Component} from 'react';
import ProjectCard from "./ProjectCard";
import axios from "axios";

class ProjectCards extends Component {
    state = {
        iboards: [],
    };

    componentDidMount() {
        axios.get("/api/board?hide!=True").then((res) => {
            const iboards = res.data.results;
            this.setState({iboards});
        });
    }

    render() {
        return (
            <div className="row">
                {this.state.iboards.map((iboard) => (
                    <div className="col-lg-4" key={iboard.id}>
                        <ProjectCard board={iboard}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProjectCards;