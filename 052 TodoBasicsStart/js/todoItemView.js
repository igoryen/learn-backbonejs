var TodoItemView = Backbone.View.extend({
    tagName: "li",
    initialize(options) {
        if (!(options && options.model)) {
            throw new Error("model is not specified.");
        }
    },

    render() {
        this.$el.html(this.model.escape("description")); // 1
        return this;
    }
});

/**
 * 1. not execute code like <sctipt>alert('hacked')</script> but turn it into text
 */