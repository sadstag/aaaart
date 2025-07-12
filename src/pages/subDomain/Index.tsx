import { Link } from "@tanstack/react-router";
import { getDefinedSiteId } from "@/siteId";
import { wrapWithSiteLayout } from "./Layout";

const artworkdIds = ["a1", "a2"];

function IndexPage() {
	return (
		<div>
			<p>Site Index for "{getDefinedSiteId()}"</p>
			<p>Links to artworks :</p>
			<ul>
				<li>
					<Link to="/about">About the artist</Link>
				</li>
				<li>
					<Link to="/contact">Contact the artist</Link>
				</li>
				<li>
					<Link to="/admin">Administration</Link>
				</li>
				{artworkdIds.map((artworkId) => (
					<li key={artworkId}>
						<Link to={`/a/$id`} params={{ id: artworkId }}>
							Artwork '{artworkId}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default wrapWithSiteLayout(IndexPage);
