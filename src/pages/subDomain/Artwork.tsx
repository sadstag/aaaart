import { Route } from "@/routes/_layout.a.$id";
import { getDefinedSiteId } from "@/siteId";

export function ArtworkPage() {
	const { id: artworkId } = Route.useParams();
	return (
		<div>
			Artwork page for artworkd id '{artworkId}' of site '{getDefinedSiteId()}'
		</div>
	);
}
