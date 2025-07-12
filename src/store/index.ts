import { Store } from "@tanstack/react-store";
import type { AppState } from "./AppState";

export const store = new Store<AppState>({
	foo: "bar",
});
