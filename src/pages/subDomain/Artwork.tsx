import { Route } from "@/routes/a.$id";
import { getDefinedSiteId } from "@/siteId";
import { wrapWithSiteLayout } from "./Layout";

function ArtworkPage() {
	const { id: artworkId } = Route.useParams();
	return (
		<div>
			Artwork page for artworkd id '{artworkId}' of site '{getDefinedSiteId()}'
		</div>
	);
}

export default wrapWithSiteLayout(ArtworkPage);
