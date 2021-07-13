
<template>
    <view class="content" >
        {{date}}
    </view>
</template>
<script>
    export default {
        data() {
            return {
                date: new Date().toISOString().slice(0, 10),
            }
        },
        onLoad() {
        },
        methods: {}
    }
</script>
<style>
.content{
    width: 100%;height: 100px;
}
</style>