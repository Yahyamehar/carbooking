<template>
    <div>
        <div class="loading-container">
            <b-progress class="w-100" :max="maxLoadingTime" height="1.5rem">
                <b-progress-bar :value="loadingTime / maxLoadingTime * 100"
                    :label="`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`"></b-progress-bar>
            </b-progress>

            <b-button class="reload-button" @click="startLoading">Reload</b-button>
        </div>

        <b-skeleton-wrapper :loading="loading">
            <template #loading>
                <b-card class="loading-card">
                    <b-skeleton class="skeleton-item" width="85%"></b-skeleton>
                    <b-skeleton class="skeleton-item" width="55%"></b-skeleton>
                    <b-skeleton class="skeleton-item" width="70%"></b-skeleton>
                </b-card>
            </template>

            <b-card class="success-card">
                YOU HAVE SUCCESSFULLY SUBMITTED YOUR RESERVATION.
            </b-card>
        </b-skeleton-wrapper>
    </div>
</template>
  
<script>
export default {
    name: 'loading-',
    data() {
        return {
            loading: false,
            loadingTime: 0,
            maxLoadingTime: 3,
        };
    },
    watch: {
        loading(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.clearLoadingTimeInterval();

                if (newValue) {
                    this.$_loadingTimeInterval = setInterval(() => {
                        this.loadingTime++;
                    }, 1000);
                }
            }
        },
        loadingTime(newValue, oldValue) {
            if (newValue !== oldValue) {
                if (newValue === this.maxLoadingTime) {
                    this.loading = false;
                }
            }
        }
    },
    created() {
        this.$_loadingTimeInterval = null;
    },
    mounted() {
        this.startLoading();
    },
    methods: {
        clearLoadingTimeInterval() {
            clearInterval(this.$_loadingTimeInterval);
            this.$_loadingTimeInterval = null;
        },
        startLoading() {
            this.loading = true;
            this.loadingTime = 0;
        },
    },
};
</script>
  
<style scoped>
.loading-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #f3f3f3;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.reload-button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.reload-button:hover {
    background-color: #45a049;
}

.loading-card {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.success-card {
    padding: 20px;
    border: 1px solid #4CAF50;
    border-radius: 5px;
    background-color: #E8F5E9;
    color: #4CAF50;
    box-shadow: 0 0 10px rgba(0, 128, 0, 0.1);
}

.skeleton-item {
    margin-bottom: 10px;
    background-color: #e3e3e3;
    border-radius: 5px;
}

.b-progress {
    background-color: #f3f3f3;
}

.b-progress-bar {
    background-color: #4CAF50;
}
</style>
