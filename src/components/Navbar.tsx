import { A, useLocation } from "@solidjs/router";
import { Show, createSignal } from "solid-js";
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

	return (
		<>
			<nav
				class={`bg-black text-gray-100 ${
					showNewsletterBanner() ? "" : "drop-shadow-md shadow-black"
				}`}
			>
				<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<A href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
						<span class="sr-only">Home</span>
						<img
							src="/spc-logo.svg"
							class="size-10"
							alt="Sebring Poker Club Logo"
						/>
						<span
							class="self-center text-xl mb-0.5 font-semibold whitespace-nowrap"
							aria-disabled="true"
						>
							Sebring Poker Club
						</span>
					</A>
					<button
						data-collapse-toggle="mobile-navbar"
						type="button"
						class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
						aria-controls="mobile-navbar"
						aria-expanded="false"
						onclick={(e) => {
							e.currentTarget.ariaExpanded = "true";
							setShowMobileNav((prev) => !prev);
						}}
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="w-5 h-5 text-gray-100"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
					<div class="hidden md:block md:w-auto">
						<ul class="font-medium text-lg flex gap-8">
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
							<div class="w-full" id="mobile-navbar">
								<ul class="font-medium flex flex-col gap-4 p-4 mt-4 border border-zinc-800 rounded-md bg-zinc-900">
									<li class="group">
										<A
											href="/"
											class="group-hover:after:w-full relative after:bg-gray-100 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-200"
											onclick={() => setShowMobileNav(false)}
										>
											Home
										</A>
									</li>
									<li class="group">
										<A
											href="/#about"
											class="group-hover:after:w-full relative after:bg-gray-100 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-200"
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
											class="group-hover:after:w-full relative after:bg-gray-100 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-200"
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
			<div
				class={
					showNewsletterBanner()
						? "bg-site-yellow w-full pt-1.5 pb-2 text-lg text-center font-medium text-black drop-shadow-md shadow-black"
						: "hidden"
				}
			>
				<A
					href="/newsletter-signup"
					class="w-fit relative after:bg-black after:absolute hover:opacity-90 transition-opacity after:h-0.5 after:bottom-0 after:left-0 after:w-full after:transition-all after:duration-200 text-center"
				>
					Join our newsletter!
				</A>
			</div>
		</>
	);
}
