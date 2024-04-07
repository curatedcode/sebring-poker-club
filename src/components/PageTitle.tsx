import { Title } from "@solidjs/meta";

export default function PageTitle({ children }: { children: string }) {
	return <Title>{children} | Sebring Poker Club</Title>;
}
