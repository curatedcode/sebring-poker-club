import { A, useLocation } from "@solidjs/router";
import { Show, createEffect, createSignal } from "solid-js";
import { Transition } from "solid-transition-group";

export default function Nav() {
	function scrollIntoView(hash: string) {
		const elementToScrollTo = document.getElementById(hash);

		if (!elementToScrollTo) return;
		elementToScrollTo.scrollIntoView();
	}

	const [showMobileNav, setShowMobileNav] = createSignal(false);

	function showNewsletterBanner() {
		const isCurrentPageNewsletter =
			useLocation().pathname === "/newsletter-signup";
		return !isCurrentPageNewsletter;
	}

	createEffect(() => {
		if (!showMobileNav()) {
			const menuBtn = document.querySelector(".menu-btn");
			if (!menuBtn) return;

			menuBtn.classList.add("close");
			return;
		}

		const menuBtn = document.querySelector(".menu-btn");
		if (!menuBtn) return;

		menuBtn.classList.remove("close");
	});

	return (
		<>
			<nav
				class={`bg-black text-gray-100 ${
					showNewsletterBanner() ? "" : "drop-shadow-md shadow-black"
				}`}
			>
				<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-6">
					<A href="/" class="flex items-center gap-1 rtl:space-x-reverse">
						<span class="sr-only">Home</span>
						<img
							src="/spc-logo.svg"
							class="size-10"
							alt="Sebring Poker Club Logo"
						/>
						<span
							class="hidden micro:block text-lg font-semibold whitespace-nowrap"
							aria-disabled="true"
						>
							Sebring Poker Club
						</span>
					</A>

					<button
						data-collapse-toggle="mobile-navbar"
						type="button"
						class="inline-flex items-center w-10 h-10 justify-center rounded-lg md:hidden"
						aria-controls="mobile-navbar"
						aria-expanded="false"
						onclick={(e) => {
							if (e.currentTarget.ariaExpanded === "false") {
								e.currentTarget.ariaExpanded = "true";
							} else {
								e.currentTarget.ariaExpanded = "false";
							}
							setShowMobileNav((prev) => !prev);
						}}
					>
						<span class="sr-only">Open main menu</span>
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class={`size-7 text-gray-100 ${showMobileNav() ? "" : "hidden"}`}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18 18 6M6 6l12 12"
							/>
						</svg>
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class={`size-7 text-gray-100 ${showMobileNav() ? "hidden" : ""}`}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
					<div class="hidden md:block md:w-auto">
						<ul class="font-medium flex gap-8">
							<li class="group">
								<A
									href="/"
									class="group-hover:after:w-full relative after:bg-gray-100 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-200"
								>
									Home
								</A>
							</li>
							<li class="group">
								<A
									href="/#about"
									class="group-hover:after:w-full relative after:bg-gray-100 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-200"
									onclick={() => scrollIntoView("about")}
								>
									About
								</A>
							</li>
							<li class="group">
								<A
									href="/#contact"
									class="group-hover:after:w-full relative after:bg-gray-100 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-200"
									onclick={() => scrollIntoView("contact")}
								>
									Contact
								</A>
							</li>
						</ul>
					</div>
					<Transition name="slide-fade">
						<Show when={showMobileNav()}>
							<div class="w-full md:hidden" id="mobile-navbar">
								<ul class="font-medium flex flex-col gap-2 py-4 px-3 mt-4 border border-zinc-800 rounded-md bg-zinc-900">
									<li>
										<A
											href="/"
											class="hover:bg-zinc-800 transition-colors py-2 px-3 bg-zinc-900 block rounded"
											onclick={() => setShowMobileNav(false)}
										>
											Home
										</A>
									</li>
									<li class="group">
										<A
											href="/#about"
											class="hover:bg-zinc-800 transition-colors py-2 px-3 bg-zinc-900 block rounded"
											onclick={() => {
												setShowMobileNav(false);
												scrollIntoView("about");
											}}
										>
											About
										</A>
									</li>
									<li class="group">
										<A
											href="/#contact"
											class="hover:bg-zinc-800 transition-colors py-2 px-3 bg-zinc-900 block rounded"
											onclick={() => {
												setShowMobileNav(false);
												scrollIntoView("contact");
											}}
										>
											Contact
										</A>
									</li>
								</ul>
							</div>
						</Show>
					</Transition>
				</div>
			</nav>
			{/* <div
				class={
					showNewsletterBanner()
						? "bg-site-yellow w-full pt-1.5 pb-2 text-center font-medium text-black drop-shadow-md shadow-black"
						: "hidden"
				}
			>
				<A
					href="/newsletter-signup"
					class="w-fit relative after:bg-black after:absolute hover:opacity-90 transition-opacity after:h-0.5 after:bottom-0 after:left-0 after:w-full after:transition-all after:duration-200 text-center"
				>
					Join our newsletter!
				</A>
			</div> */}
		</>
	);
}
