class Routers {
	constructor() {
	    this.routes = {}
		this.currentUrl = ''
	}
	route(path, callback){
		this.routes[path] = callback || function() {}
	}
	// 刷新
	refresh() {
		this.currentUrl = location.hash.slice(1) || '/'
		this.routes[this.currentUrl]()
	}
}