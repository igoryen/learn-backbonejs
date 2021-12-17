
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


var AppRouter = Backbone.Router.extend({
    routers: {
        "albums": "viewAlbums", // 1
        "albums/:albumId": "viewAlbumId"
    },

    viewAlbums() {
        var view = new AlbumsView({ el: "#container" }); // 2
        view.render(); // 3
    },

    viewAlbumId(albumId) {
        // tbd
    }
});

/**
 * 1. if route is 'albums', call function viewAlbums()
 * format: "route-pattern" : "route-handler"
 * 
 * 2. the route-handler creates a new "view"
 * 
 * 3. the route-handler renders the new "view"
 */