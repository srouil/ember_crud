App.UsersViewController = Ember.ObjectController.extend({

    actions: {
        delete: function () {
            var model = this.get('model');
            model.deleteRecord();
            model.save();
            this.transitionToRoute('users');
        }
    }});