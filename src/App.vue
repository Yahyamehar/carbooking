<template>
    <div style="margin: 0; padding: 0;" class="container=fluid">

        <Navbar />
        <div style="margin: 0; padding: 0;" class="container-fluid">
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
export default {
    components: {
        Navbar
    },
    methods: {
        showModal() {
            this.$bvModal.msgBoxOk('Modal from @vue/compat');
        },
    },
};
</script>
  

<style>
* {
    margin: 0;
    padding: 0;
}
</style>