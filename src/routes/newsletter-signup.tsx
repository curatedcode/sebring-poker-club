import { Show, createEffect, createSignal } from "solid-js";
import { z } from "zod";
import PageTitle from "~/components/PageTitle";

type SubscriptionErrorState = {
	success: false;
	message: "Awaiting Submit" | "Post Submit Error";
};

type SubscriptionSuccessState = {
	success: true;
};

type SubscriptionComplete = SubscriptionSuccessState | SubscriptionErrorState;

export default function NewsletterSignUp() {
	const formSchema = z.object({
		email: z
			.string()
			.min(1, { message: "Email can't be empty." })
			.email({ message: "Email is not valid." }),
	});

	const [getIsFormSubmitDisabled, setIsFormSubmitDisabled] = createSignal(true);

	const [getFormEmail, setFormEmail] = createSignal("");
	const [getIsEmailConsentGranted, setIsEmailConsentGranted] =
		createSignal(false);

	const [getFormEmailError, setFormEmailError] = createSignal("");

	const [getIsFormSubmitted, setIsFormSubmitted] = createSignal(false);

	const [getIsSubscriptionComplete, setIsSubscriptionComplete] =
		createSignal<SubscriptionComplete>({
			success: false,
			message: "Awaiting Submit",
		});

	function getPageState() {
		const state = getIsSubscriptionComplete();
		if (state.success) return "Successful Submit";
		return state.message;
	}

	function submitForm(
		e: Event & {
			submitter: HTMLElement;
		} & {
			currentTarget: HTMLFormElement;
			target: Element;
		},
	) {
		e.preventDefault();

		const validation = formSchema.safeParse({ email: getFormEmail() });

		if (!validation.success) {
			setFormEmailError(validation.error.errors[0].message);
			return;
		}

		setIsFormSubmitted(true);

		fetch(
			"https://assets.mailerlite.com/jsonp/891140/forms/117360896133563672/subscribe",
			{ method: "POST", body: new FormData(e.currentTarget) },
		).then((response) => {
			if (!response.ok) {
				setIsSubscriptionComplete(() => ({
					success: false,
					message: "Post Submit Error",
				}));
				return;
			}

			setIsSubscriptionComplete(() => ({ success: true }));
		});
	}

	function emailValidation():
		| { success: false; message: string }
		| { success: true } {
		const parsed = formSchema.safeParse({ email: getFormEmail() });

		if (!parsed.success) {
			return { success: false, message: parsed.error.errors[0].message };
		}

		return { success: true };
	}

	createEffect(() => {
		const emailParsed = emailValidation();
		if (!emailParsed.success) {
			if (emailParsed.message !== "Email can't be empty.") {
				setFormEmailError(emailParsed.message);
			}
			setIsFormSubmitDisabled(true);
			return;
		}

		if (!getIsEmailConsentGranted()) {
			setIsFormSubmitDisabled(true);
			return;
		}

		setIsFormSubmitDisabled(false);
	});

	return (
		<>
			<PageTitle>Newsletter Sign Up</PageTitle>
			<main class="container md:mx-auto px-2 py-8 md:px-6 grid justify-center font-medium justify-self-center">
				<img
					src="/spc-charity-poker-logo.png"
					alt="Sebring Poker Club Charity Poker Logo"
					class="w-64 sm:w-80 justify-self-center mb-4"
					width={320}
					height={202}
				/>
				<Show when={getIsSubscriptionComplete().success}>
					<div class="gap-2 grid text-center justify-center max-w-sm w-full bg-gray-200 rounded-md p-4">
						<span class="text-lg font-semibold">
							Thank you for subscribing!
						</span>
						<span>We'll send you an introductory email shortly.</span>
						<span class="text-sm">
							* Remember to check you spam folder if you can't find our emails.
						</span>
					</div>
				</Show>
				<Show when={getPageState() === "Post Submit Error"}>
					<p class="text-center max-w-sm w-full bg-gray-200 rounded-md p-4">
						There was an issue with your subscription. Please try again later.
					</p>
				</Show>
				<Show when={getPageState() === "Awaiting Submit"}>
					<div
						id="newsletter-form"
						class="grid justify-center max-w-sm w-full bg-gray-200 rounded-md p-4 pb-6"
					>
						<div class="grid justify-center gap-2 mb-2">
							<h1 class="text-2xl font-semibold text-center">Newsletter</h1>
							<p class="px-1 text-center">
								Sign up to receive our weekly tournament schedule and other
								important announcements.
							</p>
						</div>
						<form onsubmit={(e) => submitForm(e)}>
							<div class="mb-4 mt-3 ml-form-formContent">
								<label class="sr-only" for="fields[email]">
									Email
								</label>
								<span
									aria-hidden="true"
									class={`h-[21px] w-full ${
										getFormEmailError() === "" ? "" : "hidden"
									}`}
								/>
								<span
									role="alert"
									aria-live="polite"
									class="m-0.5 ml-1 text-site-red"
									hidden={getFormEmailError() === ""}
								>
									* {getFormEmailError()}
								</span>
								<div class="ml-form-fieldRow ml-last-item">
									<div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
										<input
											required
											type="text"
											name="fields[email]"
											oninput={(e) => {
												setFormEmail(e.currentTarget.value);
												if (getFormEmailError() !== "") {
													setFormEmailError("");
												}
											}}
											placeholder="Email"
											autocomplete="email"
											class={`w-full py-1.5 px-3 rounded-md form-control ${
												getFormEmailError() === "" ? "" : "ring-1 ring-site-red"
											}`}
											data-inputmask=""
										/>
									</div>
								</div>
							</div>
							<div>
								<div class="flex items-start gap-2">
									<input
										required
										type="checkbox"
										name="email_agreement"
										onchange={(e) =>
											setIsEmailConsentGranted(e.currentTarget.checked)
										}
										class="mt-1.5"
									/>
									<label for="email_agreement">
										By checking this box you agree to receive automated emails.
									</label>
								</div>
							</div>
							<Show when={getIsFormSubmitted()}>
								<button
									type="button"
									disabled
									onclick={(e) => e.preventDefault()}
									class="px-5 py-2 rounded-md disabled:opacity-80 disabled:cursor-not-allowed w-full bg-black text-white font-medium mt-3 transition-opacity"
								>
									<div
										class="inline-block size-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
										role="status"
									>
										<span class="sr-only">Loading...</span>
									</div>
								</button>
							</Show>
							<Show when={!getIsFormSubmitted()}>
								<button
									type="submit"
									disabled={getIsFormSubmitDisabled()}
									title={
										getIsFormSubmitDisabled()
											? "Please complete all form fields."
											: undefined
									}
									class="px-5 py-2 rounded-md disabled:opacity-70 disabled:cursor-not-allowed w-full bg-black text-white font-medium mt-3 transition-opacity"
								>
									Submit
								</button>
							</Show>
						</form>
					</div>
				</Show>
			</main>
		</>
	);
}
