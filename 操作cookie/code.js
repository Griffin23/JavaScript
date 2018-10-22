function getCookie(cookieName) {
	if (document.cookie.length > 0) {
		var startIndex = document.cookie.indexOf(cookieName + '=');
		var endIndex = -1;
		if (startIndex != -1) {
			startIndex += cookieName.length + 1;
			endIndex = document.cookie.indexOf(';', startIndex);
			if (endIndex == -1) {
				endIndex = document.cookie.length;
				return unescape(document.cookie.substring(startIndex, endIndex));
			}
		}
	}
	return '';
} 

function setCookie(cookieName, cookieValue, expireMillisecond) {
	var now = new Date();
	var expireDateTime = new Date(now.getTime() + expireMillisecond);
	document.cookie = cookieName + '=' + escape(cookieValue) + ((expireMillisecond == null)? '': ';expires=' + expireDateTime.toGMTString());
}