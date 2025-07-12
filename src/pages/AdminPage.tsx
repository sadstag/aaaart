import { getSiteId } from "@/siteId";
import BaseDomainAdminPage from "./baseDomain/AdminPage";
import SubdomainAdminPage from "./subDomain/AdminPage";

export function AdminPage() {
	const RealIndexPage =
		getSiteId() === "undefined" ? BaseDomainAdminPage : SubdomainAdminPage;
	return <RealIndexPage />;
}
