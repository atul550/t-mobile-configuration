<template>
  <div class="sidebar">
   <a-layout-content style="padding: 0 50px">
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="100%" style="background: #fff">
          <a-menu
            mode="inline"
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['sub1']"
            style="height: 100%"
          >
            <a-sub-menu v-for="section in sections" :key="section.name">
              <span slot="title"><a-icon type="user"/>{{section.name}}</span>
              <a-sub-menu v-for="endPoint in section.endPoints" :key="endPoint.name">
                <span slot="title"><a-icon type="laptop" />{{endPoint.name}}</span>
                <a-menu-item v-for="operation in endPoint.operations" :key="operation.name">{{operation.name}}</a-menu-item>
              </a-sub-menu>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          Content
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </div>
</template>
<script>
import sideBarJson from '../data/sidebar-data.json'
export default {
  data () {
    return {
      sections: sideBarJson
    }
  }
}
</script>

<style lang='scss'>
.navbar {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}
</style>
