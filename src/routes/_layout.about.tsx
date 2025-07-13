import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/subDomain/AboutPage";
import { ensureSiteIdForRoute } from "@/siteId";

export const Route = createFileRoute("/_layout/about")({
	beforeLoad: () => {
		ensureSiteIdForRoute();
	},
	component: AboutPage,
});
