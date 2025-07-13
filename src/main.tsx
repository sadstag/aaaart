import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { PageNotfound } from "./pages/PageNotFound";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
	routeTree,
	defaultNotFoundComponent: PageNotfound,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("root");
if (rootElement === null) {
	throw new Error("Could not find root element, app is not rendered");
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
