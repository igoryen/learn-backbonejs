const TodoItemView = Backbone.View.extend({
    render() {
        this.$el.html(this.model.get("description"));
        return this;
    }
});