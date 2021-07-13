<template>
<div>
  <v-head></v-head>
  <v-body></v-body>
  <!-- <router-view></router-view> -->
  <v-index></v-index>
</div>
</template>

<script>
import vHead from './Header.vue'
import vBody from './Body.vue'
import vIndex from '../page/index.vue'
export default{
    data(){
        return
    },
    components:{
        vHead,
        vBody,
        vIndex,
    }
}
</script>
