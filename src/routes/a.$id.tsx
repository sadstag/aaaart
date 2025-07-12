import { createFileRoute } from "@tanstack/react-router";
import ArtworkPage from "../pages/subDomain/Artwork";

// "a" for "artworks"

export const Route = createFileRoute("/a/$id")({
	component: ArtworkPage,
});
