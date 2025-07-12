import type { FC, JSX, ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div>
			Main Layout
			<br />
			contents:
			<div>{children}</div>
		</div>
	);
};
export function wrapWithMainLayout<P extends JSX.IntrinsicAttributes>(
	C: FC<P>,
) {
	return (props: P) => (
		<Layout>
			<C {...props} />
		</Layout>
	);
}
