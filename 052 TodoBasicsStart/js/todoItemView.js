var TodoItemView = Backbone.View.extend({
    tagName: "li",
    initialize(options) {
        if (!(options && options.model)) {
            throw new Error("model is not specified.");
        }
    },

    events: {
        "click #toggle": "onClickToggle"
    },

    onClickToggle() {
        if (this.model.get("isCompleted")) {
            this.model.set("isCompleted", false);
        } else {
            this.model.set("isCompleted", true);
        }
    },

    render() {
        this.$el.html("<input id='toggle' type='checkbox'></input>" + this.model.escape("description")); // 1
        return this;
    }
});

/**
 * 1. not execute code like <sctipt>alert('hacked')</script> but turn it into text
 */