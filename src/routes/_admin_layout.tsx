import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/pages/AdminLayout";

export const Route = createFileRoute("/_admin_layout")({
	component: AdminLayout,
});
