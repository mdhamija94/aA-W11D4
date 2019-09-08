import React from 'react';
import MarkerManager from '../util/marker_manager';

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    let currentBenches = Object.keys(this.props.benches);
    let prevBenches = Object.keys(prevProps.benches);

    if (!currentBenches.every(bench => prevBenches.includes(bench))) { 
      this.props.fetchBenches(this.props.benches);
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }
  
  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
      </div>
    )
  }
}

export default BenchMap;