import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<>
			Root
			<br />
			<Outlet />
		</>
	),
	// looks like there is a bug, the notFoundComponent is not called
	// when notFound() is thrown from beforeLoad
	// notFoundComponent: () => {
	// 	return <p>Page was not found</p>;
	// },
});
