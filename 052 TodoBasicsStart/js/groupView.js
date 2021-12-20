var GroupView = Backbone.View.extend({

    tagName: "ul",
    id: "group",

    initialize(options) {
        if (!(options && options.model)) {
            throw new Error("model is not described.")
        }
        this.model.on("add", this.handleAddOneItem, this)
    },
    events: {
        "click #add": "handleClickAdd"
    },
    //===================================
    handleClickAdd() {
        var todoItem = new TodoItem({ description: "New TodoItem" });
        this.model.add(todoItem);
    },
    handleAddOneItem(todoItem) {
        var view = new TodoItemView({
            model: todoItem
        });
        this.$el.append(view.render().$el);
    },
    //===================================

    render() {
        var self = this;

        this.$el.append("<button id='add'>Add</button>");

        this.model.each(function (todoItem) {
            var view = new TodoItemView({ model: todoItem });
            self.$el.append(view.render().$el);
            // this.$el.append(view.render().$el);
        });

        return this;
    }
});