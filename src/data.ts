import { 
  Zap, 
  Settings2, 
  MessageSquare, 
  Users, 
  Database, 
  Cpu,
  Search,
  CheckCircle,
  TrendingUp,
  FileText,
  BookmarkCheck,
  Share2,
  FileSpreadsheet,
  Facebook,
  Sparkles,
  RefreshCw,
  FolderLock
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  // We can map react icons or use lucide icon string
  iconName: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  impact: string;
  category: string;
  primaryTool: string;
  timeSaved: string;
  isPopular?: boolean;
  imageUrl?: string;
  overview?: string;
  problem?: string;
  worksSteps?: string[];
  beforeStats?: string;
  afterStats?: string;
  techStackDetails?: string[];
}

export const services: Service[] = [
  {
    id: "service-1",
    title: "Workflow & AI-Powered Automations",
    description: "I design end-to-end automation systems that eliminate repetitive manual tasks.",
    iconName: "Zap"
  },
  {
    id: "service-2",
    title: "Process Optimization",
    description: "I improve workflows to increase speed, efficiency, and accuracy.",
    iconName: "Settings2"
  },
  {
    id: "service-3",
    title: "AI Agents & Chatbots",
    description: "I build intelligent assistants that handle automation, support, and task execution.",
    iconName: "MessageSquare"
  },
  {
    id: "service-4",
    title: "CRM & Marketing Automation",
    description: "I automate lead management, follow-ups, and marketing workflows.",
    iconName: "Users"
  },
  {
    id: "service-5",
    title: "Data Management",
    description: "I structure and automate business data for better decision-making.",
    iconName: "Database"
  },
  {
    id: "service-6",
    title: "API Integration",
    description: "I connect tools and systems using APIs, webhooks, and automation platforms.",
    iconName: "Cpu"
  }
];

export const processSteps: Step[] = [
  {
    number: "01",
    title: "Discovery Call",
    description: "Understand your workflow and goals."
  },
  {
    number: "02",
    title: "Solution Design",
    description: "Plan the best automation approach."
  },
  {
    number: "03",
    title: "Build & Test",
    description: "Develop and validate the system."
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description: "Deploy, monitor, and improve performance."
  }
];

export const projects: Project[] = [
  {
    title: "AI Content Repurposing Engine",
    impact: "Triggered when a file lands in Google Drive, this workflow generates AI transcriptions, writes platform-specific captions, and distributes posts to Facebook, LinkedIn, and Instagram automatically.",
    category: "Zapier",
    primaryTool: "Zapier",
    timeSaved: "25 hrs/week",
    imageUrl: "https://lh3.googleusercontent.com/d/16Muc8e8RQodJkt_I3BQiTPXl1Yq-YPPw",
    overview: "One upload generates and publishes content across all platforms automatically.",
    problem: "Creating content for multiple platforms took 6+ hours per video. The team was publishing less than they should because manual effort was the bottleneck, not ideas.",
    worksSteps: [
      "1 File uploaded to designated Google Drive folder",
      "2 AI transcription generated from audio/video content",
      "3 Platform-specific captions written by AI for each channel",
      "4 Content formatted to each platform's specs automatically",
      "5 Posts published to Facebook, LinkedIn, and Instagram simultaneously"
    ],
    beforeStats: "6 hours per video. Maximum 3 posts per week across all channels.",
    afterStats: "20-minute one-time setup. Now publishes 30+ pieces of content per month with zero effort.",
    techStackDetails: [
      "Zapier",
      "Google Drive",
      "AI by Zapier",
      "LinkedIn",
      "Facebook"
    ]
  },
  {
    title: "Automated Lead Enrichment",
    impact: "A Zapier workflow that enriches new contacts via Apollo, scores lead quality with AI, routes high-priority leads to Slack, and drafts a personalized follow-up — all before a human even opens their inbox.",
    category: "Zapier",
    primaryTool: "Zapier",
    timeSaved: "15 hrs/week",
    isPopular: true,
    imageUrl: "https://lh3.googleusercontent.com/d/1Pvb842fgLPNT_IM6uK7BBDshVdYH4Xl2",
    overview: "New leads qualified and enriched automatically in under 60 seconds.",
    problem: "Sales reps wasted 2 hours daily manually researching leads. By the time they reached out, the lead had gone cold or moved on to a competitor.",
    worksSteps: [
      "1 New lead enters CRM or form submission captured",
      "2 Apollo enriches contact and company data automatically",
      "3 AI scores lead quality 1–10 based on fit criteria",
      "4 High-priority leads routed to Slack instantly",
      "5 Personalized follow-up email drafted and sent within 60s"
    ],
    beforeStats: "2 hours of manual research per lead. 40% of leads never followed up due to volume.",
    afterStats: "Under 60 seconds per lead. 100% follow-up rate. Reps only speak to pre-qualified prospects.",
    techStackDetails: [
      "Zapier",
      "Apollo",
      "Google Sheets",
      "Gmail",
      "Slack"
    ]
  },
  {
    title: "Asana CRM Lead Engagement Pipeline",
    impact: "A Zapier automation watching Asana task status changes that fires customized email sequences per deal stage — follow-ups, quotes, approvals, and onboarding. The sales team only focuses on closing.",
    category: "Zapier",
    primaryTool: "Zapier",
    timeSaved: "12 hrs/week",
    imageUrl: "https://lh3.googleusercontent.com/d/1GwJj35As6wlromnGQw0CGE2FKGtPFxJz",
    overview: "Deal-stage changes triggered automated email sequences instantly.",
    problem: "Sales reps were forgetting to send critical follow-ups at deal stages. Deals were stalling because the right email wasn't sent at the right time.",
    worksSteps: [
      "1 Asana task status changes to a new deal stage",
      "2 Correct email sequence selected based on stage logic",
      "3 Personalized email drafted using deal and contact context",
      "4 Email sent at optimal timing with built-in delays",
      "5 Next trigger set up automatically for the following stage"
    ],
    beforeStats: "40% of follow-ups missed. Deals dying in the pipeline from missed touchpoints.",
    afterStats: "100% follow-up rate. Every deal stage has an automated, personalized touchpoint sequence.",
    techStackDetails: [
      "Zapier",
      "Asana",
      "Gmail",
      "Google Drive",
      "Delay & Filter by Zapier"
    ]
  },
  {
    title: "Simple Online Course Enrollment Automation",
    impact: "Creates course accounts, updates the CRM, sends customized login credentials, and configures student Slack channels automatically upon payment.",
    category: "Zapier",
    primaryTool: "ActiveCampaign",
    timeSaved: "18 hrs/week",
    imageUrl: "https://lh3.googleusercontent.com/d/1r2eH5E06opYfkiqhwMuSgQgrJFDutzV4",
    overview: "New students enrolled and onboarded automatically in minutes without manual admin work.",
    problem: "Online course businesses spent hours manually processing enrollments, transferring student information between platforms, and sending welcome emails one by one. Delays in enrollment often resulted in slower course access, data entry errors, and a poor experience for new students.",
    worksSteps: [
      "1 Student submits an enrollment form through Jotform",
      "2 Zapier automatically triggers the workflow",
      "3 Student information is sent to ClickFunnels",
      "4 Contact is created or updated and enrolled in the selected course",
      "5 Contact details are synced to ActiveCampaign",
      "6 Tags are automatically applied for organization and email marketing",
      "7 Gmail sends a personalized confirmation or welcome email instantly"
    ],
    beforeStats: "Student enrollments were handled manually, requiring admins to transfer information across multiple platforms and send emails individually. This created delays, repetitive work, and increased the risk of errors.",
    afterStats: "Students are enrolled automatically within minutes, receive instant access to their courses, and get a welcome email immediately. Admin work is reduced, contact organization improves, and email marketing becomes more efficient.",
    techStackDetails: [
      "Zapier",
      "Jotform",
      "ClickFunnels",
      "ActiveCampaign",
      "Gmail"
    ]
  },
  {
    title: "Gmail Attachment to Drive Sync with Automated Logs",
    impact: "A Make workflow that watches Gmail for attachments, uses Gemini AI to generate smart file names from content analysis, uploads to the correct Drive folder, logs to Sheets, and sends a summary email.",
    category: "Make.com",
    primaryTool: "Make.com",
    timeSaved: "10 hrs/week",
    isPopular: true,
    imageUrl: "https://lh3.googleusercontent.com/d/1QzsmnOQbS324BAFS4hNm6AHU7yo_DUHC",
    overview: "Every email attachment is automatically named, filed, and logged.",
    problem: "The team wasted hours weekly searching for misfiled documents buried in inboxes. Critical files were named 'Untitled-1.pdf' and impossible to find.",
    worksSteps: [
      "1 Email with attachment arrives in monitored Gmail inbox",
      "2 Gemini AI analyzes file content and determines context",
      "3 Smart descriptive filename generated automatically",
      "4 File uploaded to the correct Google Drive folder",
      "5 Row added to Google Sheets audit log + confirmation email sent"
    ],
    beforeStats: "15+ minutes weekly searching for misfiled documents. No audit trail. Files named 'untitled'.",
    afterStats: "Every file auto-named, filed instantly, and logged. Perfect audit trail. Search time eliminated.",
    techStackDetails: [
      "Make.com",
      "Gmail",
      "Gemini AI",
      "Google Drive",
      "Google Sheets"
    ]
  },
  {
    title: "Xero to Asana Transaction Export",
    impact: "A Make workflow that monitors Asana for completed finance tasks, calls the Xero API to export account transactions, routes through an iterator, aggregates data into a formatted CSV, uploads it back to Asana as an attachment, and clears the staging sheet.",
    category: "Make.com",
    primaryTool: "Make.com",
    timeSaved: "8 hrs/week",
    imageUrl: "https://lh3.googleusercontent.com/d/11LmMhnZGWp8XpWJ2_Hf6kLtN75nI9-1l",
    overview: "Asana task completions auto-export Xero transactions and attach the CSV instantly.",
    problem: "Finance teams manually exported CSVs from Xero and attached them to Asana tasks. It took 30+ minutes per export, created version confusion, and was frequently missed under deadline pressure.",
    worksSteps: [
      "1 Asana task marked complete triggers the Make workflow",
      "2 Make calls Xero API to pull account transaction data",
      "3 Iterator processes each transaction row individually",
      "4 Aggregator formats rows into a clean CSV structure",
      "5 CSV uploaded to Asana task + staging Google Sheet cleared"
    ],
    beforeStats: "30+ minutes per manual export. Files emailed around, version chaos, tasks missed under deadline.",
    afterStats: "Zero manual exports. CSV auto-attached to the correct Asana task the moment it's needed.",
    techStackDetails: [
      "Make",
      "Asana",
      "Xero API",
      "Google Sheets",
      "Iterator",
      "Router"
    ]
  },
  {
    title: "AI Job Scraper with Resume Optimizer",
    impact: "Slack-triggered workflow that scrapes job listings, optimizes resumes using AI structured output, and drafts personalized application emails.",
    category: "n8n",
    primaryTool: "n8n",
    timeSaved: "20 hrs/week",
    imageUrl: "https://lh3.googleusercontent.com/d/1GjVtNvXNsdmD9Qr2zIIQBsrxpJ6amPsg",
    overview: "Daily automated job hunting — scrapes, scores, and sends tailored resumes without manual effort.",
    problem: "Job seekers spend 4+ hours daily on manual searching, copy-pasting experience, and rewriting resumes for each application — producing generic results with low reply rates.",
    worksSteps: [
      "1 Daily schedule trigger fires the n8n pipeline",
      "2 Job boards scraped for fresh listings matching criteria",
      "3 OpenAI scores each role 1-10 against candidate profile",
      "4 Top-scoring roles selected automatically",
      "5 Tailored resume PDF generated and sent via Gmail with tracking log"
    ],
    beforeStats: "4+ hours daily of manual searching and resume rewriting. Generic applications with low callback rates.",
    afterStats: "10 minutes of automated daily processing. Every resume tailored per role. ATS-optimized every time.",
    techStackDetails: [
      "n8n",
      "Slack",
      "OpenAI",
      "Google Sheets",
      "Gmail",
      "HTTP Request",
      "Loop Over Items",
      "PDF Generation"
    ]
  },
  {
    title: "AI Agent for Facebook",
    impact: "Built an n8n AI agent workflow with webhook triggers, Google Docs integration, Gemini chat model, and memory for automated Facebook interactions.",
    category: "n8n",
    primaryTool: "n8n",
    timeSaved: "14 hrs/week",
    imageUrl: "https://lh3.googleusercontent.com/d/15X13rxYj3t7Sn3r__Q1MELMaL-p38oHb",
    overview: "Replied to 100% of leads instantly — 24/7, no staff needed.",
    problem: "Support teams work 8-hour shifts. Every after-hours message sits unanswered for hours. Competitors who reply first win the sale — this business was losing 60% of after-hours leads.",
    worksSteps: [
      "1 Facebook message received via Webhook",
      "2 AI detects lead intent and urgency level",
      "3 Gemini generates a personalized, on-brand reply",
      "4 Response sent in under 3 seconds",
      "5 Lead and conversation logged to CRM automatically"
    ],
    beforeStats: "2+ hour response time overnight. 60% of after-hours leads lost to faster competitors.",
    afterStats: "Instant replies 24/7. Zero missed leads. Support team now handles only complex escalations.",
    techStackDetails: [
      "n8n",
      "Gemini AI",
      "Facebook API",
      "Webhooks"
    ]
  },
  {
    title: "Automated YouTube Shorts & Reels Creator",
    impact: "Scheduled n8n workflow using Gemini AI for prompt generation, JWT authentication, video generation API, and automated publishing to YouTube and Facebook.",
    category: "n8n",
    primaryTool: "n8n",
    timeSaved: "30 hrs/week",
    isPopular: true,
    imageUrl: "https://lh3.googleusercontent.com/d/1PNfzacFrUgIkL4G0iWeT9RrnimL8U58P",
    overview: "Automated video production and publishing without any manual editing.",
    problem: "Short-form video requires daily publishing to grow. The creator couldn't sustain the editing and upload workload while also running their business.",
    worksSteps: [
      "1 Daily schedule triggers n8n pipeline automatically",
      "2 Gemini AI writes an optimized, trending video script",
      "3 Video assets assembled and captioned programmatically",
      "4 Branding and formatting applied consistently",
      "5 Published to YouTube with AI-generated title, description, and tags"
    ],
    beforeStats: "3 videos per week maximum. 6+ hours of editing effort per video.",
    afterStats: "Daily automated publishing. 30+ videos per month. Zero editing time after initial setup.",
    techStackDetails: [
      "n8n",
      "Gemini AI",
      "YouTube API",
      "Google Drive"
    ]
  },
  {
    title: "Basic RAG Demo",
    impact: "RAG-based AI agent using Supabase vector store, Google Drive file sync, and OpenRouter chat model for intelligent employee handbook Q&A.",
    category: "n8n",
    primaryTool: "n8n",
    timeSaved: "22 hrs/week",
    imageUrl: "https://lh3.googleusercontent.com/d/1ar_02ROQMLu71fqz_kf6-lrLX3ezIqv1",
    overview: "AI assistant answers questions grounded 100% in your own documents — zero hallucinations.",
    problem: "Teams waste hours answering the same questions or give wrong answers because they can't locate the right document fast enough. Onboarding new staff takes weeks because knowledge is scattered.",
    worksSteps: [
      "1 Chat message received by the n8n AI Agent",
      "2 Supabase Vector Store queried semantically for relevant content",
      "3 Most relevant document sections retrieved",
      "4 Gemini generates a grounded, cited response",
      "5 New files in Google Drive sync automatically to the knowledge base"
    ],
    beforeStats: "Hours spent searching docs. Wrong answers from outdated info. Knowledge siloed in people's heads.",
    afterStats: "Instant, accurate answers from verified documents. Zero hallucinations. Knowledge base updates itself.",
    techStackDetails: [
      "n8n",
      "Supabase Vector Store",
      "Google Gemini Chat",
      "Google Drive",
      "Agent Platform API",
      "Vertex Embeddings"
    ]
  }
];

export const techStack: string[] = [
  "n8n", "Zapier", "Make.com", "Power Automate", "GoHighLevel", "ClickFunnels", 
  "Jotform", "Youform", "Google Forms", "OpenAI", "Claude AI", "Google Gemini", 
  "Grok", "Perplexity AI", "OpenRouter", "Supabase", "PostgreSQL", "Airtable", 
  "Google Sheets", "Notion", "Asana", "API Integration", "HTTP Requests", 
  "Webhooks", "RapidAPI", "Docker", "Cloudflare", "Vercel", "Lovable", "Slack", 
  "ActiveCampaign"
];

export const contactDetails = {
  name: "Mark",
  role: "AI Automation Specialist",
  location: "Cavite, Philippines",
  whatsapp: "+63 938 723 2144",
  email: "va.marklesterdiaz@gmail.com",
  linkedin: "https://www.linkedin.com/in/marklesterdiaz/",
  onlinejobs: "https://v2.onlinejobs.ph/jobseekers/info/823656",
  calendlyPlaceholder: "https://calendly.com/diazmlester/30-minute-discovery-call-with-mark", // Booking link
};
