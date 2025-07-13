import { Outlet } from "@tanstack/react-router";

export function Layout() {
	return (
		<div>
			Base domain Layout
			<br />
			contents:
			<div>
				<Outlet />
			</div>
		</div>
	);
}
