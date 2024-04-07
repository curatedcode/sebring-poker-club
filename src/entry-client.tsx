// @refresh reload
import { StartClient, mount } from "@solidjs/start/client";

// biome-ignore lint/style/noNonNullAssertion: solidjs usage
mount(() => <StartClient />, document.getElementById("app")!);
