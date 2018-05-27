<script>
  import { Bar } from 'vue-chartjs';

  export default {
    name: 'CustomBarChart',
    extends: Bar,
    props: {
      data: Object,
    },
    mounted() {
      this.renderChart(this.data, { responsive: true, maintainAspectRatio: false });
    },
  }
</script>