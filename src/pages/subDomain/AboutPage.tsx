import { getDefinedSiteId } from "@/siteId";

export function AboutPage() {
	return <div className="p-2">About for site "{getDefinedSiteId()}"</div>;
}
