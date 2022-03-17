<template>
  <div>
    <div>
      <input id="lat1" type="number" placeholder="Lat" v-model="latitude" />
      <input id="long1" type="number" placeholder="Long" v-model="longtitude" />
      <button @click="addMarker">Add</button>
    </div>
    <br />
    <GmapMap :center="center" :zoom="4" style="width: 100%; height: 800px">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 37.7749, lng: -122.4194 }, // lat long of San Fran
      currentPlace: null,
      markers: [],
      places: [],
      latitude: null,
      longtitude: null,
    };
  },
  mounted() {
    this.geolocate();
  },

  methods: {
    addMarker() {
      // console.log(this.latitude);
      // console.log(this.longtitude);
      if (this.latitude && this.longtitude) {
        this.markers = [];
        const marker = {
          lat: parseFloat(this.latitude),
          lng: parseFloat(this.longtitude),
        };
        this.markers.push({ position: marker });
        this.center = marker;
        this.currentPlace = null;
      }
    },

    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>