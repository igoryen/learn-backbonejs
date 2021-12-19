$(document).ready(function () {

    var todoItems = new TodoItems([
        new TodoItem({ description: "TodoItem 1" }),
        new TodoItem({ description: "TodoItem 2" })
    ]);

    var todoItemsView = new TodoItemsView({ model: todoItems });
    $("body").append(todoItemsView.render().$el);

    // const todoItem = new TodoItem({ description: "TodoItem1" });
    // const todoItemView = new TodoItemView({ model: todoItem });
    // $("body").append(todoItemView.render().$el);
});