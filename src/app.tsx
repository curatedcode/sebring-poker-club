import { Link, Meta, MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Navbar from "~/components/Navbar";
import "./app.css";
import Footer from "./components/Footer";

export default function App() {
	return (
		<Router
			root={(props) => (
				<>
					<MetaProvider>
						<Link
							rel="apple-touch-icon-precomposed"
							href="/favicons/favicon-180.png"
						/>
						<Meta name="msapplication-TileColor" content="#f7240f" />
						<Meta
							name="msapplication-TileImage"
							content="/favicons/favicon-144.png"
						/>
						<Meta name="application-name" content="Sebring Poker Club" />
						<Meta name="msapplication-tooltip" content="Tooltip" />
						<Meta
							name="msapplication-config"
							content="/favicons/ieconfig.xml"
						/>
						<Link
							rel="apple-touch-icon-precomposed"
							sizes="152x152"
							href="/favicons/favicon-152.png"
						/>
						<Link
							rel="apple-touch-icon-precomposed"
							sizes="144x144"
							href="/favicons/favicon-144.png"
						/>
						<Link
							rel="apple-touch-icon-precomposed"
							sizes="120x120"
							href="/favicons/favicon-120.png"
						/>
						<Link
							rel="apple-touch-icon-precomposed"
							sizes="114x114"
							href="/favicons/favicon-114.png"
						/>
						<Link
							rel="apple-touch-icon-precomposed"
							sizes="76x76"
							href="/favicons/favicon-76.png"
						/>
						<Link
							rel="apple-touch-icon-precomposed"
							href="/favicons/favicon-57.png"
						/>
						<Link rel="icon" href="/favicons/favicon-32.png" sizes="32x32" />
						<Link
							rel="shortcut icon"
							sizes="196x196"
							href="/favicons/favicon-196.png"
						/>
						<Link rel="mask-icon" href="icon.svg" color="#f7240f" />
						<Navbar />
						<div class="min-h-[100dvh] bg-white">
							<div class="bg-white pb-52">
								<Suspense>{props.children}</Suspense>
							</div>
						</div>
						<Footer />
					</MetaProvider>
				</>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
