export interface Project {
  slug: string;
  title: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  tech: string[];
  github: string;
  live: string;
  screenshots?: string[];
}

const projects: Project[] = [
  {
    slug: "smart-parking-system",
    title: "Smart Parking Computer Vision System",
    description:
      "Real-time automated parking slot detection, license plate recognition (ALPR) via YOLOv8, and IoT telemetry on a responsive dashboard.",
    overview:
      "An intelligent, edge-capable parking operations platform that bridges computer vision with IoT telemetry. The system automates vehicle ingress and egress, monitors slot occupancy in real time, and streamlines parking administration without physical ticketing.",
    problem:
      "Conventional urban parking relies heavily on manual coordination and physical attendants, causing congestion, fuel wastage, and underutilized spaces. Lack of live occupancy visibility leads to average search delays exceeding 15 minutes in peak environments.",
    solution:
      "Engineered an automated pipeline utilizing fine-tuned YOLOv8 for automated license plate recognition (ALPR) coupled with ultrasonic IoT sensors for slot-level occupancy detection. Integrated with Firebase for sub-second dashboard synchronization and QR-based automated billing.",
    tech: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "React",
      "Firebase",
      "IoT Sensors",
      "Tailwind CSS",
    ],
    github: "https://github.com/satish-kumar07/Smart-Parking-System",
    live: "https://smart-parking.ramdev.xyz/",
  },
  {
    slug: "campus-management-system",
    title: "Campus Operations & Biometrics Platform",
    description:
      "Enterprise campus management suite integrating facial recognition biometrics for automated attendance, transactional food ordering, and optimized Django services.",
    overview:
      "A unified administrative and student portal engineered to eliminate paper-based processes across institutional operations. Employs deep-learning facial biometrics for automated class attendance alongside integrated cafeteria logistics.",
    problem:
      "University campuses face significant administrative overhead due to manual attendance roll calls (prone to proxy fraud), fragmented announcement channels, and long physical queues during cafeteria peak hours.",
    solution:
      "Built a secure biometric attendance pipeline using OpenCV facial landmark detection and embedding matching, eliminating proxies with instant timestamp verification. Structured a high-concurrency Django backend with automated email dispatch and transactional food ordering.",
    tech: ["Python", "Django", "OpenCV", "SQLite", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/satish-kumar07/Campus-Management-System",
    live: "https://campus-management-system-6mbh.onrender.com/",
  },
  {
    slug: "rag-on-dsa",
    title: "DSA Knowledge Assistant (RAG Pipeline)",
    description:
      "Retrieval-Augmented Generation architecture combining semantic dense vector search with LLMs to deliver grounded, hallucination-free DSA explanations.",
    overview:
      "A specialized developer assistant designed for Computer Science students and engineers. By pairing large language models with a domain-curated knowledge index, it answers complex algorithmic queries with verified code implementations and computational complexity analyses.",
    problem:
      "General-purpose LLMs frequently produce subtle semantic hallucinations, syntactically flawed code, or suboptimal algorithmic complexities when tasked with specialized data structures and algorithm interview problems.",
    solution:
      "Constructed an end-to-end RAG workflow: ingested and chunked authoritative DSA textbooks and problem archives, computed dense vector embeddings, and implemented top-k semantic retrieval to augment the LLM context with precise factual grounding before generation.",
    tech: [
      "Python",
      "RAG Architecture",
      "LLMs",
      "Vector Embeddings",
      "Semantic Search",
      "JavaScript",
    ],
    github: "https://github.com/satish-kumar07/RAG_ON_DSA",
    live: "https://dsa-frontend-rag.onrender.com/",
  },
  {
    slug: "ivy-league-opportunities",
    title: "Academic Opportunity Intelligence Engine",
    description:
      "Distributed web aggregation and NLP-driven recommendation engine matching student academic profiles to Ivy League research positions and fellowships.",
    overview:
      "An automated intelligence tool that aggregates, normalizes, and filters research fellowships, scholarships, and academic openings across top-tier institutions, matching qualified applicants based on domain expertise and profile credentials.",
    problem:
      "Information regarding prestigious academic grants, laboratory research fellowships, and visiting student programs is scattered across hundreds of decentralized department pages with disjointed deadlines and criteria, causing students to miss critical deadlines.",
    solution:
      "Engineered automated scraping and normalization pipelines that periodically harvest departmental feeds, parse deadline metadata, and score candidate profiles against program requirements to deliver targeted, high-probability opportunity recommendations.",
    tech: ["Python", "Web Scraping", "NLP", "JavaScript", "HTML5", "CSS3"],
    github:
      "https://github.com/satish-kumar07/Real-Time-Ivy-League-OI-SCI-main",
    live: "https://ivy-league-frontend-met5.onrender.com/",
  },
  {
    slug: "fake-account-detection",
    title: "Deceptive Social Media Account Classifier",
    description:
      "Supervised machine learning classification pipeline engineered to detect synthetic bot profiles and adversarial accounts using metadata heuristics.",
    overview:
      "A predictive machine learning framework developed to classify social media accounts as authentic or fraudulent. Evaluates behavioral signals, engagement distributions, and profile entropy to safeguard platforms against automated bot networks.",
    problem:
      "Automated bot accounts and fraudulent profiles distort social sentiment, distribute malicious spam, and compromise platform security. Manual account auditing is impossible at web scale, while naive rule-based filters yield unacceptably high false-positive rates.",
    solution:
      "Formulated a robust feature engineering pipeline extracting follower-to-following ratios, temporal posting frequencies, bio metadata patterns, and interaction entropy. Trained and benchmarked classification models with comprehensive cross-validation and ROC-AUC evaluation.",
    tech: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "Jupyter Notebook",
    ],
    github:
      "https://github.com/satish-kumar07/Fake-Social-Media-Accounts-Detection",
    live: "https://github.com/satish-kumar07/Fake-Social-Media-Accounts-Detection",
  },
];

export default projects;
