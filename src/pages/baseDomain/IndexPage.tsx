import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { wrapWithMainLayout } from "./Layout";

const siteIds = ["e", "z", "rp", "ln"] as const;

const urlForSiteId = (siteId: (typeof siteIds)[number]) =>
	`http://${siteId}.${import.meta.env.VITE_DOMAIN_NAME}${import.meta.env.DEV ? ":3000" : ""}`;

function IndexPage() {
	return (
		<div>
			<p>Nosite Index</p>
			<p>
				AAAart is a website machine to present the work of artists.
				<a href="https://github.com/sadstag/aaaart">see on github</a>.
			</p>
			<ul>
				{siteIds.map((siteId) => (
					<li key={siteId}>
						<a href={urlForSiteId(siteId)}>{siteId}</a>
					</li>
				))}
			</ul>
			<Link to="/about">About AAAart</Link>
			<Outlet />
			<TanStackRouterDevtools />
		</div>
	);
}

export default wrapWithMainLayout(IndexPage);
