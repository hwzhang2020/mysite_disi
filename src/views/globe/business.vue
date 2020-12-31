<template>
  <div class="root">
    <p>全球运营中心</p>
    <div id="map"></div>

  </div>
</template>

<script>
  import satelliteMarker from "../../assets/satellite.png"
  import groundstationMarker from "../../assets/groundstation.png"
 
  export default {
    name: 'Business',
    data() {
      return {
        map : null,
        satelliteIcon: null,
        groundstationIcon: null
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.map = L.map("map", {
          center: L.latLng(40.07, 116.25),
          zoom: 2,
          maxZoom:18
        })
        // 加载地图服务(高德)
        L.tileLayer(
          "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}"
        ).addTo(this.map)

        this.satelliteIcon = L.icon({
	      iconUrl: satelliteMarker,
	      iconSize: [42, 32],
	      iconAnchor: [13, 21]
        })
        this.groundstationIcon = L.icon({
          iconUrl: groundstationMarker,
          iconSize: [32, 32],
          iconAnchor: [13, 21]
        })

        let marker = L.marker([40.07, 116.25], {
          icon: this.satelliteIcon,
          // draggable:true,
          riseOnHover: true
        }).addTo(this.map).bindPopup("我是单个marker")

        let latlng = [{
          lat:-33.0,lng:-71.0}, {
          lat:-40.0,lng:170.0}, {
          lat:30.0,lng:-75.0}]
        let group = L.layerGroup().addTo(this.map)
        for (let i = 0; i < latlng.length; i++) {
          let lat = latlng[i].lat
          let lng = latlng[i].lng
          let marker = L.marker([lat, lng], {
            icon:this.satelliteIcon,
            // draggable:true,
            // riseOnHover:true
          }).addTo(group).bindPopup('我是第'+i+"个marker")
        }

        let latlng2 = [{
          lat:25.19,lng:101.28}, {
          lat:43.77,lng:87.68}, {
          lat:34.27,lng:108.95}]
        let layers = []
        for (let i = 0; i < latlng2.length; i++) {
          let layer = new L.marker([latlng2[i].lat,latlng2[i].lng],{
            icon:this.groundstationIcon
          })
          layers.push(layer)
        }
        let myGroup = L.layerGroup(layers)
        this.map.addLayer(myGroup);



      }
    }
  }
</script>

<style scoped>
#map {
  width: 100%;
  height: 100vh;
}
</style>