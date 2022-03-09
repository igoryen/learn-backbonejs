var TodoItem = Backbone.Model.extend({
    validate(attrs) {
        if (!attrs.description) {
            return "Description is required";
        }
    },
    toggle: function () {
        this.set("isCompleted", !this.get("isCompleted"));
    }
})