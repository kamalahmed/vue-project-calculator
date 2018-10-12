<template>
  <div>
    <h1>Calculator</h1>
    <div class='calculator'>
      <div class='display'>{{current || 0}}</div>
      <div class='btn' @click="clear">AC</div>
      <div class='btn' @click="negative_positive">+/-</div>
      <div class='btn' @click="percent">%</div>
      <div class='btn operator' @click="divide" >/</div>
      <div class='btn' @click="append('7')">7</div>
      <div class='btn' @click="append('8')">8</div>
      <div class='btn' @click="append('9')">9</div>
      <div class='btn operator' @click="multiply">x</div>
      <div class='btn' @click="append('4')">4</div>
      <div class='btn' @click="append('5')">5</div>
      <div class='btn' @click="append('6')">6</div>
      <div class='btn operator' @click="subtract">-</div>
      <div class='btn' @click="append('1')">1</div>
      <div class='btn' @click="append('2')">2</div>
      <div class='btn' @click="append('3')">3</div>
      <div class='btn operator' @click="add">+</div>
      <div class='btn zero' @click="append('0')">0</div>
      <div class='btn' @click="dot">.</div>
      <div class='btn operator' @click="equal">=</div>
    </div>
    <footer>
      <p>Created with love and Vue</p>
      <p>&copy;2018 Kamal Ahmed</p>
    </footer>

  </div>
</template>

<script>
export default {
  data(){
    return {
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false,
    }
  },
  methods:{
    clear(){
      this.previous         = null;
      this.current          = '';
      this.operator         = null;
      this.operatorClicked  = false;
      
    },
    negative_positive(){
      this.current = this.current.charAt(0) === '-' 
      ? this.current.slice(1) : `-${this.current}`;
    },
    percent(){
      if(!this.current) return;
      this.current = `${parseFloat(this.current)/100}`;
    },
    append(str){
      if(this.operatorClicked){
        this.current = '';
        this.operatorClicked = false;
      }
      if(str === '0'){
        if(this.current === '') return; // do not add zero if there are no number in the display
      }
      this.current = `${this.current}${str}`;
    },
    dot(){
      if(this.current.indexOf('.') === -1) this.append('.');
    },
    divide(){
      // adding a named function is better than arrow function for debugging purpose in dev tool
      this.operator = function divide(a, b) { return a * b };
      this.updatePrevValue();
    },
    multiply(){
      this.operator = function multiply(a, b) { return a * b };
      this.updatePrevValue();
    },
    subtract(){
      this.operator = function subtract(a, b) { return a - b };
      this.updatePrevValue();
    },
    add(){
      this.operator =  function add(a, b) { return a + b };
      this.updatePrevValue();
    },
    equal(){
      this.current = `${this.operator(parseFloat(this.previous), parseFloat(this.current))}`;
    },
    updatePrevValue(){
      this.previous = this.current;
      this.operatorClicked = true;
    }
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

  .display {
      grid-column: 1/5;
      background-color:#000;
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
