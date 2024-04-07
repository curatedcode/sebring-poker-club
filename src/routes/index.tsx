import { Title } from "@solidjs/meta";

export default function Home() {
	return (
		<>
			<Title>Sebring Poker Club</Title>
			<main class="text-center container mx-auto text-gray-800 px-2 py-6 md:px-6 grid justify-center gap-24 md:gap-32 font-medium">
				<div
					id="about"
					class="font-medium md:text-xl grid gap-6 max-w-4xl justify-self-center"
				>
					<img
						alt="Sebring Poker Club Charity Logo"
						src="/spc-charity-poker-logo.png"
						class="w-full justify-self-center max-w-96 h-fit"
						width={384}
						height={286}
					/>
					<p class="text-balance">
						The Sebring Poker Club: Where passion for poker and community spirit
						come together! Join us in Highlands County, Florida, for thrilling
						tournaments and the chance to give back. Our Charity Poker
						Tournaments aren’t just about winning; they’re about making a
						difference right here in Central Florida. Be part of the action,
						support local charities, and elevate your game with us!
					</p>
				</div>
				<div
					id="charities"
					class="font-medium md:text-xl grid gap-6 max-w-4xl justify-self-center"
				>
					<p class="text-balance">
						For over twenty years, we’ve proudly supported a whole host of local
						charities through the proceeds from our charity tournaments. Explore
						the charities below to learn more about their impactful work:
					</p>
					<div class="flex flex-wrap justify-center gap-6">
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
				<div
					id="sponsors"
					class="font-medium md:text-xl grid gap-6 max-w-4xl justify-self-center"
				>
					<p class="text-balance">A heartfelt thank you to our sponsors!</p>
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
				<div id="contact" class="text-lg">
					<p>
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
