import React, { useState } from 'react';
import { 
  ShieldCheck, Zap, Layers, Smartphone, ArrowRight, Copy, MessageSquare, 
  Moon, Sun, CheckCircle2, ChevronDown, ChevronUp, ExternalLink, Star, 
  Terminal, Sparkles, Cpu, Activity, Check, Code, Lock, Server, FileCode,
  Layout, Database, Cloud, Cog, ArrowUp, ArrowLeft, CheckCircle, Search, 
  Mail, Clock, Video, Send, Calendar, Calculator, FileCheck, Palette, Filter,
  Share2, ShieldAlert, Key, Globe, Gauge, CheckSquare
} from 'lucide-react';

// Realistic Official WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className = "w-5 h-5 fill-white" }) => (
  <svg viewBox="0 0 448 512" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

// Official GitHub SVG Icon Component
const GithubIcon = ({ className = "w-4 h-4 fill-currentColor" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [detailItem, setDetailItem] = useState(null);

  // Stack Manifest Advisor State
  const [advisorKey, setAdvisorKey] = useState('school');

  // ROI Paperwork Calculator State
  const [staffCount, setStaffCount] = useState(15);
  const [weeklyHours, setWeeklyHours] = useState(18);

  // Project Cost & Timeline Estimator State
  const [platform, setPlatform] = useState('web');
  const [complexity, setComplexity] = useState('standard');
  const [copiedEstimate, setCopiedEstimate] = useState(false);

  // Universal RFP Scope Builder State
  const [rfpCategory, setRfpCategory] = useState('all');
  const [selectedScopes, setSelectedScopes] = useState(['web_spa', 'jwt_auth', 'wa_auto', 'dark_mode']);
  const [scopeCopied, setScopeCopied] = useState(false);

  // Consultation Scheduler State
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [scheduleStatus, setScheduleStatus] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);

  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactRequirement, setContactRequirement] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic Math Calculations
  const baseRate = platform === 'web' ? 24000 : platform === 'mobile' ? 38000 : 56000;
  const compMultiplier = complexity === 'standard' ? 1.0 : complexity === 'advanced' ? 1.45 : 1.85;
  const estimatedCost = Math.round(baseRate * compMultiplier);
  const timeline = platform === 'web' ? '12 - 16 Days' : platform === 'mobile' ? '18 - 24 Days' : '4 - 6 Weeks';

  const reclaimedHours = Math.round(staffCount * weeklyHours * 4 * 0.65);
  const monthlySavings = reclaimedHours * 160;

  // 1. TECHNOLOGY ECOSYSTEM & STACK (WITH DEEP ARCHITECTURE DATA)
  const techStackData = [
    { 
      id: "tech-react",
      name: "React.js", 
      icon: Code, 
      color: "text-[#00f2fe]",
      badge: "Frontend Framework",
      title: "React.js Component Architecture",
      subtitle: "High-Performance Virtual DOM & Stateful Client Orchestration",
      overview: "React 19 powering sub-millisecond client state management, modular components, and fluid reactive UI rendering without heavy external bundles.",
      keyStrengths: [
        "Concurrent Rendering engine eliminating UI thread locks",
        "Context API and Reducer architectures for complex ERP state handling",
        "Zero-latency client-side routing with sub-second page transitions",
        "Optimized asset packaging with Vite build pipelines"
      ],
      codeSnippet: `// Example Reactive State Container
export const useERPState = () => {
  const [metrics, dispatch] = useReducer(erpReducer, initialData);
  useEffect(() => {
    prefetchEdgeCache('/api/v1/students');
  }, []);
  return { metrics, dispatch };
};`,
      slaBenchmark: "99.9% Render Fidelity // FCP < 0.4s"
    },
    { 
      id: "tech-nodejs",
      name: "Node.js", 
      icon: Server, 
      color: "text-emerald-400",
      badge: "Backend Runtime",
      title: "Node.js Non-Blocking Serverless Services",
      subtitle: "Asynchronous High-Throughput REST APIs & Microservices",
      overview: "Event-driven asynchronous backend services engineered on V8 engine, handling high concurrent institutional requests with negligible RAM overhead.",
      keyStrengths: [
        "Stateless Express / Node microservices with automatic vertical scaling",
        "Sub-15ms execution time per authenticated API endpoint",
        "Native streaming buffers for fast PDF report card dispatches",
        "Hardened CORS headers, rate-limiting guards, and helmet protections"
      ],
      codeSnippet: `// Express Stateless Middleware Hook
app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, max: 500 }));
app.use('/auth', verifyStatelessJWT);
app.get('/metrics', edgeCacheHeaders(300), generateAggregatedKPI);`,
      slaBenchmark: "Sub-15ms Edge Route Execution"
    },
    { 
      id: "tech-python",
      name: "Python", 
      icon: Terminal, 
      color: "text-amber-400",
      badge: "Automation & Data",
      title: "Python Data Processing & Automated Workers",
      subtitle: "Automated Academic Report Generation & Security Testing",
      overview: "Clean mathematical pipelines and data analysis workers handling institutional grade curves, fee aggregation, and automated penetration testing validation.",
      keyStrengths: [
        "High-accuracy analytical computation for student ranking algorithms",
        "Automated CLI scripts for multi-format document conversion (PDF/Excel)",
        "Zero memory leakage during bulk record exports",
        "Seamless integration with cloud webhooks and message queues"
      ],
      codeSnippet: `# Automated Grade & Performance Aggregator
def compute_institutional_percentiles(raw_records):
    sanitized = [r for r in raw_records if r.is_active]
    return {
        "mean_gpa": round(sum(s.gpa for s in sanitized)/len(sanitized), 2),
        "total_cohort": len(sanitized)
    }`,
      slaBenchmark: "Zero-Loss Computational Pipeline"
    },
    { 
      id: "tech-mongodb",
      name: "MongoDB", 
      icon: Database, 
      color: "text-teal-400",
      badge: "Database Layer",
      title: "MongoDB Atlas Cloud Architecture",
      subtitle: "Document-Oriented Scalable Collections with Indexed Aggregations",
      overview: "Multi-region cloud MongoDB clusters providing flexible document modeling for complex student records, billing ledgers, and institutional circulars.",
      keyStrengths: [
        "Indexed compound queries ensuring sub-10ms response times",
        "Automatic cloud snapshots and point-in-time disaster recovery",
        "Flexible polymorphic schemas without cumbersome database migration locks",
        "Zero server overhead with autoscaling serverless tiers"
      ],
      codeSnippet: `// Indexed Academic Record Aggregation
db.students.aggregate([
  { $match: { campusId: ObjectId("64f1e00a"), academicYear: 2026 } },
  { $group: { _id: "$stream", avgFeeCleared: { $avg: "$feePaid" } } }
]).hint({ campusId: 1, academicYear: 1 });`,
      slaBenchmark: "Sub-10ms Indexed Queries"
    },
    { 
      id: "tech-js",
      name: "Modern JavaScript", 
      icon: FileCode, 
      color: "text-yellow-400",
      badge: "ECMAScript Core",
      title: "Modern ES6+ JavaScript Engines",
      subtitle: "Zero-Dependency Modular Vanilla Logic & Canvas Physics",
      overview: "Standardized modern JavaScript maximizing performance directly on native browser runtimes without bloat or excessive dependencies.",
      keyStrengths: [
        "Native Canvas 2D and WebGL physics engines running at smooth 60fps",
        "Modern Async/Await execution loops with clean error boundaries",
        "Stateless LocalStorage and IndexedDB offline persistence strategies",
        "Universal modular code usable across browser and server runtimes"
      ],
      codeSnippet: `// 60FPS Physics Collision Vector Loop
const checkBallPaddleOverlap = (ball, paddle) => {
  return ball.x > paddle.x && 
         ball.x < paddle.x + paddle.width && 
         ball.y + ball.radius >= paddle.y;
};`,
      slaBenchmark: "Native 60 FPS Hardware Acceleration"
    },
    { 
      id: "tech-reactnative",
      name: "React Native", 
      icon: Smartphone, 
      color: "text-sky-400",
      badge: "Cross-Platform",
      title: "React Native & Expo Ecosystem",
      subtitle: "Unified Android & iOS Architecture with Native Thread Performance",
      overview: "Single codebase compiling directly into native Objective-C and Java/Kotlin bridge architectures for seamless cross-device mobile deployments.",
      keyStrengths: [
        "Offline-first mobile database sync using embedded SQLite",
        "Native Biometric FaceID and Fingerprint API access",
        "Push notification integration via Firebase Cloud Messaging",
        "Over-The-Air (OTA) runtime updates for immediate bug resolutions"
      ],
      codeSnippet: `// Native Biometric Verification Checkpoint
const authenticateUserBiometrics = async () => {
  const hasHardware = await LocalAuthentication.hasHardwareAsync();
  if (hasHardware) {
    return await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authorize AVR Institutional Access'
    });
  }
};`,
      slaBenchmark: "100% Native OS Thread Execution"
    },
    { 
      id: "tech-restapis",
      name: "REST & Cloud APIs", 
      icon: Cloud, 
      color: "text-[#9d4edd]",
      badge: "API Architecture",
      title: "Stateless Cloud REST & Webhook Pipelines",
      subtitle: "Enterprise Microservice Boundaries & Edge Distributed APIs",
      overview: "Decoupled cloud API architecture built for sub-second responses, automated WhatsApp gateway dispatchers, and payment reconciliations.",
      keyStrengths: [
        "Strict JSON schema sanitization on every incoming payload",
        "Idempotent API endpoints preventing duplicate payment entries",
        "Global Edge CDN routing delivering APIs to nearest server nodes",
        "Automated Swagger/OpenAPI documentation and webhook hooks"
      ],
      codeSnippet: `// Edge Cached Response Headers
export const setEdgeHeaders = (res) => {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
  res.setHeader('X-AVR-Edge-Status', 'HIT_MUMBAI_CDN');
};`,
      slaBenchmark: "Sub-20ms Global Routing"
    }
  ];

  const flowingTechList = [...techStackData, ...techStackData];

  // 2. THE AVR ADVANTAGE
  const advantagesData = [
    {
      id: "adv-jwt",
      title: "JWT Stateless Auth",
      desc: "Zero token leaks with RBAC authorization layers.",
      icon: Lock,
      color: "text-[#00f2fe]",
      badge: "Authentication Layer",
      fullTitle: "Cryptographic JWT Stateless Authentication",
      subtitle: "Role-Based Access Control (RBAC) with Zero Server Session Storage",
      overview: "Completely stateless authentication leveraging SHA-256 HMAC digital signatures. Eliminates expensive server-side session lookup databases, guaranteeing zero token forgery.",
      keyStrengths: [
        "Strict Role-Based segregation (Super Admin, Faculty, Student, Parent)",
        "Short-lived access tokens coupled with encrypted HTTP-only refresh tokens",
        "Instant token invalidation via edge blacklisting signatures",
        "Zero credential retention in raw state on browser local disks"
      ],
      codeSnippet: `// Stateless Token Verification Middleware
export const authenticateRole = (permittedRole) => (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'TOKEN_REQUIRED' });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err || decoded.role !== permittedRole) return res.status(403).json({ error: 'UNAUTHORIZED' });
    req.user = decoded;
    next();
  });
};`,
      slaBenchmark: "0 Server Session Memory Leaks"
    },
    {
      id: "adv-owasp",
      title: "OWASP Hardened",
      desc: "Sanitized query injections, automated CSRF & XSS protection.",
      icon: ShieldCheck,
      color: "text-emerald-400",
      badge: "Security Defense",
      fullTitle: "OWASP Top-10 Hardened Security Protocols",
      subtitle: "Defensive Sanitization, Strict CSP Headers & Anti-Brute-Force Guards",
      overview: "Every deployed service implements stringent defensive programming. Database injections, Cross-Site Scripting (XSS), and CSRF vulnerabilities are mitigated before reaching controller logic.",
      keyStrengths: [
        "Automated Mongo/SQL injection query parameter sanitization",
        "Strict Content Security Policy (CSP) blocking external unauthorized scripts",
        "IP-based rate-limiting algorithms mitigating automated DDoS / brute-force attempts",
        "End-to-End TLS 1.3 cryptographic cipher enforcement"
      ],
      codeSnippet: `// Defensive Payload Sanitization Guard
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';

app.use(helmet({ contentSecurityPolicy: true }));
app.use(mongoSanitize({ replaceWith: '_' }));`,
      slaBenchmark: "Zero Injected Query Vulnerabilities"
    },
    {
      id: "adv-cloud",
      title: "Cloud Redundancy",
      desc: "Automated edge deployments with instant failover schedules.",
      icon: Cloud,
      color: "text-[#9d4edd]",
      badge: "High Availability",
      fullTitle: "Multi-Zone Edge Cloud Redundancy",
      subtitle: "Distributed Global CDN Caching with Sub-Second Failover",
      overview: "Software is distributed across globally replicated Edge networks (Vercel/Netlify CDN). If any single regional node drops, traffic is automatically routed to the nearest operational server.",
      keyStrengths: [
        "Sub-20ms edge caching across 30+ international data center regions",
        "Automated atomic zero-downtime CI/CD deployment pipelines",
        "Independent database replica sets on MongoDB Atlas with auto-healing",
        "Static asset replication across geo-redundant storage nodes"
      ],
      codeSnippet: `// Edge Redirection Configuration
export const config = {
  runtime: 'edge',
  regions: ['bom1', 'sin1', 'iad1']
};
export default async function handler(req) {
  return new Response(JSON.stringify({ status: 'ACTIVE_FAILOVER_READY' }));
}`,
      slaBenchmark: "99.98% Guaranteed Uptime SLA"
    },
    {
      id: "adv-ip",
      title: "Full IP Ownership",
      desc: "100% source code, repositories, and assets belong exclusively to you.",
      icon: CheckCircle2,
      color: "text-amber-400",
      badge: "Client Guarantee",
      fullTitle: "Unrestricted Intellectual Property Transfer",
      subtitle: "Zero Vendor Lock-in & Direct GitHub Repository Handover",
      overview: "When AVR Tech Labs completes your project milestone, every line of clean source code, architectural documentation, and database asset is transferred directly to your organization.",
      keyStrengths: [
        "100% GitHub repository transfer directly to client GitHub accounts",
        "Zero recurring proprietary license fees or hidden royalty charges",
        "Complete freedom to host on AWS, Vercel, Netlify, or on-premise hardware",
        "Formal Non-Disclosure Agreement (NDA) and IP assignment documentation"
      ],
      codeSnippet: `# Git Repository Ownership Handover Script
git remote remove upstream
git remote add origin https://github.com/client-org/production-system.git
git push -u origin --all
echo "AVR Tech Labs: IP Handover Complete"`,
      slaBenchmark: "100% Perpetual Client Code Ownership"
    }
  ];

  // 3. CORE CAPABILITIES
  const capabilities = [
    {
      id: "cap-fullstack",
      title: "Full-Stack Web Engineering",
      subtitle: "Modern Single Page Applications & Scalable Microservices",
      desc: "Modern Single Page Applications (SPA), responsive portals, and cloud-integrated REST API microservices.",
      tags: ["React.js", "Node.js", "REST APIs"],
      icon: Code,
      badge: "Full-Stack",
      architecture: "Decoupled Single Page Application (SPA) client communicating with stateless RESTful API microservices. Global Edge CDN caching guarantees sub-25ms asset response times.",
      deliverables: [
        "Interactive React frontend with modular component architecture",
        "Secure Node.js & Express REST API with role-based JWT validation",
        "Document-oriented database structuring with MongoDB Atlas",
        "Continuous CI/CD pipeline on Netlify or Vercel Edge networks",
        "Automated SEO optimization, OpenGraph tags, and semantic schema"
      ],
      security: "Sanitized query endpoints, CORS boundary constraints, brute-force rate limiters, and TLS 1.3 encryption."
    },
    {
      id: "cap-mobile",
      title: "Cross-Platform Mobile Apps",
      subtitle: "Native Performance Across Android & iOS",
      desc: "Intuitive Android and iOS applications with fluid gestures, real-time syncing, and native responsiveness.",
      tags: ["React Native", "Offline-First", "Mobile UX"],
      icon: Smartphone,
      badge: "Mobile",
      architecture: "Unified codebase utilizing React Native and Expo CLI. Local SQLite persistence ensures offline-first reliability synchronized seamlessly with cloud workers.",
      deliverables: [
        "Production-ready Android APK and iOS release builds",
        "Offline-first synchronization layer caching critical offline actions",
        "FCM push notification pipeline for direct user updates",
        "Native device hardware integration (Camera, Biometrics, GPS)",
        "App Store & Google Play Console launch preparation"
      ],
      security: "Encrypted device keystore token persistence, certificate pinning, and biometrically protected operational checkpoints."
    },
    {
      id: "cap-erp",
      title: "Custom Institutional Portals",
      subtitle: "Complete Academic & Administrative Digital Transformation",
      desc: "Custom School & Institute ERPs, student dashboards, and workflow automations eliminating paperwork.",
      tags: ["School ERP", "Fee Trackers", "Secure Portals"],
      icon: Server,
      badge: "Institutional ERP",
      featured: true,
      architecture: "Multi-tenant role-based database architecture granting segmented portals to Administrators, Teachers, and Parents with instant alert gateways.",
      deliverables: [
        "Student lifecycle database: admissions, marks entry, and hall tickets",
        "Fee collection tracking with printable invoices and auto-receipt generation",
        "One-click WhatsApp report card dispatch to parent phone numbers",
        "Staff attendance registry with automated monthly salary & leave logs",
        "Executive dashboard displaying real-time fee recovery and enrollment statistics"
      ],
      security: "Granular Role-Based Access Control (RBAC) ensuring faculty access only assigned classrooms, with automated daily backup snapshots."
    },
    {
      id: "cap-uiux",
      title: "UI/UX Re-Engineering",
      subtitle: "Enterprise Design Systems & Legacy System Modernization",
      desc: "Modernizing legacy corporate interfaces into sleek, dark/light mode digital products that drive engagement.",
      tags: ["Design Systems", "Micro-Interactions", "Frictionless UX"],
      icon: Layout,
      badge: "UI/UX",
      architecture: "Component-driven atomic design methodology utilizing Tailwind CSS design tokens, custom SVG assets, and fluid micro-animations without heavy runtime libraries.",
      deliverables: [
        "Complete redesign of outdated desktop software into sleek web interfaces",
        "Dual Dark / Light mode design system with custom CSS variables",
        "Frictionless conversion funnel redesign with instant lead validation",
        "Mobile-first responsive viewport adaptation across all form factors",
        "Interactive SVG data charts and accessible WCAG 2.1 compliance"
      ],
      security: "Lightweight asset footprints with zero third-party tracking scripts, guaranteeing user privacy and instant page loads."
    }
  ];

  // Universal Scope Options across Web, Mobile, ERP & UI/UX
  const rfpFeatureList = [
    { id: 'web_spa', category: 'web', label: 'Modern React.js SPA & REST Microservices', tag: 'Web' },
    { id: 'jwt_auth', category: 'web', label: 'Stateless JWT Role-Based Auth (RBAC)', tag: 'Security' },
    { id: 'payment_gateway', category: 'web', label: 'Razorpay / Stripe Payment Gateway Integration', tag: 'Web' },
    { id: 'edge_cdn', category: 'web', label: 'Zero-Maintenance Global Serverless Edge CDN', tag: 'Cloud' },
    { id: 'native_app', category: 'mobile', label: 'Cross-Platform React Native (Android & iOS)', tag: 'Mobile' },
    { id: 'offline_sync', category: 'mobile', label: 'Offline SQLite Local Persistence & Cloud Sync', tag: 'Mobile' },
    { id: 'push_notif', category: 'mobile', label: 'Push Notifications & Native Hardware Access', tag: 'Mobile' },
    { id: 'biometric_auth', category: 'mobile', label: 'Biometric Login (Fingerprint / FaceID)', tag: 'Mobile' },
    { id: 'student_portal', category: 'erp', label: 'Custom Student, Faculty & Admin Dashboards', tag: 'ERP' },
    { id: 'wa_auto', category: 'erp', label: 'Automated WhatsApp PDF Report Cards & Invoices', tag: 'ERP' },
    { id: 'fee_engine', category: 'erp', label: 'Automated Fee Collection & Real-time Ledgers', tag: 'ERP' },
    { id: 'pdf_reports', category: 'erp', label: 'One-Click Dynamic PDF & Excel Data Exports', tag: 'ERP' },
    { id: 'dark_mode', category: 'uiux', label: 'Tailwind Design System & Cyber Dark/Light Mode', tag: 'UI/UX' },
    { id: 'legacy_redesign', category: 'uiux', label: 'Legacy Monolith Desktop to Modern Web UI', tag: 'UI/UX' },
    { id: 'micro_anim', category: 'uiux', label: 'Fluid Micro-Interactions & Interactive Charts', tag: 'UI/UX' },
    { id: 'mobile_first_ux', category: 'uiux', label: 'Frictionless Conversion & Mobile-First UX', tag: 'UI/UX' },
  ];

  const filteredRfpList = rfpCategory === 'all' 
    ? rfpFeatureList 
    : rfpFeatureList.filter(item => item.category === rfpCategory);

  const toggleScopeItem = (id) => {
    setSelectedScopes(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleCopyRfpScope = () => {
    const list = selectedScopes.map(id => rfpFeatureList.find(f => f.id === id)?.label).join('\n• ');
    const text = `AVR Tech Labs - Project RFP Scope Specification:\n• ${list}\nTarget: Multi-Platform Production Deployment`;
    navigator.clipboard.writeText(text);
    setScopeCopied(true);
    setTimeout(() => setScopeCopied(false), 2200);
  };

  // Stack Advisor Manifests
  const blueprints = {
    school: {
      name: "Institutional ERP Architecture",
      badge: "Education Tech",
      latency: "18ms",
      stack: ["React.js Core", "Tailwind CSS", "Node.js REST Services", "MongoDB Atlas", "Vercel Edge"],
      features: ["Student Lifecycle & Fee Engine", "RBAC Faculty Portal", "Automated Report Card Pipeline"]
    },
    fintech: {
      name: "High-Throughput Financial Utility",
      badge: "Fintech Systems",
      latency: "12ms",
      stack: ["React Virtual DOM", "Edge Numerical APIs", "Client-Side Caching", "Netlify Edge CDN"],
      features: ["Sub-Millisecond Calculators", "Dynamic Data Visualizers", "Zero Cold-Start Latency"]
    },
    mobileapp: {
      name: "Cross-Platform Mobile Ecosystem",
      badge: "Mobile Apps",
      latency: "24ms",
      stack: ["React Native", "Expo Architecture", "Offline SQLite Cache", "AWS S3 Assets"],
      features: ["Native Hardware Acceleration", "Push Notification Gateway", "Cross-Platform Unified Code"]
    }
  };

  // 4 Verified Live GitHub Deployments
  const caseStudies = [
    {
      title: "AVR Tech Labs Enterprise Suite",
      category: "Software Consultancy Portal",
      color: "border-cyan-500/40 text-cyan-400",
      gradient: "from-cyan-500/10 to-blue-500/5",
      summary: "Modern client consulting portal featuring architecture blueprints, live ROI diagnostic models, and zero-maintenance edge setups.",
      tags: ["React.js", "Tailwind CSS", "Edge CDN", "GitHub Pages"],
      demoLink: "https://jackjacky1786-hash.github.io/avr-tech-labs/",
      githubLink: "https://github.com/jackjacky1786-hash/avr-tech-labs"
    },
    {
      title: "FinCalc Hub (Financial Utility)",
      category: "Fintech Engine",
      color: "border-purple-500/40 text-purple-400",
      gradient: "from-purple-500/10 to-pink-500/5",
      summary: "High-performance financial and numerical calculation suite handling amortization, loan matrices, and instant analytics with zero lag.",
      tags: ["HTML5", "CSS3", "Modern JavaScript", "GitHub Pages"],
      demoLink: "https://jackjacky1786-hash.github.io/fincalc-hub/",
      githubLink: "https://github.com/jackjacky1786-hash/fincalc-hub"
    },
    {
      title: "Public Service Org (PSO Portal)",
      category: "Enterprise Web Portal",
      color: "border-emerald-500/40 text-emerald-400",
      gradient: "from-emerald-500/10 to-teal-500/5",
      summary: "Institutional corporate presence with branded digital assets, administrative document workflows, and structured layout architecture.",
      tags: ["React.js", "Design Tokens", "REST Ready", "GitHub Pages"],
      demoLink: "https://jackjacky1786-hash.github.io/PSO-ORG/",
      githubLink: "https://github.com/jackjacky1786-hash/PSO-ORG"
    },
    {
      title: "Arcade Bricks 2D & 3D Interactive",
      category: "Interactive Engine",
      color: "border-amber-500/40 text-amber-400",
      gradient: "from-amber-500/10 to-orange-500/5",
      summary: "Physics-based collision engine and responsive interactive game logic built with WebGL canvas for low latency and smooth 60fps frame rates.",
      tags: ["JavaScript Canvas", "Physics Engine", "WebGL", "GitHub Pages"],
      demoLink: "https://jackjacky1786-hash.github.io/bricks-game/",
      githubLink: "https://github.com/jackjacky1786-hash/bricks-game"
    }
  ];

  // Consultation Scheduler Handler
  const handleScheduleCall = () => {
    setScheduleStatus(true);
    const msg = encodeURIComponent(`Hello AVR Tech Labs, I want to confirm my 15-minute Strategy Consultation for ${selectedDay} at ${selectedTime} IST.`);
    setTimeout(() => {
      window.open(`https://wa.me/919999999999?text=${msg}`, '_blank');
      setScheduleStatus(false);
    }, 800);
  };

  // Contact Form Handlers
  const handleSendInquiry = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Project Inquiry from ${contactName || 'Client'}`);
    const body = encodeURIComponent(`Name: ${contactName}\nEmail: ${contactEmail}\nRequirement: ${contactRequirement}`);
    window.location.href = `mailto:contact@avrtechlabs.com?subject=${subject}&body=${body}`;
    setTimeout(() => setIsSubmitting(false), 800);
  };

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      `*New Project Inquiry - AVR Tech Labs*\nName: ${contactName || 'Not Provided'}\nEmail: ${contactEmail || 'Not Provided'}\nRequirement: ${contactRequirement || 'General Software Engineering'}`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  const handleCopyEstimate = () => {
    const text = `AVR Tech Labs Specification:\nPlatform: ${platform.toUpperCase()}\nEstimated Budget: ₹${estimatedCost.toLocaleString('en-IN')}\nTimeline: ${timeline}`;
    navigator.clipboard.writeText(text);
    setCopiedEstimate(true);
    setTimeout(() => setCopiedEstimate(false), 2200);
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-[#030712] text-slate-100' : 'bg-slate-100 text-slate-900'}`}>
      
      {/* Background Neon Orbs & Cyber Grid */}
      <div className="fixed inset-0 bg-neon-grid pointer-events-none opacity-40 z-0"></div>
      <div className="fixed top-[-5%] left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/25 to-blue-600/25 blur-[120px] rounded-full pointer-events-none z-0 animate-orb-1"></div>
      <div className="fixed top-[35%] right-[5%] w-[500px] h-[500px] bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 blur-[130px] rounded-full pointer-events-none z-0 animate-orb-2"></div>

      {/* Top Header */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#030712]/85 border-b border-white/10 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo with Shimmer Sheen & Glow */}
          <div 
            onClick={() => setDetailItem(null)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-white/5 border border-cyan-500/40 p-1 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:border-[#00f2fe] transition-all overflow-hidden">
              <div className="sheen-overlay">
                <div className="sheen-bar"></div>
              </div>
              <img 
                src="/avr-logo.png" 
                alt="AVR Tech Labs Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,242,254,0.7)]"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<span class="font-black text-[#00f2fe] text-base">A</span>';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-white leading-none">
                AVR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#9d4edd]">TECH LABS</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#00f2fe] uppercase mt-0.5">Software Engineering</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-mono font-semibold text-slate-300">
            <a href="#hero" onClick={() => setDetailItem(null)} className="hover:text-[#00f2fe] transition-colors">Home</a>
            <a href="#tech-section" onClick={() => setDetailItem(null)} className="hover:text-[#00f2fe] transition-colors">Stack</a>
            <a href="#advantage" onClick={() => setDetailItem(null)} className="hover:text-emerald-400 transition-colors">Advantage</a>
            <a href="#capabilities" onClick={() => setDetailItem(null)} className="hover:text-[#9d4edd] transition-colors">Capabilities</a>
            <a href="#rfp" onClick={() => setDetailItem(null)} className="hover:text-amber-400 transition-colors">RFP Builder</a>
            <a href="#portfolio" onClick={() => setDetailItem(null)} className="hover:text-[#f72585] transition-colors">Work</a>
            <a href="#estimator" onClick={() => setDetailItem(null)} className="hover:text-amber-400 transition-colors">Estimator</a>
            <a href="#contact" onClick={() => setDetailItem(null)} className="hover:text-[#00f2fe] transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/jackjacky1786-hash" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f2fe] text-slate-300 hover:text-[#00f2fe] transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f2fe] text-[#00f2fe] transition-all cursor-pointer"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a 
              href="#contact" 
              onClick={() => setDetailItem(null)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00f2fe] via-[#9d4edd] to-[#f72585] text-white font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
            >
              Start Project &rarr;
            </a>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CONDITIONAL RENDERING: DEEP-DIVE DETAIL PAGE */}
      {/* ========================================================================= */}
      {detailItem ? (
        <main className="relative z-10 pt-32 pb-24 px-6 max-w-5xl mx-auto animate-fade-in">
          <button 
            onClick={() => {
              setDetailItem(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00f2fe] hover:border-[#00f2fe]/40 text-xs font-mono mb-8 cursor-pointer transition-all hover:scale-105"
          >
            <ArrowLeft size={16} /> Back to Overview
          </button>

          {/* Banner Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#050a16] border border-[#00f2fe]/40 shadow-2xl backdrop-blur-xl mb-8 relative overflow-hidden">
            <div className="inline-block px-3 py-1 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe] text-xs font-mono mb-4">
              {detailItem.badge || "Technical Specification"}
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
              {detailItem.fullTitle || detailItem.title || detailItem.name}
            </h1>
            <p className="text-sm md:text-base font-mono text-cyan-300 mb-6">
              {detailItem.subtitle || detailItem.desc}
            </p>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-slate-300 leading-relaxed">
              {detailItem.overview || detailItem.architecture}
            </div>
          </div>

          {/* Core Strengths & Deliverables */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#00f2fe] font-mono text-sm font-bold mb-4">
                <CheckSquare size={18} /> Production Features & Strengths
              </div>
              <ul className="space-y-3 font-mono text-xs text-slate-300">
                {(detailItem.keyStrengths || detailItem.deliverables || []).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-bold mb-4">
                <Gauge size={18} /> Performance SLA Benchmark
              </div>
              <p className="text-sm font-mono text-cyan-200 mb-6 bg-cyan-950/40 p-3 rounded-lg border border-cyan-800/40">
                {detailItem.slaBenchmark || detailItem.security || "Sub-Second Latency Verified"}
              </p>
              <div className="text-xs font-mono text-slate-400">
                Guaranteed by AVR Tech Labs Production Engine. Verified with zero runtime thread locks and maximum cryptographic isolation.
              </div>
            </div>
          </div>

          {/* Production Code Blueprint */}
          {detailItem.codeSnippet && (
            <div className="p-6 rounded-2xl bg-black/80 border border-cyan-500/30 font-mono text-xs mb-12 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-slate-400">
                <span className="flex items-center gap-2 text-cyan-300 font-bold">
                  <Terminal size={14} /> implementation_blueprint.ts
                </span>
                <span className="text-[10px] text-slate-500">PRODUCTION CODE PATTERN</span>
              </div>
              <pre className="text-slate-300 overflow-x-auto leading-relaxed">
                <code>{detailItem.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Direct CTA */}
          <div className="text-center p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30">
            <h3 className="text-xl font-bold text-white mb-2">Want to integrate this into your software?</h3>
            <p className="text-xs text-slate-400 mb-6">Let's discuss technical architecture, schemas, and sprint timelines.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                onClick={() => setDetailItem(null)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all"
              >
                Initiate Project Enquiry
              </a>
              <button 
                onClick={() => setDetailItem(null)}
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer"
              >
                Back to All Systems
              </button>
            </div>
          </div>
        </main>
      ) : (
        /* ==================== MAIN HOMEPAGE ==================== */
        <main>
          {/* Hero Section */}
          <section id="hero" className="relative z-10 pt-32 pb-14 px-6 max-w-5xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 backdrop-blur-md shadow-lg shadow-cyan-500/10">
              <Activity size={13} className="text-[#00f2fe] animate-pulse" />
              <span>PRODUCTION-READY SYSTEMS // 99.98% UPTIME SLA</span>
            </div>

            {/* Center Emblem Logo with Rotating Ring & Shimmer */}
            <div className="flex justify-center mb-6">
              <div className="relative group p-1 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 spin-border-ring bg-gradient-to-r from-[#00f2fe] via-[#9d4edd] to-[#f72585] rounded-3xl opacity-75 blur-sm"></div>
                <div className="relative z-10 p-4 md:p-5 rounded-[22px] bg-[#030712]/90 backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="sheen-overlay">
                    <div className="sheen-bar"></div>
                  </div>
                  <img 
                    src="/avr-logo.png" 
                    alt="AVR Tech Labs Insignia" 
                    className="w-28 h-28 md:w-36 md:h-36 object-contain animate-cyber-glow transition-transform duration-300 group-hover:scale-108"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#9d4edd] to-[#f72585] drop-shadow-lg">
                  AVR TECH LABS
                </span>
              </h2>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-slate-100 uppercase">
              Architecting Next-Gen Web Ecosystems
            </h1>

            <p className="max-w-xl mx-auto text-slate-300 text-sm md:text-base mb-8 font-normal leading-relaxed">
              We engineer bespoke web applications, cross-platform mobile apps, institutional ERPs, and modern UI/UX design systems built for sub-second speeds and zero server overhead.
            </p>

            <div className="flex flex-wrap justify-center gap-3.5 mb-10">
              <a 
                href="#estimator" 
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all"
              >
                Calculate Project Cost
              </a>
              <a 
                href="#rfp" 
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Configure Custom RFP Scope &rarr;
              </a>
            </div>
          </section>

          {/* INFRASTRUCTURE HEALTH BAR */}
          <section className="relative z-10 py-6 px-6 max-w-5xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono text-xs shadow-xl">
              <div className="border-r border-white/10 last:border-none">
                <span className="text-slate-400 block text-[10px] uppercase">Global Edge CDN</span>
                <span className="text-emerald-400 font-bold text-sm">99.98% Active SLA</span>
              </div>
              <div className="border-r border-white/10 last:border-none">
                <span className="text-slate-400 block text-[10px] uppercase">Edge Response Latency</span>
                <span className="text-[#00f2fe] font-bold text-sm">&lt; 20ms Global</span>
              </div>
              <div className="border-r border-white/10 last:border-none">
                <span className="text-slate-400 block text-[10px] uppercase">Database Sync</span>
                <span className="text-[#9d4edd] font-bold text-sm">Atlas Multi-Region</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Server Rent Overhead</span>
                <span className="text-amber-400 font-bold text-sm">₹0 Base Server Cost</span>
              </div>
            </div>
          </section>

          {/* TECHNOLOGY ECOSYSTEM & STACK - CLICKABLE */}
          <section id="tech-section" className="relative z-10 py-10 border-t border-white/10 overflow-hidden">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Technology Ecosystem & Stack // Click Any Item For Full Architecture
              </span>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="animate-tech-flow flex items-center gap-4 py-2">
                {flowingTechList.map((tech, i) => (
                  <div 
                    key={i} 
                    onClick={() => {
                      setDetailItem(tech);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-[#00f2fe] transition-all hover:scale-108 cursor-pointer shrink-0 shadow-lg group"
                    title="Click to view detailed architecture"
                  >
                    <tech.icon size={17} className={`${tech.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-xs font-mono font-medium text-slate-200 group-hover:text-[#00f2fe] transition-colors">{tech.name}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-cyan-400 font-mono ml-1">&rarr;</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* THE AVR ADVANTAGE - CLICKABLE */}
          <section id="advantage" className="relative z-10 py-16 px-6 max-w-6xl mx-auto border-t border-white/10">
            <div className="text-center mb-10">
              <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-widest">The AVR Advantage</span>
              <h2 className="text-2xl md:text-3xl font-black mt-1 text-white">Architectural Superiority & Security</h2>
              <p className="text-xs font-mono text-slate-400 mt-2">Click any advantage card below to inspect cryptographic blueprints & protocols</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {advantagesData.map((adv, i) => (
                <div 
                  key={i} 
                  onClick={() => {
                    setDetailItem(adv);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md colorful-glow transition-all hover:border-[#00f2fe] cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${adv.color} group-hover:scale-110 transition-transform`}>
                      <adv.icon size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[#00f2fe] transition-colors">{adv.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{adv.desc}</p>
                  </div>
                  <div className="text-[11px] font-mono text-[#00f2fe] flex items-center gap-1 group-hover:underline">
                    Inspect Protocol &rarr;
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CORE CAPABILITIES */}
          <section id="capabilities" className="relative z-10 py-20 px-6 max-w-6xl mx-auto border-t border-white/10">
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-[#9d4edd] uppercase tracking-widest">Engineered to Scale</span>
              <h2 className="text-3xl md:text-4xl font-black mt-1 text-white">Core Capabilities</h2>
              <p className="text-xs font-mono text-slate-400 mt-2">Click any capability below to view dedicated technical breakdown and architecture.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {capabilities.map((cap, i) => (
                <div 
                  key={i} 
                  onClick={() => {
                    setDetailItem(cap);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`p-6 rounded-2xl flex flex-col justify-between backdrop-blur-xl transition-all colorful-glow cursor-pointer ${
                    cap.featured 
                      ? 'bg-gradient-to-b from-[#00f2fe]/10 to-[#0a1224] border border-[#00f2fe]/50 shadow-lg shadow-cyan-500/15' 
                      : 'bg-white/[0.03] border border-white/10'
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00f2fe] mb-4">
                      <cap.icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2.5">{cap.title}</h3>
                    <p className="text-xs text-slate-300 mb-6 leading-relaxed">{cap.desc}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cap.tags.map((t, idx) => (
                        <span key={idx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/10 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00f2fe] hover:underline">
                      View Technical Details &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* STACK MANIFEST & TECH ARCHITECTURE ADVISOR */}
          <section id="advisor" className="relative z-10 py-20 px-6 max-w-4xl mx-auto border-t border-white/10">
            <div className="text-center mb-10">
              <span className="text-xs font-mono text-[#9d4edd] uppercase tracking-widest">Interactive Spec Engine</span>
              <h2 className="text-2xl md:text-3xl font-black mt-1 text-white">Architecture Blueprint Advisor</h2>
            </div>

            <div className="p-7 rounded-2xl bg-[#050a16]/90 border border-purple-500/30 shadow-2xl backdrop-blur-2xl">
              <div className="flex flex-wrap gap-2.5 mb-6 border-b border-white/10 pb-4">
                {['school', 'fintech', 'mobileapp'].map((k) => (
                  <button 
                    key={k}
                    onClick={() => setAdvisorKey(k)} 
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider cursor-pointer transition-all ${advisorKey === k ? 'bg-gradient-to-r from-[#00f2fe] to-[#9d4edd] text-black shadow-md shadow-cyan-500/30' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
                  >
                    {k.toUpperCase()} // BLUEPRINT
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                    <span className="text-slate-400 block mb-0.5">SYSTEM ARCHITECTURE:</span>
                    <span className="text-white font-bold text-sm">{blueprints[advisorKey].name}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                    <span className="text-slate-400 block mb-0.5">NETWORK LATENCY TARGET:</span>
                    <span className="text-[#00f2fe] font-bold text-sm">~{blueprints[advisorKey].latency} on Global Edge</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                    <span className="text-slate-400 block mb-1.5">CAPABILITIES:</span>
                    <ul className="space-y-1 text-slate-300">
                      {blueprints[advisorKey].features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check size={13} className="text-[#00f2fe]" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-black/80 border border-cyan-500/30 font-mono text-xs space-y-2 shadow-xl">
                  <div className="flex items-center gap-2 text-slate-400 pb-2 border-b border-white/10">
                    <Terminal size={14} className="text-[#00f2fe]" />
                    <span className="text-slate-300">stack_manifest.json</span>
                  </div>
                  <div className="text-slate-400 space-y-1.5 pt-1">
                    {blueprints[advisorKey].stack.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-[#f72585] font-bold">&gt;</span>
                        <span className="text-cyan-300 font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* UNIVERSAL CLIENT RFP SCOPE BUILDER */}
          <section id="rfp" className="relative z-10 py-20 px-6 max-w-5xl mx-auto border-t border-white/10">
            <div className="text-center mb-10">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Multi-Platform Scope Configurator</span>
              <h2 className="text-2xl md:text-3xl font-black mt-1 text-white">Interactive Client RFP Scope Builder</h2>
              <p className="text-xs font-mono text-slate-400 mt-2">
                Configure features across Web Apps, Mobile Apps, Institutional ERPs, and UI/UX Modernization
              </p>
            </div>

            <div className="p-7 md:p-9 rounded-3xl bg-white/[0.03] border border-amber-500/30 backdrop-blur-xl shadow-2xl space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Filter size={14} className="text-amber-400" /> Filter Domain:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'all', label: 'All Modules' },
                    { id: 'web', label: 'Web Apps' },
                    { id: 'mobile', label: 'Mobile Apps' },
                    { id: 'erp', label: 'School & ERP' },
                    { id: 'uiux', label: 'UI/UX Design' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setRfpCategory(tab.id)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                        rfpCategory === tab.id
                          ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                          : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {filteredRfpList.map(item => {
                  const isChecked = selectedScopes.includes(item.id);
                  return (
                    <div 
                      key={item.id}
                      onClick={() => toggleScopeItem(item.id)}
                      className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked 
                          ? 'bg-amber-500/15 border-amber-400 text-white shadow-lg shadow-amber-500/10' 
                          : 'bg-black/40 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-amber-300 font-bold uppercase">
                          {item.tag}
                        </span>
                        <span className="text-xs font-mono font-medium">{item.label}</span>
                      </div>
                      <div className={`w-5 h-5 rounded flex items-center justify-center border shrink-0 ml-2 ${isChecked ? 'bg-amber-400 border-amber-400' : 'border-white/20'}`}>
                        {isChecked && <Check size={14} className="text-black font-bold" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                <div>
                  <span className="text-amber-400 font-bold">Selected Features: {selectedScopes.length} Modules Active</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Full Stack SLA // 100% IP Repository Handover Guaranteed</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button 
                    onClick={handleCopyRfpScope}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Copy size={13} /> {scopeCopied ? 'SPEC COPIED!' : 'COPY RFP SPEC'}
                  </button>
                  <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent('Hello AVR Tech Labs, here is my configured Project RFP Scope:\n• ' + selectedScopes.map(id => rfpFeatureList.find(f => f.id === id)?.label).join('\n• '))}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-[#25D366] text-white font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" /> Dispatch via WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* INTERACTIVE CLIENT ROI & PAPERWORK CALCULATOR */}
          <section id="roi" className="relative z-10 py-20 px-6 max-w-4xl mx-auto border-t border-white/10">
            <div className="text-center mb-10">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Efficiency Metrics</span>
              <h2 className="text-2xl md:text-3xl font-black mt-1 text-white">Paperwork Elimination & ROI Calculator</h2>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.03] border border-emerald-500/30 backdrop-blur-xl grid md:grid-cols-2 gap-8 items-center shadow-2xl">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-2">
                    <span className="text-slate-300">ADMIN / STAFF COUNT:</span>
                    <span className="text-[#00f2fe] text-sm">{staffCount} Persons</span>
                  </div>
                  <input 
                    type="range" min="3" max="60" value={staffCount} 
                    onChange={(e) => setStaffCount(Number(e.target.value))}
                    className="w-full accent-[#00f2fe] cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-2">
                    <span className="text-slate-300">WEEKLY MANUAL HOURS / PERSON:</span>
                    <span className="text-[#f72585] text-sm">{weeklyHours} Hrs/Week</span>
                  </div>
                  <input 
                    type="range" min="5" max="40" value={weeklyHours} 
                    onChange={(e) => setWeeklyHours(Number(e.target.value))}
                    className="w-full accent-[#f72585] cursor-pointer"
                  />
                </div>
              </div>

              <div className="p-6 rounded-xl bg-black/60 border border-emerald-500/30 text-center space-y-4 shadow-xl">
                <div>
                  <div className="text-4xl font-black text-emerald-400 font-mono tracking-tight">{reclaimedHours}+ Hrs</div>
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-1">Reclaimed Working Hours / Mo</div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-3xl font-black text-[#00f2fe] font-mono tracking-tight">₹{monthlySavings.toLocaleString('en-IN')}*</div>
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-1">Operational Value Restored</div>
                </div>
              </div>
            </div>
          </section>

          {/* 15-MINUTE TECHNICAL STRATEGY SCHEDULER */}
          <section id="scheduler" className="relative z-10 py-20 px-6 max-w-4xl mx-auto border-t border-white/10">
            <div className="text-center mb-10">
              <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-widest">Direct Consultation</span>
              <h2 className="text-2xl md:text-3xl font-black mt-1 text-white">Schedule 15-Min Strategy Consultation</h2>
              <p className="text-xs font-mono text-slate-400 mt-2">Direct discussion on technical stack, databases, and deployment timelines</p>
            </div>

            <div className="p-7 rounded-3xl bg-white/[0.03] border border-cyan-500/30 backdrop-blur-xl shadow-2xl grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-2 uppercase">Select Preferred Day</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Today', 'Tomorrow', 'Friday'].map(day => (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`py-2 px-3 rounded-xl border text-xs font-mono font-bold cursor-pointer transition-all ${
                          selectedDay === day 
                            ? 'bg-[#00f2fe] text-black border-[#00f2fe]' 
                            : 'bg-black/40 border-white/10 text-slate-300 hover:bg-white/5'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-2 uppercase">Select Time Window</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['11:00 AM', '03:30 PM', '07:00 PM'].map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-xl border text-xs font-mono font-bold cursor-pointer transition-all ${
                          selectedTime === time 
                            ? 'bg-[#9d4edd] text-white border-[#9d4edd]' 
                            : 'bg-black/40 border-white/10 text-slate-300 hover:bg-white/5'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 text-center space-y-4 shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-[#00f2fe]">
                  <Video size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Google Meet Technical Call</h4>
                  <p className="text-xs font-mono text-cyan-300 mt-1">{selectedDay} at {selectedTime} IST</p>
                </div>
                <button
                  onClick={handleScheduleCall}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Clock size={15} /> {scheduleStatus ? 'CONFIRMING...' : 'CONFIRM CONSULTATION'}
                </button>
              </div>
            </div>
          </section>

          {/* REAL GITHUB ENGINEERED DEPLOYMENTS */}
          <section id="portfolio" className="relative z-10 py-20 px-6 max-w-6xl mx-auto border-t border-white/10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00f2fe] mb-3">
                <GithubIcon className="w-3.5 h-3.5 fill-current" /> verified production repos: @jackjacky1786-hash
              </div>
              <h2 className="text-3xl md:text-4xl font-black mt-1 text-white">Engineered Deployments</h2>
              <p className="text-xs font-mono text-slate-400 mt-2">Active production web tools, ERP portals, and responsive architectures</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.map((item, idx) => (
                <div key={idx} className={`p-7 rounded-3xl bg-gradient-to-b ${item.gradient} border border-white/10 backdrop-blur-xl flex flex-col justify-between colorful-glow transition-all`}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono uppercase font-bold tracking-wider ${item.color}`}>{item.category}</span>
                      <a href={item.githubLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="View Source on GitHub">
                        <GithubIcon className="w-4 h-4 fill-current" />
                      </a>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-300 mb-6 leading-relaxed">{item.summary}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.tags.map((t, i) => (
                        <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/10 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                      <a 
                        href={item.demoLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#00f2fe] hover:underline"
                      >
                        Inspect Deployment <ExternalLink size={13} />
                      </a>
                      <a 
                        href={item.githubLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white"
                      >
                        Source Code &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* INTERACTIVE PROJECT COST & DELIVERY ESTIMATOR */}
          <section id="estimator" className="relative z-10 py-20 px-6 max-w-4xl mx-auto border-t border-white/10">
            <div className="text-center mb-10">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Financial Transparency</span>
              <h2 className="text-2xl md:text-3xl font-black mt-1 text-white">Project Cost & Timeline Estimator</h2>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl grid md:grid-cols-3 gap-6 shadow-2xl">
              <div className="md:col-span-2 space-y-5">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-2 uppercase">Deployment Platform</label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'web', name: 'Web App' },
                      { id: 'mobile', name: 'Mobile App' },
                      { id: 'full', name: 'Web + Mobile' },
                    ].map((item) => (
                      <button 
                        key={item.id} 
                        onClick={() => setPlatform(item.id)}
                        className={`py-2.5 px-2 text-xs font-mono font-bold rounded-lg border cursor-pointer transition-all ${platform === item.id ? 'bg-[#00f2fe]/20 border-[#00f2fe] text-[#00f2fe]' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'}`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-2 uppercase">Application Scope</label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['standard', 'advanced', 'custom'].map((lvl) => (
                      <button 
                        key={lvl}
                        onClick={() => setComplexity(lvl)}
                        className={`py-2.5 px-2 text-xs font-mono font-bold rounded-lg border capitalize cursor-pointer transition-all ${complexity === lvl ? 'bg-[#9d4edd]/20 border-[#9d4edd] text-[#9d4edd]' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'}`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-black/60 border border-amber-500/40 flex flex-col justify-center text-center shadow-xl">
                <span className="text-[10px] font-mono text-amber-400 tracking-widest uppercase">ESTIMATED INVESTMENT</span>
                <div className="text-3xl font-black text-white font-mono my-2 tracking-tight">₹{estimatedCost.toLocaleString('en-IN')}*</div>
                <span className="text-xs font-mono text-slate-400 mb-4">Delivery SLA: {timeline}</span>
                <button 
                  onClick={handleCopyEstimate}
                  className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono font-bold flex items-center justify-center gap-1.5 border border-white/10 text-white cursor-pointer transition-all"
                >
                  <Copy size={13} /> {copiedEstimate ? 'COPIED!' : 'COPY ESTIMATE'}
                </button>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="relative z-10 py-20 px-6 max-w-3xl mx-auto border-t border-white/10">
            <div className="text-center mb-10">
              <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-widest">Inquiries</span>
              <h2 className="text-2xl md:text-3xl font-black mt-1 text-white">Frequently Addressed Queries</h2>
            </div>

            <div className="space-y-3.5">
              {[
                {
                  q: "How does AVR Tech Labs ensure practically ₹0 monthly server costs?",
                  a: "By leveraging modern serverless edge architecture (such as Vercel and Netlify) paired with MongoDB Atlas cloud tiers. For small and mid-sized web, mobile, and institutional portals, traffic falls well within free tier compute allocations."
                },
                {
                  q: "Will we own 100% of the project's source code?",
                  a: "Yes. Once the final sprint milestone is verified, the GitHub repository is transferred directly to your account. You maintain 100% IP ownership with zero vendor lock-in."
                },
                {
                  q: "Can you build customized School & College ERP portals and cross-platform apps?",
                  a: "Yes. We create bespoke dashboards for marks entry, student management, fee generation, automated WhatsApp communication, as well as native React Native mobile applications."
                }
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left font-bold text-sm flex justify-between items-center cursor-pointer hover:text-[#00f2fe] transition-colors"
                  >
                    <span>{item.q}</span>
                    {openFaq === idx ? <ChevronUp size={16} className="text-[#00f2fe]" /> : <ChevronDown size={16} />}
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 text-xs text-slate-300 font-light leading-relaxed border-t border-white/5 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="relative z-10 py-24 px-6 max-w-6xl mx-auto border-t border-white/10">
            <div className="p-8 md:p-12 rounded-3xl bg-[#080e1e]/90 border border-white/10 backdrop-blur-2xl shadow-2xl">
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Side: Brand Context & Direct Channels */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#00f2fe] uppercase font-bold">
                      START A CONVERSATION
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 leading-tight">
                      Ready to Launch Your Next Software Platform?
                    </h2>
                    <p className="text-sm text-slate-300 mt-4 leading-relaxed font-light">
                      Whether you require a custom web application, an institute ERP, a mobile app, or a UI/UX redesign, let's connect directly.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[#00f2fe] shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Official Communication</div>
                        <a href="mailto:contact@avrtechlabs.com" className="text-sm font-bold text-white hover:text-[#00f2fe] transition-colors">
                          contact@avrtechlabs.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <Clock size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase">SLA Turnaround</div>
                        <span className="text-sm font-bold text-white">Response within 24 Hours</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-[#9d4edd] shrink-0">
                          <Video size={18} />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Consultation</div>
                          <span className="text-sm font-bold text-white">Schedule 15-Min Quick Call</span>
                        </div>
                      </div>
                      <a 
                        href="https://wa.me/919999999999?text=Hello%20AVR%20Tech%20Labs%2C%20I%20want%20to%20schedule%20a%2015-minute%20consultation" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#00f2fe] text-[#00f2fe] transition-all"
                        title="Schedule Call"
                      >
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="lg:col-span-7">
                  <form onSubmit={handleSendInquiry} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-2">Your Name</label>
                        <input 
                          type="text" 
                          required 
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="example:AVR"
                          className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 text-white text-xs font-mono outline-none focus:border-[#00f2fe] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-2">Work Email</label>
                        <input 
                          type="email" 
                          required 
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="example:avrtechlabs@gmail.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 text-white text-xs font-mono outline-none focus:border-[#00f2fe] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">Select Requirement</label>
                      <div className="relative">
                        <select 
                          required
                          value={contactRequirement}
                          onChange={(e) => setContactRequirement(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#030712] border border-[#00f2fe]/60 text-white text-xs font-mono outline-none focus:ring-1 focus:ring-[#00f2fe] appearance-none cursor-pointer pr-10 shadow-lg shadow-cyan-500/10"
                        >
                          <option value="" disabled className="bg-[#030712] text-slate-400">Choose a category</option>
                          <option value="Full-Stack Web App (React / Node.js)" className="bg-[#030712] text-white">Full-Stack Web App (React / Node.js)</option>
                          <option value="Mobile Application (React Native)" className="bg-[#030712] text-white">Mobile Application (React Native)</option>
                          <option value="Institution / School ERP Portal" className="bg-[#030712] text-white">Institution / School ERP Portal</option>
                          <option value="UI/UX Modernization & Redesign" className="bg-[#030712] text-white">UI/UX Modernization & Redesign</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-cyan-400 pointer-events-none" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-[#00f2fe] hover:bg-[#00d8e4] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-95"
                      >
                        <Send size={15} /> {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                      </button>
                      <button 
                        type="button"
                        onClick={handleWhatsAppContact}
                        className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-95"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white" /> Chat via WhatsApp
                      </button>
                    </div>

                  </form>
                </div>

              </div>
            </div>
          </section>
        </main>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer shadow-xl"
          title="Back to Top"
        >
          <ArrowUp size={18} />
        </button>

        <a 
          href="https://wa.me/9030025364?text=Hello%20AVR%20Tech%20Labs" 
          target="_blank" 
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-[#25D366]/40"
          title="Direct WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 fill-white drop-shadow" />
        </a>
      </div>

      {/* Corporate Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 px-6 text-center text-xs font-mono text-slate-500">
        <div className="flex justify-center mb-3">
          <img 
            src="/avr-logo.png" 
            alt="AVR Emblem" 
            className="w-10 h-10 object-contain opacity-75"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        <div>© 2026 AVR TECH LABS. ARCHITECTED FOR SPEED & EFFICIENCY.</div>
      </footer>
    </div>
  );
}