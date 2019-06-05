<template>
  <div>
    <div style="display:flex;justify-content: space-between;">
      <el-select
        v-model="addressData.province"
        placeholder="请选择"
        @change="changeProvince()"
      >
        <el-option
          v-for="item in provinceData"
          :key="item.id"
          :label="item.regionName"
          :value="item.regionCode"
          :disabled="disabled"
        ></el-option>
      </el-select>
      <el-select
        v-model="addressData.city"
        placeholder="请选择"
         @change="changeCity()"
      >
        <el-option
          v-for="item in cityData"
          :key="item.id"
          :label="item.regionName"
          :value="item.regionCode"
          :disabled="disabled"
        ></el-option>
      </el-select>
      <el-select
        v-model="addressData.area"
        placeholder="请选择"
         @change="changeArea()"
      >
        <el-option
          v-for="item in areaData"
          :key="item.id"
          :label="item.regionName"
          :value="item.regionCode"
          :disabled="disabled"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
import { getAddress, getLowerAddress } from "@/api/work_form_manage";
export default {
  name: "AddrCascader",
  data() {
    return {
      addressData:{
        province: '',
        city: '',
        area: ''
      },
      provinceData: [], // 省份
      cityData: [], // 市
      areaData: [], // 区
    };
  },
  props: {
    address: {
      type: Object,
      default () {
        return {}
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
    
  },
  methods:{
    // 选择省事件
    changeProvince(){
      this.addressData.city = ''
      this.addressData.area = ''
      this.getCity()
    },
    // 选择市事件
    changeCity(){
      this.addressData.area = ''
      this.getArea()
    },
    changeArea(){
      this.$emit('update:address', this.addressData)
    },
    // 获取省份
    async getProvince() {
      try {
        let { data } = await getAddress(1)
        if (data.code === 0) {
          this.provinceData = data.data
        } else {
          this.$message.error(data.message)
        }
      } catch (error) {
        this.$message.error('请求发生错误')
      }
    },
    // 获取市
    async getCity(){
      try {
        if (this.addressData.province) {
          let { data } = await getLowerAddress(this.addressData.province)
          if (data.code === 0) {
            this.cityData = data.data
          } else {
            this.$message.error(data.message)
          }
        }
      } catch (error) {
        this.$message.error('请求发生错误')
      }
    },
    // 获取区
    async getArea(){
      try {
        if (this.addressData.city) {
          let { data } = await getLowerAddress(this.addressData.city)
          if (data.code === 0) {
            this.areaData = data.data
          } else {
            this.$message.error(data.message)
          }
        }
      } catch (error) {
        this.$message.error('请求发生错误')
      }
    }
  },
  created () {
    this.getProvince()
  },
};
</script>

