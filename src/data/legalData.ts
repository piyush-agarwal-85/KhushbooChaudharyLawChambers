import { PracticeArea, ResearchService, Article, FAQ, Testimonial, PolicySection } from '../types';
import { IMAGES } from '../assets/images';

export const CHAMBER_INFO = {
  name: "KHUSHBOO CHAUDHARY LAW CHAMBERS",
  founder: "Advocate Khushboo Chaudhary",
  role: "Founder & Advocate, Khushboo Chaudhary Law Chambers",
  tagline: "Advocates · Legal Research · Advisory",
  motto: "Precision in Law. Strength in Representation.",
  bio: "A passionate legal professional with experience in litigation, legal research and advisory, Advocate Khushboo Chaudhary founded Khushboo Chaudhary Law Chambers with a vision to provide thoughtful, research-based and result-oriented legal solutions. Her practice is guided by a strong commitment to integrity, professionalism and the effective representation of clients across diverse areas of law.",
  blurb: "A modern legal practice committed to strategic legal advice, rigorous research and effective representation across diverse areas of law.",
  chamberAddress: "Chamber No. 346A, Block 1, Lawyers' Chambers, Delhi High Court, New Delhi - 110003",
  officeAddress: "G-22, LGF, Jangpura Ext Rd, near eros cinema, Jangpura, Block H, Jungpura Extension, New Delhi, Delhi 110014",
  address: "Chamber No. 346A, Block 1, Lawyers' Chambers, Delhi High Court, New Delhi - 110003",
  phone: "+91 8630987774",
  email: "contact@advocatekhushboochaudhary.com",
  hours: "Monday to Saturday 10:00 AM to 6:00 PM",
  jurisdiction: "Delhi High Court, Supreme Court of India, District Courts & Tribunals, New Delhi",
  socials: {
    linkedin: "https://www.linkedin.com/company/khushboo-chaudhary-law-chambers/",
    x: "https://x.com/kclawchamber",
    instagram: "https://www.instagram.com/khushboochaudharylawchambers/",
  }
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "criminal-law",
    title: "Criminal Law",
    shortDescription: "Representation in criminal matters including bail, trials, appeals and quashing proceedings.",
    fullDescription: "Our criminal practice encompasses robust defense and representation at all stages of criminal proceedings—from police investigation, anticipatory bail, and regular bail to full trial advocacy, appellate reviews, and quashing petitions under Section 482 of the CrPC / BNSS.",
    iconName: "Gavel",
    keySpecializations: [
      "Anticipatory and Regular Bail Applications",
      "Trial Advocacy before Sessions & Magistrate Courts",
      "Quashing of FIRs & Chargesheets before High Court",
      "Economic Offences, Cheating & Financial Fraud",
      "Appeals & Criminal Revision Petitions"
    ],
    statutes: ["Bharatiya Nyaya Sanhita (BNS)", "Code of Criminal Procedure (CrPC/BNSS)", "Indian Evidence Act (BSA)"]
  },
  {
    id: "civil-litigation",
    title: "Civil Litigation",
    shortDescription: "Representation in property disputes, recovery suits, injunctions, declarations, and succession matters.",
    fullDescription: "Our civil litigation team delivers strategic advocacy across original, appellate, and revisional proceedings before District Courts and the Delhi High Court. We assist clients in complex property title disputes, partition suits, specific performance of agreements, permanent and mandatory injunctions, summary money suits under Order 37, and execution of decrees.",
    iconName: "Scale",
    keySpecializations: [
      "Title, Partition, Possession & Property Disputes",
      "Temporary & Permanent Injunctions (Order 39 CPC)",
      "Money Recovery, Summary Suits & Execution of Decrees",
      "Specific Performance of Contracts & Declaratory Suits",
      "Probate, Letters of Administration & Succession Disputes"
    ],
    statutes: ["Code of Civil Procedure, 1908 (CPC)", "Specific Relief Act, 1963", "Transfer of Property Act, 1882", "Indian Succession Act, 1925"]
  },
  {
    id: "commercial-disputes",
    title: "Commercial Disputes",
    shortDescription: "High-stakes representation before Commercial Courts, insolvency tribunals (NCLT), and appellate benches.",
    fullDescription: "We provide aggressive and nuanced representation for corporate entities, financial institutions, directors, and partners in high-value commercial disputes governed by the Commercial Courts Act, 2015. Our work encompasses urgent interim reliefs, summary judgments, shareholder disputes, insolvency proceedings under IBC, and enforcement of domestic and international awards.",
    iconName: "Building2",
    keySpecializations: [
      "Commercial Suits & Pre-Institution Mediation",
      "Corporate Insolvency Resolution & Liquidation (IBC)",
      "Shareholder Disputes, Oppression & Mismanagement (NCLT)",
      "Breach of Commercial Contracts & Liquidated Damages",
      "Enforcement of Domestic & Foreign Commercial Decrees"
    ],
    statutes: ["Commercial Courts Act, 2015", "Companies Act, 2013", "Insolvency and Bankruptcy Code, 2016", "Indian Contract Act, 1872"]
  },
  {
    id: "service-law",
    title: "Service Law",
    shortDescription: "Advocacy for government officers, armed forces personnel, PSU executives, and public employees.",
    fullDescription: "Committed to safeguarding the administrative rights and statutory protections of civil servants, armed forces officers, university professors, and public sector employees, our service law practice handles central and state administrative matters. We represent clients in disciplinary inquiries, unlawful suspensions, promotions, seniority list challenges, and pension litigation before the Central Administrative Tribunal (CAT), Armed Forces Tribunal (AFT), and High Courts.",
    iconName: "Briefcase",
    keySpecializations: [
      "Central Administrative Tribunal (CAT) Original Applications",
      "Armed Forces Tribunal (AFT) Service & Pension Appeals",
      "Disciplinary Inquiries, Charge-sheets & Penalty Appeals",
      "Seniority Disputes, Promotion Supersession & Pay Anomalies",
      "Writ Petitions challenging Arbitrary Dismissal (Articles 226 & 311)"
    ],
    statutes: ["Administrative Tribunals Act, 1985", "Central Civil Services (CCS) Rules", "Armed Forces Tribunal Act, 2007", "Constitution of India (Articles 309–311)"]
  },
  {
    id: "litigation-dispute",
    title: "Litigation & Dispute Resolution",
    shortDescription: "Strategic representation in civil and commercial disputes before various forums and courts.",
    fullDescription: "We provide comprehensive dispute resolution services before the Delhi High Court, District Courts, National Consumer Disputes Redressal Commission (NCDRC), and specialized tribunals. Our approach blends relentless courtroom advocacy with pragmatic settlement strategies.",
    iconName: "Scale",
    keySpecializations: [
      "Commercial & Contractual Suits",
      "Property, Title & Injunction Proceedings",
      "Execution and Recovery Petitions",
      "Consumer Protection & Forum Appeals",
      "Writ Petitions under Article 226/32"
    ],
    statutes: ["Code of Civil Procedure (CPC)", "Specific Relief Act", "Commercial Courts Act"]
  },
  {
    id: "corporate-commercial",
    title: "Corporate & Commercial Law",
    shortDescription: "Legal advisory for businesses, contracts, compliance, and commercial disputes.",
    fullDescription: "We assist founders, emerging enterprises, and established corporate entities navigate the complex regulatory and commercial landscape in India, providing strategic counsel on structuring, board governance, risk mitigation, and commercial transactions.",
    iconName: "Building2",
    keySpecializations: [
      "Company Formation & Regulatory Compliance",
      "Shareholder & Joint Venture Agreements",
      "Corporate Due Diligence & Audits",
      "Insolvency & Bankruptcy (IBC) Proceedings",
      "Commercial Lease & Franchise Structuring"
    ],
    statutes: ["Companies Act, 2013", "Insolvency and Bankruptcy Code, 2016", "FEMA Regulations"]
  },
  {
    id: "contract-documentation",
    title: "Contract & Documentation",
    shortDescription: "Drafting, vetting and negotiation of commercial and personal contracts and legal documents.",
    fullDescription: "Every solid commercial relationship is anchored in precision drafting. We specialize in drafting unambiguous, ironclad contracts tailored to protect client rights, limit liabilities, and prevent expensive future litigation.",
    iconName: "FileText",
    keySpecializations: [
      "Master Service Agreements & SOWs",
      "Non-Disclosure & Confidentiality Agreements (NDAs)",
      "Vendor, Distribution & Licensing Contracts",
      "Employment Agreements & Restrictive Covenants",
      "Wills, Family Settlements & Trust Deeds"
    ],
    statutes: ["Indian Contract Act, 1872", "Indian Stamp Act", "Registration Act, 1908"]
  },
  {
    id: "arbitration-adr",
    title: "Arbitration & ADR",
    shortDescription: "Alternative dispute resolution through arbitration, mediation and conciliation.",
    fullDescription: "With court dockets increasingly burdened, alternative dispute resolution offers confidentiality, speed, and specialized adjudication. Khushboo Chaudhary Law Chambers represents parties in domestic and international commercial arbitrations, enforcement actions, and court-assisted mediator sessions.",
    iconName: "Gavel",
    keySpecializations: [
      "Section 9 Interim Measures before Courts",
      "Appointment of Arbitrators under Section 11",
      "Tribunal Pleadings & Evidentiary Hearings",
      "Section 34 Arbitral Award Challenge Proceedings",
      "Commercial Conciliation and Mediation Representation"
    ],
    statutes: ["Arbitration and Conciliation Act, 1996", "UNCITRAL Model Law"]
  },
  {
    id: "legal-research-opinions",
    title: "Legal Research & Opinions",
    shortDescription: "In-depth legal research, case analysis and well-reasoned legal opinions.",
    fullDescription: "A hallmark of Khushboo Chaudhary Law Chambers is our scholarly, meticulous research wing. We produce exhaustive case law briefs, statutory interpretations, and formal legal opinions that serve as the foundation for high-stakes litigation and institutional policy decisions.",
    iconName: "BookOpen",
    keySpecializations: [
      "Complex Statutory Interpretation",
      "Judicial Precedent Mapping & Analysis",
      "Formal Legal Advisory Opinions",
      "Legislative Vetting & Policy Analysis",
      "Comparative Jurisprudence Studies"
    ],
    statutes: ["Constitutional Precedents", "Supreme Court Constitution Bench Rulings"]
  },
  {
    id: "constitutional-human-rights",
    title: "Constitutional & Human Rights Law",
    shortDescription: "Matters involving constitutional remedies, fundamental rights and public law issues.",
    fullDescription: "Dedicated to the defense of fundamental freedoms and administrative fairness, we represent citizens and institutions in constitutional writ petitions before the High Courts and Supreme Court against arbitrary state actions.",
    iconName: "ShieldCheck",
    keySpecializations: [
      "Article 226 & Article 32 Writ Petitions (Habeas Corpus, Mandamus, Certiorari)",
      "Public Interest Litigation (PIL)",
      "Service & Administrative Law Grievances",
      "Right to Equality, Due Process & Fair Trial",
      "Human Rights Violations & State Accountability"
    ],
    statutes: ["Constitution of India", "Protection of Human Rights Act, 1993"]
  },
  {
    id: "technology-ai-cyber",
    title: "Technology, AI & Cyber Law",
    shortDescription: "Legal advisory on technology, data protection, cyber crime and emerging regulatory issues.",
    fullDescription: "At the intersection of code and constitution, we advise tech startups, online platforms, and individuals on data privacy mandates (DPDP Act), AI ethics, intermediary liability, and representation in cyber crime and cyber fraud complaints.",
    iconName: "Cpu",
    keySpecializations: [
      "Digital Personal Data Protection (DPDP Act) Compliance",
      "Artificial Intelligence (AI) Policy & IP Risk Audits",
      "Intermediary Liability & IT Act Compliance",
      "Cyber Crime, Phishing & Data Breach Defense",
      "Software Licensing & SaaS Terms of Service"
    ],
    statutes: ["Information Technology Act, 2000", "Digital Personal Data Protection Act, 2023"]
  },
  {
    id: "international-law",
    title: "International Law",
    shortDescription: "Strategic counsel in private and public international law, cross-border commercial transactions, extradition, and foreign award enforcement.",
    fullDescription: "Khushboo Chaudhary Law Chambers provides sophisticated legal counsel and representation in international and cross-border matters. We advise multinational enterprises, foreign corporations, non-resident Indians (NRIs), and domestic entities navigating complex private and public international law. Our capabilities encompass cross-border joint ventures and commercial agreements, international commercial arbitration, enforcement of foreign judgments and arbitral awards in Indian courts, conflict of laws, extradition proceedings, and compliance with foreign investment and FEMA regulations.",
    iconName: "Globe",
    keySpecializations: [
      "Cross-Border Commercial Transactions & International Contracts",
      "International Commercial Arbitration (UNCITRAL, ICC, SIAC Rules)",
      "Enforcement of Foreign Judgments, Decrees & Arbitral Awards in India",
      "Private International Law, Conflict of Laws & Cross-Border Succession",
      "Extradition Proceedings & Mutual Legal Assistance (MLAT) Advisory",
      "FEMA, Cross-Border Regulatory Compliance & Foreign Investment Structuring"
    ],
    statutes: [
      "Arbitration and Conciliation Act, 1996 (Part II - Foreign Awards)",
      "Foreign Exchange Management Act, 1999 (FEMA)",
      "Code of Civil Procedure, 1908 (Sections 13, 14 & 44A - Foreign Judgments)",
      "Extradition Act, 1962 & International Treaties",
      "New York Convention & UNCITRAL Model Law on International Commercial Arbitration"
    ]
  }
];

export const RESEARCH_SERVICES: ResearchService[] = [
  {
    id: "case-law-research",
    title: "Case Law Research",
    description: "Research and analysis of Supreme Court, High Court and tribunal judgments relevant to your matter.",
    iconName: "Gavel",
    examples: ["Precedent tracking across all High Courts", "Overruled vs Good Law verifications", "Ratio decidendi vs Obiter dicta analysis"]
  },
  {
    id: "statutory-regulatory",
    title: "Statutory & Regulatory Research",
    description: "Interpretation and analysis of central and state laws, rules, regulations and policy frameworks.",
    iconName: "FileCheck",
    examples: ["New penal codes transition (BNS/BNSS/BSA)", "Sectoral regulatory compliance (SEBI, RBI, MCA)", "State-level amendments and notifications"]
  },
  {
    id: "comparative-legal",
    title: "Comparative Legal Research",
    description: "Comparative study of laws and legal frameworks across jurisdictions.",
    iconName: "Scale",
    examples: ["Commonwealth & US jurisprudential benchmarks", "Cross-border data protection & GDPR comparisons", "International arbitration best practices"]
  },
  {
    id: "opinions-memoranda",
    title: "Legal Opinions & Memoranda",
    description: "Well-reasoned legal opinions, issue notes and research memoranda.",
    iconName: "BookOpen",
    examples: ["Actionable risk assessment memos", "Pre-litigation merit evaluations", "Board governance advisory notes"]
  },
  {
    id: "policy-legislative",
    title: "Policy & Legislative Research",
    description: "Research support for policy analysis, draft legislation and regulatory reforms.",
    iconName: "Landmark",
    examples: ["Stakeholder consultation submissions", "White papers on proposed bills", "Impact assessments on legislative changes"]
  },
  {
    id: "emerging-areas",
    title: "Emerging Areas of Law",
    description: "Research on technology, data protection, AI, cyber law and other evolving legal areas.",
    iconName: "Laptop",
    examples: ["Generative AI copyright & fair use tests", "Autonomous agents liability frameworks", "Digital asset forensics and evidentiary standards"]
  }
];

export const INSIGHTS_ARTICLES: Article[] = [
  {
    id: "ai-surveillance-privacy",
    title: "AI-Powered Surveillance and the Right to Privacy",
    category: "Technology, AI & Cyber Law",
    type: "RESEARCH ARTICLE",
    date: "12 Aug 2026",
    readTime: "7 min read",
    summary: "An analysis of the legal, constitutional and policy implications of AI-driven surveillance systems in India, with a focus on the right to privacy, data protection and state accountability.",
    content: "The rapid integration of automated facial recognition systems (AFRS), predictive policing algorithms, and algorithmic social monitoring tools by law enforcement agencies marks a paradigm shift in Indian jurisprudence. Under the constitutional benchmark established by the nine-judge Constitution Bench in Justice K.S. Puttaswamy (Retd.) v. Union of India, any state intrusion into individual privacy must satisfy the fourfold test of legality, legitimate aim, proportionality, and procedural safeguards. This research paper evaluates how contemporary AI surveillance mechanisms interact with the Digital Personal Data Protection Act, 2023, scrutinizing the absence of algorithmic audit standards and statutory transparency mandates.",
    image: IMAGES.heroLawScalesBooks,
    tags: ["Constitutional Law", "Privacy", "AI & Law", "Data Protection"],
    featured: true
  },
  {
    id: "money-laundering-pmla",
    title: "Evolution and Enforcement of Money Laundering Laws in India",
    category: "Criminal Law",
    type: "RESEARCH ARTICLE",
    date: "25 Jul 2026",
    readTime: "9 min read",
    summary: "A study of the legislative framework, enforcement mechanisms and key judicial interpretations shaping India's anti-money laundering regime.",
    content: "The Prevention of Money Laundering Act, 2002 (PMLA) has undergone sweeping transformations through successive amendments and judicial pronouncements. The Supreme Court's landmark ruling in Vijay Madanlal Choudhary and subsequent review developments have sparked vital legal debates regarding the twin conditions for bail under Section 45, the evidentiary admissibility of statements recorded under Section 50, and the jurisdictional threshold of predicate offences. This analysis unpacks practical litigation defenses for corporate directors and respondents facing provisional attachment orders.",
    image: IMAGES.fountainPenLegalDesk,
    tags: ["Criminal Law", "Money Laundering", "Judgments", "Corporate Law"]
  },
  {
    id: "constitutional-digital-governance",
    title: "Constitutional Perspective on Digital Governance",
    category: "Constitutional Law",
    type: "INSIGHT",
    date: "10 Jul 2026",
    readTime: "6 min read",
    summary: "Exploring the constitutional dimensions of digital governance in India, including data protection, state surveillance and fundamental rights.",
    content: "As citizen services, identity systems, and direct benefit transfers become fundamentally digital, administrative law must adapt to algorithmic decision-making. When algorithms deny welfare access or disqualify citizens without human review, Article 14 (equality before law and non-arbitrariness) and Article 21 (right to dignity and livelihood) are directly invoked. This article examines emergent jurisprudence surrounding procedural due process in algorithmic governance.",
    image: IMAGES.supremeCourtDelhi,
    tags: ["Constitutional Law", "Digital Governance", "Human Rights"]
  },
  {
    id: "tech-criminal-justice",
    title: "Interplay Between Technology and Criminal Justice",
    category: "Criminal Law",
    type: "RESEARCH ARTICLE",
    date: "28 Jun 2026",
    readTime: "8 min read",
    summary: "An examination of the use of digital evidence, electronic records and emerging technologies in criminal investigations and trials.",
    content: "With the enactment of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), the framework for proving electronic records has superseded Section 65B of the Indian Evidence Act. Issues of hash value verification, chain of custody for mobile extraction tools, and forensic integrity of cloud data have moved to the center of criminal defense advocacy.",
    image: IMAGES.classicalCourtColumns,
    tags: ["Criminal Law", "AI & Law", "Data Protection"]
  },
  {
    id: "arbitration-recent-trends",
    title: "Arbitration in India: Recent Trends and Judicial Approach",
    category: "Litigation & Dispute Resolution",
    type: "INSIGHT",
    date: "14 Jun 2026",
    readTime: "5 min read",
    summary: "An overview of recent judicial trends and their impact on the effectiveness of arbitration as a dispute resolution mechanism in India.",
    content: "India's pro-arbitration trajectory has been reinforced by pivotal rulings regarding minimal judicial intervention under Section 34, strict adherence to statutory timelines under Section 29A, and the seven-judge bench clarity on unstamped arbitration agreements. This article provides practical guidance for drafting dispute resolution clauses that survive judicial scrutiny.",
    image: IMAGES.fountainPenLegalDesk,
    tags: ["Judgments", "Corporate Law", "Litigation & Dispute Resolution"]
  },
  {
    id: "human-rights-access-justice",
    title: "Human Rights and Access to Justice",
    category: "Human Rights & Public Law",
    type: "RESEARCH ARTICLE",
    date: "02 Jun 2026",
    readTime: "6 min read",
    summary: "Understanding the challenges and opportunities in strengthening access to justice for marginalised communities in India.",
    content: "Access to justice is not merely a procedural right but a constitutional imperative under Article 39A. This study explores the institutional efficacy of legal aid mechanisms, legal literacy programs, and pro bono litigation frameworks in bridging socio-economic disparities across trial courts.",
    image: IMAGES.classicalCourtColumns,
    tags: ["Human Rights", "Constitutional Law", "Policy Analysis"]
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "How can I book a consultation?",
    answer: "You can book a consultation by clicking the 'Book a Consultation' button at the top of the page, filling in your preferred dates, mode of contact (In-Person Chamber at Delhi High Court, Video Conference, or Telephone), and a brief overview of your legal requirement. Our team will review your matter and confirm an appointment slot within 24 business hours."
  },
  {
    id: "faq-2",
    question: "Do you provide legal research services for academic purposes?",
    answer: "Yes, our dedicated research wing undertakes specialized doctrinal research, statutory analysis, and comparative jurisprudence studies for academic institutions, legal scholars, policy think tanks, and bar committees."
  },
  {
    id: "faq-3",
    question: "What areas of law do you practice in?",
    answer: "Khushboo Chaudhary Law Chambers practices across Criminal Law, Commercial & Civil Litigation, Corporate Advisory, Contract Drafting & Vetting, Arbitration & ADR, Constitutional Writ Practice, and Technology & Cyber Law before the Delhi High Court, Supreme Court, and specialized tribunals."
  },
  {
    id: "faq-4",
    question: "Where are your chambers and office located?",
    answer: "We operate from two locations in New Delhi: our Chamber Address at Chamber No. 346A, Block 1, Lawyers' Chambers, Delhi High Court, New Delhi - 110003; and our Office Address at G-22, LGF, Jangpura Ext Rd, near eros cinema, Jangpura, Block H, Jungpura Extension, New Delhi, Delhi 110014."
  },
  {
    id: "faq-5",
    question: "How do you ensure client confidentiality?",
    answer: "Client confidentiality is an inviolable ethical tenet at Khushboo Chaudhary Law Chambers. All communications, documents, and trial strategies are protected under advocate-client privilege and handled under strict confidentiality protocols."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Advocate Khushboo Chaudhary's strategic clarity and meticulous preparation were instrumental in securing urgent relief before the Delhi High Court. Her command over criminal procedure and evidentiary nuance is truly exceptional.",
    client: "Senior Corporate Executive",
    matter: "Economic Offence & High Court Revision"
  },
  {
    id: "test-2",
    quote: "Khushboo Chaudhary Law Chambers provided us with an exhaustive legal opinion on cross-border data protection risks that allowed our enterprise to confidently launch in India without regulatory friction. Thorough, prompt, and dependable.",
    client: "Chief Technology Officer",
    matter: "DPDP Act Regulatory Compliance"
  },
  {
    id: "test-3",
    quote: "In our commercial dispute arbitration, their research wing uncovered critical precedents that directly swayed the tribunal's perspective on contractual liquidated damages. An outstanding chamber with genuine dedication.",
    client: "Infrastructure Development Firm",
    matter: "Commercial Arbitration & Section 9 Interim Relief"
  }
];

export const PRIVACY_POLICY_SECTIONS: PolicySection[] = [
  {
    number: "01",
    title: "Information We Collect",
    content: [
      "We may collect certain personal information that you voluntarily provide to us, such as your name, email address, phone number, and any other information you share through our contact forms or when you book a consultation.",
      "We may also collect non-personal information such as browser type, device information, pages visited, and other usage data automatically when you interact with this website."
    ]
  },
  {
    number: "02",
    title: "How We Use Information",
    content: [
      "The information we collect is used solely to:",
      "• Respond to your inquiries and provide information about our services",
      "• Schedule and manage consultations and appointments",
      "• Improve our website, legal research publications, and user experience",
      "• Comply with legal and regulatory obligations under Indian law"
    ]
  },
  {
    number: "03",
    title: "Cookies and Tracking Technologies",
    content: [
      "Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyse website traffic, and understand user behaviour.",
      "You can choose to disable cookies through your browser settings, though some features of the website may not function properly as a consequence."
    ]
  },
  {
    number: "04",
    title: "Sharing of Information",
    content: [
      "We do not sell, rent or trade your personal information. We may share your information only in the following circumstances: (i) with your express consent, (ii) to comply with legal obligations, court orders or regulatory mandates, or (iii) with trusted service providers who assist us in operating our website under strict confidentiality agreements."
    ]
  },
  {
    number: "05",
    title: "Data Security",
    content: [
      "We take reasonable technical and organisational measures to protect your personal information from unauthorised access, disclosure, alteration or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security."
    ]
  },
  {
    number: "06",
    title: "Your Rights",
    content: [
      "You have the right to access, correct or request deletion of your personal information held by us. If you wish to exercise these rights, please contact us using the details provided below."
    ]
  },
  {
    number: "07",
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites for reference or academic purposes. We are not responsible for the privacy practices or content of such external websites."
    ]
  },
  {
    number: "08",
    title: "Retention of Data",
    content: [
      "We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy or as required by applicable Indian laws and Bar Council regulations."
    ]
  },
  {
    number: "09",
    title: "Children's Privacy",
    content: [
      "Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children."
    ]
  },
  {
    number: "10",
    title: "Updates to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date."
    ]
  },
  {
    number: "11",
    title: "Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:",
      "Email: contact@advocatekhushboochaudhary.com",
      "Phone: +91 8630987774",
      "Chamber Address: Chamber No. 346A, Block 1, Lawyers' Chambers, Delhi High Court, New Delhi - 110003",
      "Office Address: G-22, LGF, Jangpura Ext Rd, near eros cinema, Jangpura, Block H, Jungpura Extension, New Delhi, Delhi 110014"
    ]
  }
];

export const TERMS_SECTIONS: PolicySection[] = [
  {
    number: "01",
    title: "Acceptance of Terms",
    content: [
      "By accessing and using this website, you agree to be bound by these Terms and Conditions, our Disclaimer and Privacy Policy. If you do not agree with any part of these terms, please do not use this website."
    ]
  },
  {
    number: "02",
    title: "Purpose of the Website",
    content: [
      "This website is intended solely for general information purposes about Khushboo Chaudhary Law Chambers and the areas of legal practice. The content provided on this website does not constitute legal advice and should not be relied upon as such."
    ]
  },
  {
    number: "03",
    title: "No Solicitation or Advertisement",
    content: [
      "In accordance with the rules of the Bar Council of India, this website does not constitute an advertisement or solicitation. The information contained herein is not intended to solicit or induce the engagement of a lawyer or law firm by any person."
    ]
  },
  {
    number: "04",
    title: "No Lawyer-Client Relationship",
    content: [
      "Access to this website, use of its content, or communication through this website (including submission of inquiries or consultation booking requests) does not create, and shall not be deemed to create, a lawyer-client relationship between you and Khushboo Chaudhary Law Chambers."
    ]
  },
  {
    number: "05",
    title: "Use of Information",
    content: [
      "The information provided on this website is for general informational purposes only. While we make reasonable efforts to ensure accuracy, we do not warrant the completeness, reliability or suitability of the information for any particular purpose. Any reliance you place on such information is strictly at your own risk."
    ]
  },
  {
    number: "06",
    title: "Confidentiality",
    content: [
      "Please do not share any confidential, sensitive or time-bound information through this website or via email, as transmission over the internet is not completely secure. Any information sent through this website will not be treated as privileged or confidential prior to formal engagement."
    ]
  },
  {
    number: "07",
    title: "External Links",
    content: [
      "This website may contain links to third-party websites for convenience. We do not endorse or take responsibility for the content, accuracy or practices of such external websites."
    ]
  },
  {
    number: "08",
    title: "Limitation of Liability",
    content: [
      "Khushboo Chaudhary Law Chambers shall not be liable for any loss, damage or consequence arising from the use of, or reliance on, the information provided on this website."
    ]
  },
  {
    number: "09",
    title: "Changes to Terms",
    content: [
      "We reserve the right to modify or update these Terms and Conditions at any time without prior notice. Continued use of the website after any changes constitutes your acceptance of the revised terms."
    ]
  },
  {
    number: "10",
    title: "Governing Law and Jurisdiction",
    content: [
      "These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts at New Delhi."
    ]
  }
];
