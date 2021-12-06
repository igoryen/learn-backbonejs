// Item Model
var Venue = Backbone.Model.extend();

// Collection of Items
var Venues = Backbone.Collection.extend({
	model: Venue
});

/**
 * Item view
 * renders each Item as an HTML <li> element.
 * render() - displays the name of the Item
 */
var VenueView = Backbone.View.extend({
	tagName: "li",
	/**
	 * 
	 * @param {*} options 
	 */
	initialize: function (options) {
		this.bus = options.bus
	},
	events: {
		"click": "onClick",
	},

	/**
	 * on Click on a Item
	 * use .trigger(A, B) to publish A supplying B
	 * A: the custom event 'item is selected'
	 * B: the model data
	 */
	onClick: function () {
		this.bus.trigger("venueSelected", this.model)
	},

	render: function () {
		this.$el.html(this.model.get("name"));

		return this;
	}
});

/**
 * The view of all Items
 */
var VenuesView = Backbone.View.extend({
	tagName: "ul",

	id: "venues",

	/**
	 * 
	 * @param {*} options 
	 */
	initialize: function (options) {
		this.bus = options.bus;
	},
	/**
	 * create one Item view for each Item
	 * this view is responsible for the Click event on one Item
	 * @returns 
	 */
	render: function () {
		var self = this;

		this.model.each(function (venue) {
			var view = new VenueView({ model: venue, bus: self.bus });
			self.$el.append(view.render().$el);
		});

		return this;
	}
});

/**
 * Area view
 */
var MapView = Backbone.View.extend({
	el: "#map-container",

	/**
	 * subscribe to event 'item is selected'
	 * so that when it fires, invoke the eponymous method 
	 * @param {*} options 
	 */
	initialize: function (options) {
		this.bus = options.bus;
		this.bus.on("venueSelected", this.onVenueSelected, this)
	},

	/**
	 * the method to invoke when triggering event 'item is selected'
	 * @param {*} venue 
	 */
	onVenueSelected: function (venue) {
		this.model = venue;
		this.render();
	},
	render: function () {
		if (this.model)
			this.$("#venue-name").html(this.model.get("name"));

		return this;
	}
})

/**
 * create an event aggregator
 * able to publish events and to subscribe to them
 * this event aggregator is sent to each Item
 */
var bus = _.extend({}, Backbone.Events);

/**
 * initialize the collection of Items
 */
var venues = new Venues([
	new Venue({ name: "30 Mill Espresso" }),
	new Venue({ name: "Platform Espresso" }),
	new Venue({ name: "Mr Foxx" })
]);

/**
 * pass the event aggregator to the viewof all Items
 */
var venuesView = new VenuesView({ model: venues, bus: bus });
$("#venues-container").html(venuesView.render().$el);

/**
 * initialize the Area view
 * pass the event aggregator to the Area view
 */
var mapView = new MapView({ bus: bus });

/**
 * render the Area view
 */
mapView.render();





