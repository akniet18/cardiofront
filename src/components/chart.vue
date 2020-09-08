<script>
import { Line } from 'vue-chartjs'
export default {
  name: 'Chart',
  extends: Line,
  data(){
    return{
      chartdata: [1, 2, 3, 4, 5, 6],
      options: []
    }
  },
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 39, 10, 40, 39, 80, 40],
          borderWidth: 1,
          lineTension: 0,
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>