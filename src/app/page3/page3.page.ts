import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.css']
})
export class Page3Page implements OnInit {

  todos = [
  {
    id: 1,
    text: "Fare la spesa",
    check: ""
  },
  {
    id: 2,
    text: "Studiare Angular",
    check: "check"
  },
  {
    id: 3,
    text: "Fare benzina",
    check: ""
  },
]

  constructor() { }

  ngOnInit(): void {
  }
  removeTodo(i:number) {
    this.todos.splice(i, 1);
  }
  checkTodo(i:number) {
    this.todos[i].check = this.todos[i].check === "check" ? " " : "check";
  }

}
