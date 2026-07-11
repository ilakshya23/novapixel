export type TeamMember = {
  name: string;
  role: string;
  avatar: string;
  bio: string;
};

export type WorkItem = {
  title: string;
  desc: string;
  tag: string;
};

export type Service = {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  features: string[];
  color: string;
  accent: "cyan" | "violet";
  team: TeamMember[];
  work: WorkItem[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    icon: "🌐",
    title: "Website Development",
    desc: "Modern, fast, and visually stunning websites built with the latest technologies — tailored to your brand and optimized for conversions.",
    features: ["Custom Design", "React / Next.js", "SEO Optimization", "Mobile Responsive", "CMS Integration", "Performance Tuning"],
    color: "from-cyan/20 to-transparent",
    accent: "cyan",
    team: [
      { name: "Liam Carter", role: "Full-Stack Web Developer", avatar: "LC", bio: "Builds fast, animated websites with Next.js and React for creators and businesses." },
      { name: "Sam Pixel", role: "Creative Director & Designer", avatar: "SP", bio: "Graphic designer and brand strategist who's helped 50+ creators build their visual identity." },
    ],
    work: [
      { title: "NovaPixel Studios Site", desc: "This very website — built fully custom with Next.js and Framer Motion.", tag: "Next.js" },
      { title: "ClutchGG Landing Page", desc: "High-conversion landing page for an esports org's sponsorship campaign.", tag: "Conversion" },
      { title: "ServerHub Dashboard", desc: "Client portal and dashboard for a Minecraft hosting brand.", tag: "Web App" },
    ],
  },
  {
    slug: "minecraft-hosting",
    icon: "☁️",
    title: "Minecraft Hosting",
    desc: "Reliable, low-latency Minecraft hosting with DDoS protection, automatic backups, and easy panel management.",
    features: ["DDoS Protection", "Auto Backups", "Low Latency Nodes", "Control Panel", "1-Click Modpack Install", "24/7 Uptime"],
    color: "from-violet/20 to-transparent",
    accent: "violet",
    team: [
      { name: "Diego Ramirez", role: "Server Operations Lead", avatar: "DR", bio: "Oversees hosting infrastructure, uptime monitoring, and DDoS mitigation." },
      { name: "Noah Becker", role: "Network & Security Engineer", avatar: "NB", bio: "Hardens hosting nodes against attacks and keeps latency low for players worldwide." },
    ],
    work: [
      { title: "PixelCraft Network Hosting", desc: "Migrated a 35k-member network to dedicated low-latency nodes with zero downtime.", tag: "Zero Downtime" },
      { title: "Modpack Hub", desc: "1-click modpack hosting solution serving 40+ modpacks to creators.", tag: "1-Click Install" },
      { title: "Frostbite SMP Backups", desc: "Automated hourly backup and disaster recovery setup.", tag: "Auto Backups" },
    ],
  },
  {
    slug: "video-editing",
    icon: "🎬",
    title: "Video Editing",
    desc: "Professional video production for YouTube, social media, and trailers. Cinematic storytelling that keeps viewers watching.",
    features: ["YouTube Videos", "Server Trailers", "Motion Graphics", "Color Grading", "Sound Design", "Social Media Cuts"],
    color: "from-cyan/20 to-transparent",
    accent: "cyan",
    team: [
      { name: "Riley Chen", role: "Video Editor & Motion Designer", avatar: "RC", bio: "Cinematic editor whose work has racked up millions of combined views across YouTube and TikTok." },
      { name: "Ella Brooks", role: "Sound & Color Specialist", avatar: "EB", bio: "Handles sound design and color grading to give every edit a polished finish." },
    ],
    work: [
      { title: "Frostbite SMP Trailer", desc: "Cinematic server trailer that drove a 4x spike in new player signups.", tag: "4x Signups" },
      { title: "ClutchGG Highlight Reel", desc: "Monthly highlight series for an esports YouTube channel.", tag: "Monthly Series" },
      { title: "Brand Launch Short", desc: "30-second vertical ad cut for a creator's product launch.", tag: "Social Cut" },
    ],
  },
  {
    slug: "brand-advertisement",
    icon: "📣",
    title: "Brand Advertisement",
    desc: "Strategic campaigns across social media platforms to grow your audience, increase engagement, and strengthen your brand identity.",
    features: ["Social Media Strategy", "Ad Campaigns", "Content Calendar", "Analytics Reports", "Influencer Outreach", "Brand Positioning"],
    color: "from-violet/20 to-transparent",
    accent: "violet",
    team: [
      { name: "Sam Pixel", role: "Creative Director & Designer", avatar: "SP", bio: "Leads brand strategy and visual identity for creators and server brands." },
      { name: "Maya Torres", role: "Growth & Outreach Lead", avatar: "MT", bio: "Plans content calendars and influencer outreach to grow brand reach." },
    ],
    work: [
      { title: "ClutchGG Rebrand", desc: "Full brand campaign that grew social following by 60% in 3 months.", tag: "+60% Growth" },
      { title: "PixelCraft Ad Push", desc: "Cross-platform ad campaign that drove a record server population.", tag: "Cross-Platform" },
      { title: "Creator Spotlight Series", desc: "Influencer outreach campaign connecting 10+ creators to a brand launch.", tag: "10+ Creators" },
    ],
  },
  {
    slug: "thumbnail-design",
    icon: "🖼️",
    title: "Thumbnail Design",
    desc: "Click-worthy, platform-optimized thumbnails that dramatically increase your YouTube CTR and make your content stand out.",
    features: ["YouTube Thumbnails", "A/B Testing Variants", "Brand Consistency", "Fast Turnaround", "Revisions Included", "File Formats Provided"],
    color: "from-cyan/20 to-transparent",
    accent: "cyan",
    team: [
      { name: "Sam Pixel", role: "Creative Director & Designer", avatar: "SP", bio: "Designs high-CTR thumbnails with consistent, recognizable branding." },
      { name: "Ella Brooks", role: "Graphic Designer", avatar: "EB", bio: "Fast-turnaround thumbnail artist specializing in A/B test variants." },
    ],
    work: [
      { title: "GamerTV Thumbnail Pack", desc: "Set of 20 thumbnails that lifted average CTR from 4% to 9%.", tag: "+125% CTR" },
      { title: "StormForge Series Art", desc: "Consistent thumbnail branding across a 40-episode series.", tag: "Series Branding" },
      { title: "Weekly Upload Pack", desc: "Ongoing weekly thumbnail design for a 200k-subscriber channel.", tag: "200k Subs" },
    ],
  },
  {
    slug: "logo-design",
    icon: "✏️",
    title: "Logo Design",
    desc: "Distinctive, memorable logos crafted to capture your brand essence. Every logo comes in multiple formats ready for any platform.",
    features: ["Concept Development", "Multiple Revisions", "Vector Files (SVG/AI)", "PNG & PDF Export", "Brand Guidelines", "Full Ownership"],
    color: "from-violet/20 to-transparent",
    accent: "violet",
    team: [
      { name: "Sam Pixel", role: "Creative Director & Designer", avatar: "SP", bio: "Crafts distinctive logo identities backed by full brand guideline documents." },
      { name: "Ella Brooks", role: "Brand Designer", avatar: "EB", bio: "Designs logo variants and brand kits ready for any platform." },
    ],
    work: [
      { title: "PixelCraft Network Logo", desc: "Full brand identity and logo suite for a 35k-member Minecraft network.", tag: "Brand Suite" },
      { title: "StormForge Esports Mark", desc: "Esports-ready logo with animated and static variants.", tag: "Animated Logo" },
      { title: "ClutchGG Wordmark", desc: "Modern wordmark and icon system for a content brand relaunch.", tag: "Rebrand" },
    ],
  },
];
