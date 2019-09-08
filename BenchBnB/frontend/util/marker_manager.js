export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromBench(bench) {
    const pos = new google.maps.LatLng(bench.lat, bench.long);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      benchId: bench.id
    });
    this.markers[marker.benchId] = marker
  } 

  updateMarkers(benches) {
    if (benches) {
      benches.forEach(bench => {
        if (!Object.keys(this.markers).includes(bench.id)) {
          this.createMarkerFromBench(bench);
        }
      });
    }
  }
}