function submitPostForm(url, params) {
    var form = document.createElement("form");
    form.action = url;
    form.method = "post";
    form.style.display = "none";
    for (var param in params) {
        var opt = document.createElement("textarea");
        opt.name = param;
        opt.value = params[param];
        form.appendChild(opt);
    }
    document.body.appendChild(form);
    form.submit();
}