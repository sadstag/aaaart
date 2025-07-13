import { createFileRoute } from "@tanstack/react-router";
import { ensureSiteIdForRoute } from "@/siteId";
import { ArtworkPage } from "../pages/subDomain/Artwork";

// "a" for "artworks"

export const Route = createFileRoute("/_layout/a/$id")({
	beforeLoad: () => {
		ensureSiteIdForRoute();
	},
	component: ArtworkPage,
});
