App.UsersIndexController = Ember.ArrayController.extend({

    actions: {
        view: function (user) {
            this.transitionToRoute('users.view', user);
        },
        delete: function (user) {
            user.deleteRecord();
            user.save();
            this.transitionToRoute('users');
        }
    }
});