<template>
  <div>
    <h1>{{message}}</h1>
    <div class='calculator'>
      <div class='dipslay'>348092384</div>
      <div class='btn'>AC</div>
      <div class='btn' >+/-</div>
      <div class='btn' >%</div>
      <div class='btn operator' >/</div>
      <div class='btn' >7</div>
      <div class='btn' >8</div>
      <div class='btn' >9</div>
      <div class='btn operator' >x</div>
      <div class='btn' >4</div>
      <div class='btn' >5</div>
      <div class='btn' >6</div>
      <div class='btn operator' >-</div>
      <div class='btn' >1</div>
      <div class='btn' >2</div>
      <div class='btn' >3</div>
      <div class='btn operator' >+</div>
      <div class='btn zero'>0</div>
      <div class='btn' >.</div>
      <div class='btn operator' >=</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    message: String
  }
}
</script>











<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  font-size:40px;
  max-width:500px;
  margin: 25px auto;
  border: 1px solid #ddd;
  padding:20px;
  border-radius:10px;
}

.dipslay {
    grid-column: 1/5;
    background-color:#938479;
    text-align:right;
    padding:20px 20px 10px;
    font-size: 50px;
    margin-bottom:10px;
    color:#fff;
    font-weight:300;
}
.btn{
  border: 1px solid #f5f5f5;
}
.zero{
  grid-column: 1/3;
}
.operator{
  background-color:#F6872C;
  color:#fff;
}

</style>
