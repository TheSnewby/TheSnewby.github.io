import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    // TODO: Replace with your name and details
    const name = "Stephen Newby";
    const professionalTitle = "Software Engineer";

    return (
        <>
            <Head>
                <title>{name} | {professionalTitle}</title>
                <meta name="description" content={`The personal portfolio website for ${name}.`} />
            </Head>
            <section className="flex items-center justify-center h-full min-h-[60vh] text-center">
                <div>
                    <h1 className="text-5xl font-bold md:text-6xl text-text-primary">
                        Hi, I'm <span className="text-text-accent">{name}</span>.
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-text-secondary">{professionalTitle}</p>
                    <p className="max-w-2xl mx-auto mt-6 text-lg text-text-secondary">
                        {/* TODO: Write a compelling bio about yourself */}
                        Welcome to my digital space! I specialize in creating beautiful, functional, and accessible web experiences. I'm passionate about clean code and intuitive design. Explore my work and let's connect!
                    </p>
                </div>
            </section>
        </>
    );
}
export default Home;