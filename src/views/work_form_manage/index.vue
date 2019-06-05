<template>
  <div class="container">
    <AddrCascader
      :address.sync="address"

      :disabled="isShowOrEdit"
    ></AddrCascader>
          <!-- :province="province"
      :city="city"
      :area="province" -->
  </div>
</template>
<script>
import AddrCascader from "@/components/AddrCascader";
import { getAddress, getLowerAddress } from "@/api/work_form_manage";
export default {
  data() {
    return {
      address: {},
      // province: [],
      // city: [],
      // area: [],
      isShowOrEdit: false
    };
  },
  methods: {
    // getAddress() {
    //   getAddress(1).then(res => {
    //     if (res.data.code === 0) {
    //       this.province = res.data.data;
    //     } else {
    //       this.$message.error(res.data.message);
    //     }
    //   });
    // },
    // selectProvince(value){
    //   console.log('value', value)
    //   getLowerAddress(value).then(res=>{
    //     if (res.data.code === 0) {
    //       this.city = res.data.data;
    //     } else {
    //       this.$message.error(res.data.message);
    //     }
    //   })
    // },
    // selectCity(value){
    //    getLowerAddress(value).then(res=>{
    //     if (res.data.code === 0) {
    //       this.area = res.data.data;
    //     } else {
    //       this.$message.error(res.data.message);
    //     }
    //   })
    // }
  },
  mounted() {
    // this.getAddress();
  },
  components: {
    AddrCascader
  }
};
</script>

