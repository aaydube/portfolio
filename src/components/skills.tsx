"use client";
import { motion, useAnimation, AnimatePresence, Variant } from "framer-motion";
import { DATA } from "./resume";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython} from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTypescript, SiExpress, SiNextdotjs } from "react-icons/si";
import { useEffect, useState, useMemo, FC, ReactNode } from "react";

type SkillName = string;

interface SkillIconsMap {
  [key: SkillName]: ReactNode;
}

interface SkillBadgeProps {
  skill: SkillName;
}
const badgeVariants = {
  hover: { 
    scale: 1.15,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    y: -5
  },
  tap: { 
    scale: 0.9,
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
  },
  initial: { 
    opacity: 0, 
    scale: 0.8 
  },
  animate: { 
    opacity: 1, 
    scale: 1 
  }
};

const tooltipVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
};

const reactVariants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: 360, 
    transition: { 
      duration: 8, 
      repeat: Infinity, 
      ease: "linear" 
    } 
  }
};

const skillIcons: SkillIconsMap = {
  HTML: (
    <FaHtml5 className="w-8 h-8 text-gray-800 dark:text-gray-100 group-hover:text-orange-500 transition-colors duration-300" />
  ),
  CSS: (
    <FaCss3Alt className="w-8 h-8 text-gray-800 dark:text-gray-100 group-hover:text-blue-500 transition-colors duration-300" />
  ),
  JavaScript: (
    <FaJs className="w-8 h-8 text-gray-800 dark:text-gray-100 group-hover:text-yellow-400 transition-colors duration-300" />
  ),
  React: (
    <FaReact className="w-8 h-8 text-gray-800 dark:text-gray-100 group-hover:text-blue-400 transition-colors duration-300" />
  ),
  TypeScript: (
    <SiTypescript className="w-8 h-8 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-300" />
  ),
  "Next.js": (
    <SiNextdotjs className="w-8 h-8 text-gray-800 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
  ),
  "Node.js": (
    <FaNodeJs className="w-8 h-8 text-gray-800 dark:text-gray-100 group-hover:text-green-500 transition-colors duration-300" />
  ),
  "Express.js": (
    <SiExpress className="w-8 h-8 text-gray-800 dark:text-gray-100 group-hover:text-gray-600 transition-colors duration-300" />
  ),
  MongoDB: (
    <SiMongodb className="w-8 h-8 text-gray-800 dark:text-gray-100 group-hover:text-green-500 transition-colors duration-300" />
  ),
  Postgres: (
    <SiPostgresql className="w-8 h-8 text-gray-800 dark:text-gray-100 group-hover:text-blue-700 transition-colors duration-300" />
  ),
  Python: (
   <div className="relative w-8 h-8 text-gray-800 dark:text-gray-100 group">
  <FaPython className="absolute inset-0 w-full h-full group-hover:text-[#FFD43B]" />
  <FaPython
    className="absolute inset-0 w-full h-full group-hover:text-[#3776AB]"
    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
  />
</div>
  ),
};

const SkillBadge: FC<SkillBadgeProps> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  

  const icon = useMemo(() => skillIcons[skill] || null, [skill]);
  
  if (!icon) return null;
  
  return (
    <motion.div
      className="relative group flex flex-col items-center justify-center rounded-xl  cursor-pointer hover:shadow-xl transition-shadow duration-300"
      variants={badgeVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.8
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {skill === "React" ? (
        <motion.div
          className="relative z-10"
          variants={reactVariants}
          initial="initial"
          animate={isHovered ? "animate" : "initial"}
        >
          {icon}
        </motion.div>
      ) : (
        <motion.div 
          className="relative z-10"
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      )}
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-full mt-2 px-2 py-1 text-white text-xs rounded bg-black"
            variants={tooltipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            {skill}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SkillsSection: FC = () => {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  

  const startAnimation = useMemo(() => async () => {
    if (!hasAnimated) {
      await controls.start((i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { 
          delay: i * 0.1,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 20
        }
      }));
      setHasAnimated(true);
    }
  }, [controls, hasAnimated]);
  
  useEffect(() => {
    startAnimation();
    
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const section = document.getElementById('skills');
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          
          if (isVisible && !hasAnimated) {
            startAnimation();
          } else if (!isVisible && hasAnimated) {
            controls.start((i: number) => ({
              opacity: 0,
              y: 20,
              scale: 0.8,
              transition: { duration: 0.3 }
            }));
            setHasAnimated(false);
          }
        }
      }, 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [controls, hasAnimated, startAnimation]);

  return (
    <section id="skills" className="space-y-6">
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-5 place-items-center">
        {DATA.skills.map((skill, index) => (
          <motion.div
            key={skill}
            custom={index}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={controls}
          >
            <SkillBadge skill={skill} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;