import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Home() {
	return (
		<>
			<Title>Sebring Poker Club</Title>
			<main class="md:mx-auto px-2 py-8 md:px-6 grid justify-center gap-48 md:gap-72 font-medium justify-self-center">
				<div class="flex flex-col gap-3 md:flex-row md:gap-12 mt-4 md:mt-24 max-w-5xl items-center md:justify-between">
					<div class="relative max-w-lg md:order-last">
						<img
							alt="Woman holding Ace and King cards on a poker table."
							src="/stock/people-playing-poker.jpg"
							class="rounded shadow-lg shadow-gray-300"
							width={464}
							height={310}
						/>
						<div class="rounded-md h-full absolute top-0 left-0 bg-black opacity-30" />
					</div>
					<div class="flex flex-col gap-3 max-w-lg">
						<h1 class="text-2xl md:text-3xl md:text-nowrap font-semibold mt-1 capitalize">
							The premier poker club destination.
						</h1>
						<p class="text-pretty">
							Our love of poker is what brings us all together. Every game is an
							adventure, and every win is thrilling. Join our group in Highlands
							county for exciting games and the chance to win it all!
						</p>
						<A
							href="/newsletter-signup"
							class="px-3 w-full text-center micro:px-16 py-2 place-self-center rounded border border-black border-opacity-20 text-black sm:w-fit bg-site-yellow-brighter mt-4 hover:bg-site-yellow transition-colors md:order-last text-nowrap"
						>
							Join our newsletter!
						</A>
					</div>
				</div>
				<div
					id="about"
					class="flex flex-col gap-3 md:flex-row md:gap-12 max-w-5xl items-center md:justify-between"
				>
					<img
						alt="Sebring Poker Club Charity Logo"
						src="/spc-charity-poker-logo.png"
						class="w-full justify-self-center max-w-lg drop-shadow-charity-logo shadow-red-200"
						width={464}
						height={293}
					/>
					<p class="md:-mt-4 max-w-lg text-pretty">
						Our Charity Poker Tournaments aren’t just about winning; they’re
						about making a difference right here in our local community. Be part
						of the action, support local charities, and elevate your game with
						us!
					</p>
				</div>
				<div
					id="charities"
					class="flex flex-col gap-3 md:gap-12 max-w-5xl justify-center items-center"
				>
					<h2 class="font-semibold text-lg text-center">
						Take a moment to explore the charities we support and their
						incredible work
					</h2>
					<div class="flex flex-wrap justify-center gap-6 max-w-3xl">
						<a
							href="https://vva.org/"
							rel="noreferrer"
							target="_blank"
							class="relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:border-2 after:border-white"
						>
							<span class="sr-only">Vietnam Veterans of America</span>
							<img
								alt="Vietnam Veterans of America logo"
								src="/charities/1-vietnam-veterans-of-america.png"
								class="size-32"
								width={128}
								height={128}
							/>
						</a>
						<a
							href="https://www.legion.org/"
							rel="noreferrer"
							target="_blank"
							class="relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:border-2 after:border-white"
						>
							<span class="sr-only">American Legion</span>
							<img
								alt="American Legion logo"
								src="/charities/2-american-legion.png"
								class="size-32"
								width={128}
								height={128}
							/>
						</a>
						<a
							href="https://www.rotary.org/en"
							rel="noreferrer"
							target="_blank"
							class="relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:border-2 after:border-white"
						>
							<span class="sr-only">Rotary International</span>
							<img
								alt="Rotary International logo"
								src="/charities/3-rotary-international.png"
								class="size-32"
								width={128}
								height={128}
							/>
						</a>
						<div class="relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:border-2 after:border-white">
							<span class="sr-only">Feeding Highlands Veterans</span>
							<img
								alt="Feeding Highlands Veterans logo"
								src="/charities/4-feeding-highlands-veterans.png"
								class="size-32"
								width={128}
								height={128}
							/>
						</div>
						<a
							href="https://floridamedalofhonor.org/"
							rel="noreferrer"
							target="_blank"
							class="relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:border-2 after:border-white"
						>
							<span class="sr-only">Florida Medal of Honor</span>
							<img
								alt="Florida Medal of Honor logo"
								src="/charities/5-florida-medal-of-honor.png"
								class="size-32"
								width={128}
								height={128}
							/>
						</a>
						<a
							href="https://www.facebook.com/hopehavenhighlands"
							rel="noreferrer"
							target="_blank"
							class="relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:border-2 after:border-white"
						>
							<span class="sr-only">Hope Haven</span>
							<img
								alt="Hope Haven logo"
								src="/charities/6-hope-haven.png"
								class="size-32"
								width={128}
								height={128}
							/>
						</a>
						<a
							href="https://www.facebook.com/BCBilliardsSebring/"
							rel="noreferrer"
							target="_blank"
							class="relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:border-2 after:border-white"
						>
							<span class="sr-only">BC Billiards</span>
							<img
								alt="BC Billiards logo"
								src="/charities/7-bc-billiards.png"
								class="size-32"
								width={128}
								height={128}
							/>
						</a>
					</div>
				</div>
				<div id="sponsors" class="grid gap-6 max-w-5xl">
					<h2 class="font-semibold text-lg text-center">
						A heartfelt thank you to our sponsors!
					</h2>
					<div class="flex flex-wrap justify-center items-center gap-6 md:gap-16">
						<a
							href="https://www.celebritycruises.com/"
							rel="noreferrer"
							target="_blank"
							class="flex justify-center"
						>
							<span class="sr-only">Celebrity X Cruises</span>
							<img
								alt="Celebrity X Cruises logo"
								src="/sponsors/1-celebrity-x-cruises.png"
								class="w-96"
								width={384}
								height={137}
							/>
						</a>
						<a
							href="https://www.cruisesupermarket.com/"
							rel="noreferrer"
							target="_blank"
							class="flex justify-center"
						>
							<span class="sr-only">Cruise and Tour Supermarket</span>
							<img
								alt="Cruise and Tour Supermarket logo"
								src="/sponsors/2-cruise-and-tour-supermarket.png"
								class="relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:border-2 after:border-white"
								width={128}
								height={150}
							/>
						</a>
					</div>
				</div>
				<div
					id="contact"
					class="flex flex-col gap-3 md:gap-12 max-w-5xl justify-center"
				>
					<h2 class="font-semibold text-lg text-center">Contact us</h2>
					<p class="text-center">
						For any inquires please email{" "}
						<a
							href="mailto:contact@sebringpokerclub.com"
							class="relative after:w-full after:bg-black after:absolute after:h-0.5 after:bottom-0 after:left-0"
						>
							contact@sebringpokerclub.com
						</a>
					</p>
				</div>
			</main>
		</>
	);
}
