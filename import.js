/**
 * 开发版本的文件导入
 */
(function() {
    var paths = [
            'core/kitymockup.js',
            'core/utils.js',
            'core/command.js',
            'core/module.js',
            'core/event.js',
            'core/mockup.js',
            'core/mockup.event.js',
            'core/mockup.module.js',
            'core/mockup.command.js',
            'core/mockup.select.js',
            'core/keymap.js',
            'core/mockup.lang.js',
            'core/mockup.defaultoptions.js',
            'core/mockup.preference.js',
            'core/browser.js'
        ],
        baseURL = 'src/',
        doc = document;
    while (paths.length) {
        doc.write('<script type="text/javascript" src="' + baseURL + paths.shift() + '"></script>');
    }
})();