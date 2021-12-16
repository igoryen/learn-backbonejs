
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var ArtistView = Backbone.View.extend({
    render() {
        this.$el.html("ARTISTS VIEW");
        return this;
    }
});

var AlbumsView = Backbone.View.extend({
    render() {
        this.$el.html("ALBUMS VIEW");
        return this;
    }
});

var GenresView = Backbone.View.extend({
    render() {
        this.$el.html("GENRES VIEW");
        return this;
    }
});
