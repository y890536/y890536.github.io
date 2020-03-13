<template>
  <div class="container mt-4">
    <h2 class="text-center text-secondary pb-2">台北市營運餐廳</h2>
    <div class="map-container border rounded">
      <ul class="nav justify-content-center border-bottom">
        <!--呈現各地區的導覽列-->
      </ul>
      <!--使用 GMap 並帶入相關設定資訊-->
      <GMap
        v-if="!isLoading"
        :center="{lat, lng}"
        :restaurants="restaurants"
        :streetViewControl="false"
        :mapTypeControl="false"
        :fullscreenControl="true"
        :zoomControl="true"
      ></GMap>
    </div>
  </div>
</template>

<script>
// 載入 GMap Component
import GMap from "../components/GMap";
export default {
  components: {
    GMap
  },
  data() {
    return {
      lat: 25.0325917,
      lng: 121.5624999,
      restaurants: []
    };
  },
  // 其他程式碼
};
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 400px;
}
/*其他樣式設定*/
</style>