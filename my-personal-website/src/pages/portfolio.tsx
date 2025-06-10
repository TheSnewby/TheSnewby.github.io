import type { NextPage } from 'next';
import Head from 'next/head';
import PortfolioCard from '../components/PortfolioCard';
import { portfolioData } from '../data/portfolioData';

const Portfolio: NextPage = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Your Name</title>
                <meta name="description" content="A collection of my best work and projects." />
            </Head>
            <section className="py-12">
                <h1 className="text-4xl font-bold text-center text-text-primary">My Portfolio</h1>
                <p className="mt-4 text-lg text-center text-text-secondary">A selection of projects I'm proud of.</p>
                <div className="grid gap-8 mt-12 md:grid-cols-2">
                    {portfolioData.map((project) => (
                        <PortfolioCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            techStack={project.techStack}
                            link={project.link}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
export default Portfolio;