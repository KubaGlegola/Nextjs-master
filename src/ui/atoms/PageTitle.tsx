import { type ReactNode } from "react";

export const PageTitle = ({ children }: { children: ReactNode }) => {
	return <h1 className="text-3xl font-semibold">{children}</h1>;
};
