import { getDefinedSiteId } from "@/siteId";

export function ContactPage() {
	return <div>Contact page for site "{getDefinedSiteId()}"</div>;
}
