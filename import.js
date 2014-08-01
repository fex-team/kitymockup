/**
 * 开发版本的文件导入
 */
(function() {
    var paths = [

        ],
        baseURL = 'src/',
        doc = document;
    while (paths.length) {
        doc.write('<script type="text/javascript" src="' + baseURL + paths.shift() + '"></script>');
    }
})();