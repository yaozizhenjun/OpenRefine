var DOM = {};

DOM.bind = function(elmt, fields) {
    var map = {};
    for (var i = 0; i < fields.length; i++) {
        map[fields[i]] = null;
    }
    
    DOM._bindDOMChildren(elmt[0], map);
    
    return map;
};

DOM._bindDOMElement = function(elmt, map) {
    var id = elmt.id;
    if (id != null && id.length > 0) {
        if (id in map && map.hasOwnProperty(id)) {
            map[id] = $(elmt);
            elmt.removeAttribute("id");
        }
    }
    
    if (elmt.hasChildNodes()) {
        DOM._bindDOMChildren(elmt, map);
    }
};

DOM._bindDOMChildren = function(elmt, map) {
    var node = elmt.firstChild;
    while (node != null) {
        var node2 = node.nextSibling;
        if (node.nodeType == 1) {
            DOM._bindDOMElement(node, map);
        }
        node = node2;
    }
};