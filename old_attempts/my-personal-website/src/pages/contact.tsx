import type { NextPage } from 'next';
import Head from 'next/head';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: NextPage = () => {
    // TODO: Replace with your actual contact details
    const email = "your.email@example.com";
    const linkedinUrl = "https://linkedin.com/in/your-profile";
    const location = "City, Country";

    return (
        <>
            <Head>
                <title>Contact Me | Your Name</title>
                <meta name="description" content="Get in touch with me. Let's build something amazing." />
            </Head>
            <section className="py-12">
                <h1 className="text-4xl font-bold text-center text-text-primary">Get In Touch</h1>
                <p className="mt-4 text-lg text-center text-text-secondary">I'm open to new opportunities. Let's talk!</p>
                <div className="max-w-lg p-8 mx-auto mt-12 space-y-6 rounded-lg bg-primary border border-border">
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="w-6 h-6 text-text-accent" />
                        <a href={`mailto:${email}`} className="text-lg text-text-secondary hover:text-text-accent">{email}</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaLinkedin className="w-6 h-6 text-text-accent" />
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-lg text-text-secondary hover:text-text-accent">
                            Connect on LinkedIn
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="w-6 h-6 text-text-accent" />
                        <span className="text-lg text-text-secondary">{location}</span>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Contact;