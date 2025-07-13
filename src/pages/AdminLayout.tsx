import { getSiteId } from "@/siteId";
import { AdminLayout as BaseDomainAdminLayout } from "./baseDomain/AdminLayout";
import { AdminLayout as SubdomainAdminLayout } from "./subDomain/AdminLayout";

export const AdminLayout = () => {
	const RealLayout =
		getSiteId() === "undefined" ? BaseDomainAdminLayout : SubdomainAdminLayout;
	return <RealLayout />;
};
