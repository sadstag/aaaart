import { Outlet } from "@tanstack/react-router";

export function Layout() {
	return (
		<div>
			Subdomain Layout
			<br />
			contents:
			<Outlet />
		</div>
	);
}
