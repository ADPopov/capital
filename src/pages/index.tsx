import Head from "next/head";
import FirstSteps from "~/components/FirstSteps";
export type QuestionsType = {
    desiredAmount: string,
    dailyIncrease: string,
    startAmount: string
}

export default function Home() {

    return (
        <>
            <Head>
                <title>Capital</title>
                <meta name="description" content="Capital"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <FirstSteps />
            </main>

        </>
    );
}
