var TodoItemView = Backbone.View.extend({

    initialize(options) {
        if (!(options && options.model)) {
            throw new Error("model is not specified.");
        }
    },

    render() {
        this.$el.html(this.model.get("description"));
        return this;
    }
});