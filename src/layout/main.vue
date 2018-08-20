<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import FooterBar from '@/components/FooterBar'

export default {
  components: {
    NavBar,
    SideBar,
    FooterBar
  }
}
</script>

<template>
  <div class='container section'>
    <nav-bar />
    <div>
      <div class='columns'>
        <div class='column is-4'>
          <side-bar />
        </div>
      </div>
    </div>
    <footer-bar />
  </div>
</template>
