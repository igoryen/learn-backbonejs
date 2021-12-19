export const SongView = Backbone.View.extend({
    render() {
        this.$el.html(this.model.get("title"));
        return this;
    }
});


export function hello() {
    return "Hello";
};

