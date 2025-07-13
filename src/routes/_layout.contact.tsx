import { createFileRoute } from "@tanstack/react-router";
import { ensureSiteIdForRoute } from "@/siteId";
import { ContactPage } from "../pages/subDomain/Contact";

export const Route = createFileRoute("/_layout/contact")({
	beforeLoad: () => {
		ensureSiteIdForRoute();
	},
	component: ContactPage,
});
