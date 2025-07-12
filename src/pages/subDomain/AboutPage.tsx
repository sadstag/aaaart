import { getDefinedSiteId } from "@/siteId";
import { wrapWithSiteLayout } from "./Layout";

function AboutPage() {
	return <div className="p-2">About for site "{getDefinedSiteId()}"</div>;
}

export default wrapWithSiteLayout(AboutPage);
