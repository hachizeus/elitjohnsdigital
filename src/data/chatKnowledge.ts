export const agencyKnowledge = {
  company: {
    name: "Elitjohns Digital Agency",
    founder: "Victor Gathecha",
    email: "elitjohnsdigital@gmail.com",
    location: "Nairobi, Kenya",
    mission: "To empower businesses of all sizes with professional, affordable digital solutions that drive growth, enhance visibility, and create lasting impact in the digital landscape.",
    vision: "To become Kenya's most trusted digital agency, known for transforming businesses through innovation, creativity, and unwavering commitment to client success."
  },
  
  services: {
    "web development": {
      description: "Professional, mobile-optimized websites built to convert visitors into customers",
      packages: [
        { name: "Landing Page", price: "KES 18,000 - 25,000", features: ["Professional custom design", "Mobile optimization", "Basic SEO", "Contact forms", "1-month warranty"] },
        { name: "Dynamic Website", price: "KES 30,000 - 60,000", features: ["Multiple pages", "Advanced SEO", "CMS", "2-month warranty"] },
        { name: "E-commerce Website", price: "From KES 60,000+", features: ["Product catalog", "Payment integration", "Order management", "3-month warranty"] }
      ]
    },
    "app development": {
      description: "Custom mobile applications for Android and iOS",
      packages: [
        { name: "Basic App", price: "KES 80,000 - 150,000", features: ["Native/cross-platform development", "API integrations", "User authentication", "App store submission"] },
        { name: "Advanced App", price: "KES 200,000 - 400,000+", features: ["Advanced backend", "Real-time features", "Payment integration", "Admin dashboard"] }
      ]
    },
    "branding": {
      description: "Create a memorable brand identity that stands out",
      packages: [
        { name: "Logo Design", price: "KES 10,000", features: ["3 unique concepts", "2 revision rounds", "Multiple file formats", "Mockups"] },
        { name: "Brand Kit", price: "KES 25,000", features: ["Logo variations", "Color palette", "Typography guidelines", "Usage guidelines"] },
        { name: "Social Media Kit", price: "KES 15,000", features: ["Profile images", "Post templates", "Story templates", "Highlight covers"] }
      ]
    },
    "social media": {
      description: "Professional social media management to grow your online presence",
      packages: [
        { name: "Starter Package", price: "KES 20,000/month", features: ["16 posts/month", "4 videos", "Light engagement", "Monthly report"] },
        { name: "Growth Package", price: "KES 35,000/month", features: ["16 posts/month", "8 videos", "1 hour/day engagement", "1 boosted post"] },
        { name: "Premium Package", price: "KES 55,000/month", features: ["24 posts/month", "12 videos", "Full management", "Paid ads included"] }
      ]
    },
    "seo": {
      description: "Improve your search rankings and drive organic traffic",
      price: "KES 25,000/month",
      features: ["Site audit", "Keyword research", "On-page optimization", "Content recommendations", "Monthly reporting"]
    },
    "ai solutions": {
      description: "AI chatbots, automation, and intelligent business solutions",
      price: "Setup: KES 25,000 - 50,000 | KES 3,000/month",
      features: ["Custom chatbot design", "Natural language processing", "Website integration", "Analytics"]
    }
  },

  stats: {
    projects: "50+",
    clients: "40+",
    satisfaction: "99%",
    experience: "5+ years"
  },

  contact: {
    email: "elitjohnsdigital@gmail.com",
    hours: "Monday-Friday: 9AM-6PM, Saturday: 10AM-4PM, Sunday: Closed",
    response: "We respond within 24 hours"
  }
};

export const getResponse = (message: string): string => {
  const msg = message.toLowerCase();
  
  // Greetings
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    return "Hello! I'm the Elitjohns Digital Assistant. I can help you with information about our services, pricing, or connect you with our team. What would you like to know?";
  }
  
  // Services
  if (msg.includes('service') || msg.includes('what do you do')) {
    return "We offer comprehensive digital solutions: Web Development (from KES 18,000), App Development (from KES 80,000), Branding (from KES 10,000), Social Media Management (from KES 20,000/month), SEO Services (KES 25,000/month), and AI Solutions (from KES 25,000). Which service interests you?";
  }
  
  // Website development
  if (msg.includes('website') || msg.includes('web development')) {
    return "Our website packages: Landing Page (KES 18,000-25,000), Dynamic Website (KES 30,000-60,000), E-commerce (KES 60,000+). All include mobile optimization, SEO, and warranties. Need more details on any package?";
  }
  
  // App development
  if (msg.includes('app') || msg.includes('mobile')) {
    return "We develop custom mobile apps: Basic App (KES 80,000-150,000) includes native/cross-platform development and app store submission. Advanced App (KES 200,000+) includes real-time features and payment integration. What type of app are you considering?";
  }
  
  // Branding
  if (msg.includes('brand') || msg.includes('logo')) {
    return "Our branding services: Logo Design (KES 10,000), Complete Brand Kit (KES 25,000), Social Media Kit (KES 15,000). All include multiple revisions and file formats. Looking to build your brand identity?";
  }
  
  // Social media
  if (msg.includes('social media') || msg.includes('social')) {
    return "Social Media Management packages: Starter (KES 20,000/month), Growth (KES 35,000/month), Premium (KES 55,000/month). Includes content creation, engagement, and reporting. Which package fits your needs?";
  }
  
  // Pricing
  if (msg.includes('price') || msg.includes('cost') || msg.includes('quote')) {
    return "Our pricing is transparent and affordable. Websites start from KES 18,000, Apps from KES 80,000, Branding from KES 10,000. We offer payment plans and free consultations. Would you like a detailed quote for a specific service?";
  }
  
  // Contact
  if (msg.includes('contact') || msg.includes('reach') || msg.includes('call')) {
    return `You can reach us at elitjohnsdigital@gmail.com. We're available Monday-Friday 9AM-6PM, Saturday 10AM-4PM. We respond within 24 hours. Would you like me to connect you with our team?`;
  }
  
  // About company
  if (msg.includes('about') || msg.includes('company') || msg.includes('who are you')) {
    return "Elitjohns Digital Agency was founded by Victor Gathecha in Nairobi, Kenya. We've completed 50+ projects with 99% client satisfaction. Our mission is to empower businesses with affordable, professional digital solutions. Want to know more about our story?";
  }
  
  // Timeline
  if (msg.includes('time') || msg.includes('how long') || msg.includes('duration')) {
    return "Project timelines: Landing pages (1-2 weeks), Dynamic websites (2-4 weeks), E-commerce sites (4-8 weeks), Mobile apps (6-12 weeks). We provide detailed timelines during consultation. What project are you planning?";
  }
  
  // Payment
  if (msg.includes('payment') || msg.includes('pay')) {
    return "We offer flexible payment plans! Typically 50% upfront, 50% on completion. We accept M-Pesa, bank transfers, and can discuss custom payment schedules. All projects include warranties and support.";
  }
  
  // Support
  if (msg.includes('support') || msg.includes('help') || msg.includes('maintenance')) {
    return "We provide 24/7 support, training, and maintenance packages. All projects include bug-fix warranties (1-3 months depending on service). Ongoing maintenance starts from KES 2,000/month. Need support for an existing project?";
  }
  
  // Default response
  return "I'd be happy to help! I can provide information about our services (websites, apps, branding, social media, SEO, AI), pricing, timelines, or connect you with our team. You can also email us directly at elitjohnsdigital@gmail.com. What specific information do you need?";
};