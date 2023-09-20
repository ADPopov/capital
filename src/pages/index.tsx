import Head from "next/head";
import { useRouter } from "next/navigation";

import { api } from "~/utils/api";

export type QuestionsType = {
    duration: string,
    dailyIncrease: string,
    initialAmount: string
}

export default function Home() {
    const router = useRouter();
    const plan = api.savingPlan.findPlan.useQuery();

    if (plan && plan.data === 0) {
        router.push("/plan/create");
    }

    return (
        <>
            <Head>
                <title>Capital</title>
                <meta name="description" content="Capital"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                Hey
            </main>

        </>
    );
}
