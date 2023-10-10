"use strict";
F8.component("count-app", {
  data: () => {
    return {
      count: 0,
      title: "Count App",
      content: 'Anh Quân di chuyển con trỏ chuột vô đây đi!!!!!'
    };
  },
  templateEl: `
    <h2>{{ title }}</h2>
    <h2>Số lần anh Quân đã đếm là: {{ count }} lần</h2>
    <div v-on:mouseover = "e.target.style.border = '1px solid red'">{{ content }}</div>
    <div>Hello my name is Huy. I'm good boy 
    <button v-on:click = "count++">+</button>
    </div>
    <button v-on:click = "count--">-</button>
    <button v-on:click = "count++">+</button>
    <button v-on:dblclick = "title = 'Hello F8'">Change title</button>
    `,
});

F8.component('header-component', {
  templateEl: `
    <header>
    <h1>Em chào anh Quân nhé :3</h1>
    </header>
  `
})