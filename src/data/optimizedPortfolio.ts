// Optimized portfolio data with local assets and CDN URLs
import portfolioWeb1 from "@/assets/portfolio-web1.jpg";
import portfolioWeb2 from "@/assets/portfolio-web2.jpg";
import portfolioApp1 from "@/assets/portfolio-app1.jpg";
import portfolioBranding1 from "@/assets/portfolio-branding1.jpg";
import portfolioSocial1 from "@/assets/portfolio-social1.jpg";
import chatImage from "@/assets/chat.png";

// Use Unsplash with specific image IDs for consistent, fast loading
const UNSPLASH_BASE = "https://images.unsplash.com";

export const portfolioItems = [
  {
    id: 1,
    media: `${UNSPLASH_BASE}/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&crop=entropy`,
    mediaType: "image",
    title: "Corporate Website Design",
    category: "Website Development",
    description: "Modern, responsive corporate website with advanced features and seamless user experience.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://example.com"
  },
  {
    id: 2,
    media: `${UNSPLASH_BASE}/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=entropy`,
    mediaType: "image",
    title: "Interactive Website Demo",
    category: "Website Development",
    description: "Dynamic website with interactive elements and smooth animations.",
    technologies: ["React", "GSAP", "CSS3"],
    link: "https://example.com"
  },
  {
    id: 3,
    media: `${UNSPLASH_BASE}/photo-1512941937669-90a1b58e7e9c?w=400&h=500&fit=crop&crop=entropy`,
    mediaType: "image",
    title: "Mobile Website Preview",
    category: "Website Development",
    description: "Vertical mobile-first website design showcase.",
    technologies: ["React", "Tailwind", "PWA"],
    link: "https://example.com"
  },
  {
    id: 4,
    media: portfolioWeb1,
    mediaType: "image",
    title: "E-commerce Platform",
    category: "Website Development",
    description: "Full-featured e-commerce solution with payment integration.",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    link: "https://example.com"
  },
  {
    id: 5,
    media: portfolioApp1,
    mediaType: "image",
    title: "Mobile App Development",
    category: "App Development",
    description: "Cross-platform mobile application with intuitive interface and robust backend.",
    technologies: ["React Native", "Firebase"],
    link: "https://example.com"
  },
  {
    id: 6,
    media: `${UNSPLASH_BASE}/photo-1551650975-87deedd944c3?w=400&h=350&fit=crop&crop=entropy`,
    mediaType: "image",
    title: "Fitness Tracking App",
    category: "App Development",
    description: "Comprehensive fitness app with workout tracking and social features.",
    technologies: ["Flutter", "Dart", "SQLite"],
    link: "https://example.com"
  },
  {
    id: 7,
    media: portfolioBranding1,
    mediaType: "image",
    title: "Brand Identity Design",
    category: "Branding",
    description: "Complete brand identity package including logo, color palette, and brand guidelines.",
    technologies: ["Adobe Illustrator", "Photoshop"],
    link: "https://example.com"
  },
  {
    id: 8,
    media: `${UNSPLASH_BASE}/photo-1558655146-364adaf1fcc9?w=400&h=400&fit=crop&crop=entropy`,
    mediaType: "image",
    title: "Logo Design Collection",
    category: "Branding",
    description: "Modern logo designs for various industries and business types.",
    technologies: ["Adobe Illustrator", "Sketch"],
    link: "https://example.com"
  },
  {
    id: 9,
    media: portfolioSocial1,
    mediaType: "image",
    title: "Social Media Campaign",
    category: "Social Media",
    description: "Engaging social media content strategy that increased engagement by 250%.",
    technologies: ["Facebook Ads", "Instagram", "Analytics"],
    link: "https://example.com"
  },
  {
    id: 10,
    media: `${UNSPLASH_BASE}/photo-1611224923853-80b023f02d71?w=400&h=500&fit=crop&crop=entropy`,
    mediaType: "image",
    title: "Content Strategy",
    category: "Social Media",
    description: "Comprehensive content strategy for B2B company with measurable results.",
    technologies: ["Content Planning", "SEO", "Analytics"],
    link: "https://example.com"
  },
  {
    id: 11,
    media: chatImage,
    mediaType: "image",
    title: "AI Chatbot Integration",
    category: "AI Solutions",
    description: "Custom AI chatbot with natural language processing for automated customer support.",
    technologies: ["OpenAI", "Node.js", "React"],
    link: "https://example.com"
  },
  {
    id: 12,
    media: chatImage,
    mediaType: "image",
    title: "Business Automation System",
    category: "AI Solutions",
    description: "AI-powered business process automation to streamline operations and reduce costs.",
    technologies: ["Python", "TensorFlow", "API Integration"],
    link: "https://example.com"
  }
];