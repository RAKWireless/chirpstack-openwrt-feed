'use strict';
'require view';
'require form';
'require uci';

return view.extend({
    render: function () {
        var m, s, o, ro, as;

        m = new form.Map('node-red', _('Node-RED'), _('Low-code programming for event-driven applications.'));

        s = m.section(form.TypedSection, 'global', _('Global settings'));
        s.anonymous = true;

        s.option(form.Flag, 'enabled', _('Enabled'), _('Enable Node-RED (access the UI <a href="/apps/node-red/" target="_blank">here</a>, might take a few seconds to boot)'));

        return m.render();
    }
});