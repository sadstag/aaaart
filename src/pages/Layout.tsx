import { getSiteId } from "@/siteId";
import { Layout as BaseDomainLayout } from "./baseDomain/Layout";
import { Layout as SubdomainLayout } from "./subDomain/Layout";

export const Layout = () => {
	const RealLayout =
		getSiteId() === "undefined" ? BaseDomainLayout : SubdomainLayout;
	return <RealLayout />;
};
