import { getDefinedSiteId } from "@/siteId";

export function AdminPage() {
	return (
		<div>AAAart site admin login page for site "{getDefinedSiteId()}".</div>
	);
}
