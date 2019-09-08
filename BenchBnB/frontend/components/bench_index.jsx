import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    return (
      <div className="bench-index-container">
        <ul>
          {
            this.props.benches.map(bench => {
              return (
                <span className="bench-index-item">
                  <BenchIndexItem bench={bench} key={bench.id} />
                </span>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default BenchIndex;