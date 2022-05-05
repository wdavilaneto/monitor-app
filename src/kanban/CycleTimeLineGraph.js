import React from 'react';
import ChartistGraph from 'react-chartist';

class ExampleBar extends React.Component {
    state = {
        data: {},
        options: {},
        needUpdate: true
    };

    componentDidUpdate() {
        if (this.state.needUpdate) {
            let delays = 80, durations = 500;
            let delays2 = 80, durations2 = 500;
            const state = {
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    series: [
                        [800000, 1200000, 1400000, 1300000],
                        [200000, 400000, 500000, 300000],
                        [100000, 200000, 400000, 600000]
                    ]
                },
                options: {}

            };
            this.setState(state)
            this.state.needUpdate = false;
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <ChartistGraph
                className="ct-perfect-fourth"
                data={this.state.data}
                type="Bar"
                options={this.state.options}
            />
        )
    }
}

export default ExampleBar;