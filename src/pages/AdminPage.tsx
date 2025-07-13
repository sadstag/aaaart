import { getSiteId } from "@/siteId";
import { AdminPage as BaseDomainAdminPage } from "./baseDomain/AdminPage";
import { AdminPage as SubdomainAdminPage } from "./subDomain/AdminPage";

export function AdminPage() {
	const RealIndexPage =
		getSiteId() === "undefined" ? BaseDomainAdminPage : SubdomainAdminPage;
	return <RealIndexPage />;
}
