import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    // TODO: Replace with your actual GitHub and LinkedIn URLs
    const githubUrl = "https://github.com/your-username";
    const linkedinUrl = "https://linkedin.com/in/your-profile";

    return (
        <footer className="w-full p-4 mt-16 border-t border-border">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
                <p className="text-sm text-text-secondary">
                    {/* TODO: Replace with your name */}
                    © {currentYear} Your Name
                </p>
                <div className="flex items-center space-x-4">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-text-secondary hover:text-text-accent">
                        <FaGithub size={24} />
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-text-secondary hover:text-text-accent">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;