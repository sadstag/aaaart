import { getSiteId } from "@/siteId";
import { IndexPage as BaseDomainIndexPage } from "./baseDomain/IndexPage";
import { IndexPage as SubdomainIndexPage } from "./subDomain/Index";

export function IndexPage() {
	const RealIndexPage =
		getSiteId() === "undefined" ? BaseDomainIndexPage : SubdomainIndexPage;
	return <RealIndexPage />;
}
