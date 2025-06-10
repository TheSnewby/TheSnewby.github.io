import type { NextPage } from 'next';
import Head from 'next/head';
import { FaDownload } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Dynamically import the ResumeViewer with Server-Side Rendering (SSR) turned off
const ResumeViewer = dynamic(() => import('../components/ResumeViewer'), {
  ssr: false,
});

const Resume: NextPage = () => {
    // The path to your resume in the /public folder
    const resumeUrl = "/stephen-newby-resume.pdf";

    return (
        <>
            <Head>
                <title>Resume | Your Name</title>
                <meta name="description" content="View and download my professional resume." />
            </Head>

            <section className="py-12 text-center">
                <h1 className="text-4xl font-bold text-text-primary">My Resume</h1>
                <p className="mt-4 text-lg text-text-secondary">
                    View my experience below, or download a copy for your records.
                </p>

                <a
                    href={resumeUrl}
                    download="YourName_Resume.pdf"
                    className="inline-flex items-center px-6 py-3 mt-8 font-semibold transition-transform duration-200 transform border-2 rounded-lg bg-primary border-text-accent text-text-accent hover:bg-text-accent hover:text-background hover:-translate-y-1"
                >
                    <FaDownload className="mr-2" />
                    Download Resume
                </a>

                {/* The embedded resume will appear here */}
                <div className="max-w-4xl mx-auto">
                  <ResumeViewer fileUrl={resumeUrl} />
                </div>

                <div className="mt-12 text-left bg-primary p-8 rounded-lg border border-border max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-text-primary mb-4">Why Hire Me?</h2>
                    <ul className="space-y-3 list-disc list-inside text-text-secondary">
                        <li>Proven track record of delivering high-quality, scalable web applications.</li>
                        <li>Strong collaborator with excellent communication skills, thriving in agile teams.</li>
                        <li>Passionate about continuous learning and staying current with industry trends.</li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Resume;