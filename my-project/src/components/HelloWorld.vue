<template>
  <div class="main">
    <div class="flex">
      <!-- Map Display here -->
      <div class="map-holder">
        <div id="map"></div>
      </div>
      <!-- Coordinates Display here -->
      <div class="dislpay-arena">
        <div class="coordinates-header">
          <h3>Current Coordinates</h3>
          <p>Latitude:</p>
          <p>Longitude:</p>
        </div>
        <div class="coordinates-header">
          <h3>Current Location</h3>
          <div class="form-group">
            <input
              type="text"
              class="location-control"
              :value="location"
              readonly
            />
            <button type="button" class="copy-btn">Copy</button>
          </div>
          <button type="button" class="location-btn">Get Location</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import mapboxgl from 'mapbox-gl'
 import 'mapbox-gl/dist/mapbox-gl.css'
 import MapboxDraw from '@mapbox/mapbox-gl-draw'
 import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
 import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      loading: false,
      location: "",
      access_token: 'pk.eyJ1IjoiY2F0aGVyaW5laGlnZ2lucyIsImEiOiJja3dxanVidmowbmEwMnBucWVmdXhrbGM1In0.nqBHck1p4sgntYj-ZcuS3w',
      center: [0, 0],
      map: {},
    }
  },
  mounted() {
    console.log('HERE');
    this.createMap()
  },
  methods: {
    async createMap() {
      console.log('CreateMap');
      try {
        console.log('DO IT ENTER');
        // console.log('TOKEN1', access_token);
        mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0aGVyaW5laGlnZ2lucyIsImEiOiJja3dxaXE2ZjIwbXl4Mm5vMnU0eTZmNXZlIn0.LSNfa5e1BIGxOa32C5uwHg';
        this.map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/catherinehiggins/ckwqmv8y817sz14nk42wad28j",
          // center: this.center,
          // zoom: 11,
        });
        var Draw = new MapboxDraw();
        // Map#addControl takes an optional second argument to set the position of the control.
        // If no position is specified the control defaults to `top-right`. See the docs
        // for more details: https://docs.mapbox.com/mapbox-gl-js/api/#map#addcontrol
        this.map.addControl(Draw, 'top-left');
        this.map.on('load', function() {
          console.log('Hello');
        });

      } catch (err) {
        console.log("map error", err)
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding: 45px 50px;
}
.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.map-holder {
  width: 65%;
}
#map {
  height: 70vh;
}
.dislpay-arena {
  background: #ffffff;
  box-shadow: 0px -3px 10px rgba(0, 58, 78, 0.1);
  border-radius: 5px;
  padding: 20px 30px;
  width: 25%;
}
.coordinates-header {
  margin-bottom: 50px;
}
.coordinates-header h3 {
  color: #1f2a53;
  font-weight: 600;
}
.coordinates-header p {
  color: rgba(13, 16, 27, 0.75);
  font-weight: 600;
  font-size: 0.875rem;
}
.form-group {
  position: relative;
}
.location-control {
  height: 30px;
  background: #ffffff;
  border: 1px solid rgba(31, 42, 83, 0.25);
  box-shadow: 0px 0px 10px rgba(73, 165, 198, 0.1);
  border-radius: 4px;
  padding: 0px 10px;
  width: 90%;
}
.location-control:focus {
  outline: none;
}
.location-btn {
  margin-top: 15px;
  padding: 10px 15px;
  background: #d80739;
  box-shadow: 0px 4px 10px rgba(73, 165, 198, 0.1);
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
}
.location-btn:focus {
  outline: none;
}
.disabled {
  background: #db7990;
  cursor: not-allowed;
}
.copy-btn {
  background: #f4f6f8 0% 0% no-repeat padding-box;
  border: 1px solid #f4f6f8;
  border-radius: 0px 3px 3px 0px;
  position: absolute;
  color: #5171ef;
  font-size: 0.875rem;
  font-weight: 500;
  height: 30px;
  padding: 0px 10px;
  cursor: pointer;
  right: 3.5%;
  top: 5%;
}
.copy-btn:focus {
  outline: none;
}
</style>
