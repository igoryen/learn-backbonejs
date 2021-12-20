var GroupView = Backbone.View.extend({

    tagName: "ul",
    id: "group",

    initialize(options) {
        if (!(options && options.model)) {
            throw new Error("model is not described.")
        }
    },

    render() {
        var self = this;

        this.model.each(function (todoItem) {
            var view = new TodoItemView({ model: todoItem });
            self.$el.append(view.render().$el);
            // this.$el.append(view.render().$el);
        });

        return this;
    }
});