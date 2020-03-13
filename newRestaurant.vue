<template>
  <div class="container">
    <div class="row">
      <div class="card col s6 offset-s3">
        <form class="card-content" @submit.prevent="geocode">
          <h5 class="center">餐廳資訊</h5>
          <div class="row">
            <div class="input-field col s12">
              <label for="name">餐廳名稱</label>
              <input type="text" id="name" v-model="restaurant.name" />
            </div>
            <div class="input-field col s12">
              <label for="address">餐廳地址</label>
              <input type="text" id="address" v-model="restaurant.address" />
            </div>
            <!--顯示錯誤訊息-->
            <p v-if="errormsg" class="center red-text">{{errormsg}}</p>
            <div class="input-field col s12 center">
              <button type="submit" class="btn waves-light waves-effect">submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurant: {
        address: "",
        name: ""
      },
      errormsg: null,
    };
  }
  methods: {
    geocode() {
      // 處理表單送出後步驟
    }
  }
};
</script>