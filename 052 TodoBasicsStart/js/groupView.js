var GroupView = Backbone.View.extend({

    tagName: "ul",
    id: "group",

    initialize(options) {
        if (!(options && options.model)) {
            throw new Error("model is not described.")
        }
    },
    events: {
        "click #add": "handleClickAdd"
    },
    //===================================
    handleClickAdd() {
        console.log("handleClickAdd");
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