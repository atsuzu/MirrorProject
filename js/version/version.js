var version = {
	updateInterval: 3000,
	intervalId: null
}

/**
 * Checks the version and refreshes the page if a new version has been pulled
 */
version.checkVersion = function () {

	$.ajax({
		type: 'GET',
		url: 'githash.php',
		dataType: 'json',
		success: function (data) {
			// The githash variable is located in index.php
			//alert(data.gitHash + ' vs ' + gitHash);
			if (data && data.gitHash !== gitHash) {
				window.location.reload();
				window.location.href = window.location.href;
			}
		},
		error: function () {
			//alert("Git update Failed?");
		}
	});

}

version.init = function () {

	this.intervalId = setInterval(function () {
		this.checkVersion();
	}.bind(this), this.updateInterval);

}