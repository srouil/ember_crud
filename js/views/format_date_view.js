/**
 * Created by samuel on 08.11.13.
 */
Ember.Handlebars.helper('format-date', function(value, options) {
    var format = options.hash.format;
    if (format === undefined) {
        format = 'DD.MM.YYYY';
    }

    if (value === null) {
        return "";
    }

    return moment(value).format(format);
});
