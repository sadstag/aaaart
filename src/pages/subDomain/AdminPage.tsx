import { getDefinedSiteId } from "@/siteId";
import { wrapWithSiteLayout } from "./Layout";

function AdminPage() {
	return (
		<div>AAAart site admin login page for site "{getDefinedSiteId()}".</div>
	);
}

export default wrapWithSiteLayout(AdminPage);
