import type { PropsWithChildren } from "react";

export function AdminLayout({ children }: PropsWithChildren) {
	return (
		<div>
			Base domain Admin Layout
			<br />
			contents:
			<div>{children}</div>
		</div>
	);
}
