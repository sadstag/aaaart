import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/pages/subDomain/AboutPage";

export const Route = createFileRoute("/about")({
	component: AboutPage,
});
