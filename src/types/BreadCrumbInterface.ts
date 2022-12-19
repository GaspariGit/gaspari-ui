type routerObj = {
	name: string
}
interface BreadcrumbInterface {
	label : string,
	path? : string | routerObj,
}

export default BreadcrumbInterface;