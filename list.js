const todoList = {
  items: [
    {
      text: "Завершить текущий челлендж",
      completed: false,
    },
    {
      text: "Отдохнуть во время перерыва",
      completed: false,
    },
    {
      text: "Помочь напарнику понять код",
      completed: true,
    },
    {
      text: "Выиграть в мафию",
      completed: true,
    },
  ],

  printAll: function () {
    for (i = 0; i < this.items.length; i++) {
      this.print(i);
    }
  },

  add: function (text) {
    const newItem = {
      text,
      completed: false,
    };
    this.items.unshift(newItem);
  },

  remove: function (index) {
    this.items.splice(index, 1);
  },

  print: function (index) {
    if (this.items[index].completed === true) {
      console.log("[x] " + this.items[index].text);
    } else {
      console.log("[] " + this.items[index].text);
    }
  },

  complete: function (index) {
    this.items[index].completed = true;
  },
};

todoList.remove(0);
todoList.add("Pal - добавлен");
todoList.print(2);
todoList.complete(0);
todoList.printAll();
