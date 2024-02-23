import { type ReactNode } from "react";

export const PageTitle = ({ children }: { children: ReactNode }) => {
	return <h1 className="mb-4 text-3xl font-semibold">{children}</h1>;
};
