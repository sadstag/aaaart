import { getSiteId } from "@/siteId";
import BaseDomainIndexPage from "./baseDomain/IndexPage";
import SubdomainIndexPage from "./subDomain/Index";

export function IndexPage() {
	const RealIndexPage =
		getSiteId() === "undefined" ? BaseDomainIndexPage : SubdomainIndexPage;
	return <RealIndexPage />;
}
