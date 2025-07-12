import { getDefinedSiteId } from "@/siteId";
import { wrapWithSiteLayout } from "./Layout";

function ContactPage() {
	return <div>Contact page for site "{getDefinedSiteId()}"</div>;
}

export default wrapWithSiteLayout(ContactPage);
