App.Router.map(function () {

    this.resource('users', function () {

        this.route('view', {path: "/:user_id"});
        this.route('edit', {path: "/edit/:user_id"});
        this.route('new')

    });

    this.resource('events', function () {

        this.route('test')
    });

    this.resource('admin');
});

App.UsersIndexRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('user');
    }
});

App.UserViewRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.findById("user", params.user_id);
    }
});

App.UsersNewRoute = Ember.Route.extend({

    model: function () {
        return this.store.createRecord('user');
    }
});