export default function Footer() {
	return (
		<footer class="bg-black w-full py-8 px-4 text-gray-100">
			<ul>
				<li class="flex items-center justify-center">
					&copy; Sebring Poker Club {new Date().getFullYear()}
				</li>
			</ul>
		</footer>
	);
}
