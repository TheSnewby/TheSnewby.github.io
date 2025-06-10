import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';
import { PortfolioProject } from '../data/portfolioData';

type PortfolioCardProps = Omit<PortfolioProject, 'id'>;

const PortfolioCard = ({ title, description, techStack, link }: PortfolioCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-6 transition-shadow duration-300 border rounded-lg shadow-md bg-primary border-border"
        >
            <h3 className="mb-2 text-xl font-bold text-text-primary">{title}</h3>
            <p className="mb-4 text-text-secondary">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs font-semibold rounded-full bg-background text-text-accent">
                        {tech}
                    </span>
                ))}
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold transition-colors duration-200 text-text-accent hover:text-text-primary">
                View Project <FaLink className="ml-2" />
            </a>
        </motion.div>
    );
};

export default PortfolioCard;