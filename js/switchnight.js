const night = () => {
	// switch between light and dark mode
	const willChangeMode = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
	if (willChangeMode === "dark") {
		activateDarkMode();
		GLOBAL_CONFIG.Snackbar !== undefined && anzhiyu.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
	} else {
		activateLightMode();
		GLOBAL_CONFIG.Snackbar !== undefined && anzhiyu.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
	}
	saveToLocal.set("theme", willChangeMode, 2);
}
