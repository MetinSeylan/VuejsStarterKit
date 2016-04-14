<template>
    <div class="container">
        <div class="wrapper">
            <aside class="aside aside-1">Aside 1</aside>
            <article class="main">
                wqe
            </article>

        </div>
    </div>
</template>

<script>
    import Header from './layouts/header.vue';
    export default{
        components: {
            navbar: Header
        },
        data(){
            return {
                msg: ''
            }
        }
    }
</script>


<style lang="sass">
    @import "dashboard.scss";
</style>