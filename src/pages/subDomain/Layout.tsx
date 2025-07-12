import type { FC, JSX, ReactNode } from "react";

type Props = {
	children: ReactNode;
};
const Layout = ({ children }: Props) => {
	return (
		<div>
			Site Layout
			<br />
			contents:
			<div>{children}</div>
		</div>
	);
};

export function wrapWithSiteLayout<P extends JSX.IntrinsicAttributes>(
	C: FC<P>,
) {
	return (props: P) => (
		<Layout>
			<C {...props} />
		</Layout>
	);
}
