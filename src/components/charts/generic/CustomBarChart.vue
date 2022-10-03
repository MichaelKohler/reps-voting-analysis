<script>
  import { Bar, mixins } from 'vue-chartjs';

  export default {
    name: 'CustomBarChart',
    extends: Bar,
    mixins: [mixins.reactiveProp],
    props: {
      chartData: Object,
    },
    mounted() {
      this.renderChart(this.chartData, {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      });
    },
  }
</script>