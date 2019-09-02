class Problem {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.ans = 0;
  }
  gen() {
    this.x = Math.ceil( Math.random() * 4 );
    this.y = Math.ceil( Math.random() * 4 );
    this.ans = this.x + this.y;
  }
  check(pred) {
    return this.ans == pred;
  }
}
