var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
    render() {
        this.$el.html(this.model.get("title"));
        return this;
    }
});

var song = new Song({ title: "Blue in Green" });
var SongView = new SongView({ el: "#container", model: song });
SongView.render();