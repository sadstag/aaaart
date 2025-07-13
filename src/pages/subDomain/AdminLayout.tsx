import { Outlet } from "@tanstack/react-router";

export function AdminLayout() {
	return (
		<div>
			Subdomain Admin Layout
			<br />
			contents:
			<div>
				<Outlet />
			</div>
		</div>
	);
}
