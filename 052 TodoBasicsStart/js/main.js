$(document).ready(function () {

    var group = new Group([
        new TodoItem({ description: "TodoItem 1" }),
        new TodoItem({ description: "TodoItem 2" })
    ]);

    var groupView = new GroupView({ model: group });
    $("body").append(groupView.render().$el);
});