import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "../pages/subDomain/Contact";

export const Route = createFileRoute("/contact")({
	component: ContactPage,
});
