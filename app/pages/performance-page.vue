<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <performance-filter-component @setStartDate="setStartDate" @setEndDate="setEndDate" />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :chartData="items" />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import PerformanceFilterComponent from "../components/vue-components/performance-filter.vue";
import store from "../store/index";
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    PerformanceFilterComponent,
  },
  async created() {
    await this.getItems();
    this.items = store.state.items;
  },
  data() {
    return {
      start_date: null,
      end_date: null,
      items: [],
    };
  },
  computed: {
    // chartData: {
    //   get() {
    //     // this.items = store.state.items;
    //     return this.items;
    //   },
    //   set(val) {
    //     this.items = val;
    //   },
    // },
    chartData() {
      return store.state.items;
    },
  },
  watch: {
    start_date(val) {
      this.filterChartData(val, this.end_date);
    },
    end_date(val) {
      this.filterChartData(this.start_date, val);
    },
  },
  methods: {
    async getItems() {
      await store.dispatch("getItems");
    },
    setStartDate(val) {
      this.start_date = val;
    },
    setEndDate(val) {
      this.end_date = val;
    },
    filterChartData(startDate, endDate) {
      if (startDate && endDate) {
        this.items = this.chartData?.filter((item) => {
          console.log(
            "start date " + startDate,
            "item date " + item.date_ms,
            "end date " + endDate
          );
          // console.log(startDate <= item.date_ms, item.date_ms <= endDate);
          if (startDate <= item.date_ms && item.date_ms <= endDate) {
            return item;
          }
        });
      }
    },
  },
};
</script>
