App.User = DS.Model.extend({
    first: DS.attr('string'),
    last: DS.attr('string'),
    birthDate: DS.attr('string'),
    active: DS.attr('boolean')
});

App.User.FIXTURES = [
    {
        id: 1,
        first: 'Samuel',
        last: 'Rouiller',
        birthDate: new Date(1972, 2, 16),
        active: true
    },
    {
        id: 3,
        first: 'Olivia',
        last: 'Rouiller',
        birthDate: new Date(2001, 9, 17),
        active: true
    },
    {
        id: 4,
        first: 'Roger',
        last: 'Legros',
        birthDate: new Date(1945, 11, 26),
        active: false
    }
];