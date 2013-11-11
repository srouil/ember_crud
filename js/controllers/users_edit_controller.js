App.UsersEditController = Ember.ObjectController.extend({

    actions: {
        save: function () {
            this.get('model').save();
            this.transitionToRoute('users');
        },

        // Cancel user creation
        cancel: function () {
            var model = this.get('model');
            model.rollback();
            this.transitionToRoute('users');
        }
    }
});