var KityMockup = window.KMU = window.KityMockup = function() {
    var instanceMap = {},
        instanceId = 0,
        uuidMap = {};
    return {
        version: '1.0.0',
        uuid: function(name) {
            name = name || 'unknown';
            uuidMap[name] = uuidMap[name] || 0;
            ++uuidMap[name];
            return name + '_' + uuidMap[name];
        },
        createMinder: function(renderTarget, options) {
            options = options || {};
            options.renderTo = Utils.isString(renderTarget) ? document.getElementById(renderTarget) : renderTarget;
            var mockup = new Mockup(options);
            this.addMockup(options.renderTo, mockup);
            return mockup;
        },
        addMockup: function(target, minder) {
            var id;
            if (typeof(target) === 'string') {
                id = target;
            } else {
                id = target.id || ("KMU_INSTANCE_" + instanceId++);
            }
            instanceMap[id] = minder;
        },
        getMockup: function(target, options) {
            var id;
            if (typeof(target) === 'string') {
                id = target;
            } else {
                id = target.id || ("KMU_INSTANCE_" + instanceId++);
            }
            return instanceMap[id] || this.createMinder(target, options);
        },
        //挂接多语言
        LANG: {}
    };
}();