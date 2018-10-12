<template>
  <div>
    <h1>Say Hello to Vue Calculator</h1>
    <div class='calculator'>
      <div class='dipslay'>{{current || 0}}</div>
      <div class='btn' @click="clear">AC</div>
      <div class='btn' @click="negative_positive">+/-</div>
      <div class='btn' @click="parcent">%</div>
      <div class='btn operator' @click="devide" >/</div>
      <div class='btn' @click="append('7')">7</div>
      <div class='btn' @click="append('8')">8</div>
      <div class='btn' @click="append('9')">9</div>
      <div class='btn operator' @click="multiply">x</div>
      <div class='btn' @click="append('4')">4</div>
      <div class='btn' @click="append('5')">5</div>
      <div class='btn' @click="append('6')">6</div>
      <div class='btn operator' @click="substruct">-</div>
      <div class='btn' @click="append('1')">1</div>
      <div class='btn' @click="append('2')">2</div>
      <div class='btn' @click="append('3')">3</div>
      <div class='btn operator' @click="add">+</div>
      <div class='btn zero' @click="append('0')">0</div>
      <div class='btn' @click="dot">.</div>
      <div class='btn operator' >=</div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      current: '',
    }
  },
  methods:{
    clear(){
      this.current = '';
    },
    negative_positive(){
      this.current = this.current.charAt(0) === '-' 
      ? this.current.slice(1) : `-${this.current}`;
    },
    parcent(){
      if(!this.current) return;
      this.current = `${parseFloat(this.current)/100}`;
    },
    append(str){
      this.current = `${this.current}${str}`;
    },
    dot(){
      if(this.current.indexOf('.') === -1) this.append('.');
    },
    devide(){

    },
    multiply(){

    },
    substruct(){

    },
    add(){

    },
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
    cursor:pointer;
  }
  .zero{
    grid-column: 1/3;
  }
  .operator{
    background-color:#F6872C;
    color:#fff;
  }

</style>
