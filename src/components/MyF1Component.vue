<template>
  <div>

    <h1>F1 GRID API</h1>



    <table id="grid">
      <tr>
        <th>NAME</th>
        <th>TEAM</th>
        <th>TITLES</th>
        <th>CAR</th>
      </tr>


    </table>


  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'MyF1Component',
  data () {
    return {
      name : '',
      grid : '',
      picture : ''
    }
  },
  mounted() {


      axios
          .get('http://localhost:3000/api/f1drivers')
          .then(resp => {

            console.log(resp.data)

            this.grid = document.getElementById('grid')

            for (let i = 0; i <= resp.data.length; i++){

              this.picture  = resp.data[i].picture
              console.log(this.picture)

              this.grid.innerHTML +=


                  '<tr>' +
                  '<td>' + resp.data[i].name +'</td>' +
                  '<td>' + resp.data[i].team +'</td>'+
                  '<td>' + resp.data[i].titles +'</td>' +
                  '<td><img src=' + this.picture +'></td>' +
                  '</tr>'

              console.log()
            }

          })
          .catch(error => console.log(error))
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#grid {
  font-weight: bold;
}

table {
  display: block;
  margin: auto;
  width: 50%;
  background-color: #19161F;
  border-radius: 10px;
  color: white;
  text-align: center;

}

th {
  color: red;
}

h1 {
  text-align: center;
  color: white;
}

</style>
