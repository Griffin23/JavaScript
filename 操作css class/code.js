function hasClass(ele, clazzName) {
    return !!ele.className.match(new RegExp("(\\s|^)" + clazzName + "(\\s|$)"));
}
function addClass(ele, clazzName) {
    if (!hasClass(ele, clazzName)) {
        ele.className += " " + clazzName;
    }
}
function removeClass(ele, clazzName) {
    if (hasClass(ele, clazzName)) {
        ele.className = ele.className.replace(new RegExp("(\\s|^)" + clazzName + "(\\s|$)"), " ");
    }
}