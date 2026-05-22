import { Cpu, Truck, LineChart, type LucideIcon } from "lucide-react";

export type ExperienceCategory = "learning" | "simulation";

export interface ExperienceItem {
    id: string;
    role: string;
    organization: string;
    period: string;
    type: string;
    category: ExperienceCategory;
    icon: LucideIcon;
    color: string;
    focus: string;
    stack: string[];
    certificateLink: string;
    image: string;
    highlights: string[];
}

export const experiences: ExperienceItem[] = [
    {
        id: "innomatics-learning",
        role: "AI Systems Learning Program",
        organization: "Innomatics Research Labs · Remote",
        period: "Feb 2026 — May 2026",
        type: "Learning Program",
        category: "learning",
        icon: Cpu,
        color: "text-cyan-600 dark:text-[#ffb59c]",
        focus: "Self-paced remote program — LLM workflows, APIs, and applied Python analytics",
        stack: ["Python", "FastAPI", "LangChain", "RAG", "Prompt Engineering"],
        certificateLink:
            "https://drive.google.com/file/d/11Af7ZMEhsMjC0E5Melpq87Ouy46ujK9p/view?usp=sharing",
        image: "/certificates/innomatics-agentic-ai.png",
        highlights: [
            "Completed a structured remote learning track covering Python problem-solving, FastAPI, LangChain, RAG pipelines, and prompt engineering fundamentals",
            "Built practice workflows for data visualization, documentation, and automated reporting using Python-based tools",
        ],
    },
    {
        id: "ge-supply-chain",
        role: "Supply Chain Job Simulation",
        organization: "GE Aerospace (Forage)",
        period: "Jan 2026",
        type: "Virtual Experience",
        category: "simulation",
        icon: Truck,
        color: "text-orange-600 dark:text-[#ff5f1f]",
        focus: "Aerospace SCM — turbofan fixture requirements & non-conforming blade disposition",
        stack: ["Supply Chain", "Quality", "Aerospace Ops", "Documentation"],
        certificateLink:
            "https://drive.google.com/file/d/1hLZb5NRx9oMa3Omhv6TCYdxajsVRo617/view?usp=sharing",
        image: "/certificates/ge-aerospace-supply-chain.png",
        highlights: [
            "Determined critical requirements for a turbofan disassembly fixture in an aerospace manufacturing context",
            "Dispositioned non-conforming turbine blades through structured supply chain and quality workflows",
        ],
    },
    {
        id: "gs-operations",
        role: "Operations Job Simulation",
        organization: "Goldman Sachs (Forage)",
        period: "Jan 2026",
        type: "Virtual Experience",
        category: "simulation",
        icon: LineChart,
        color: "text-amber-600 dark:text-[#ffb59c]",
        focus: "Operations foundations & ultra-high-net-worth transaction facilitation",
        stack: ["Operations", "Finance Ops", "Client Service", "Documentation"],
        certificateLink:
            "https://drive.google.com/file/d/1w6zlVwB0M-0c1axD_nJDzPf3HgAR-D6u/view?usp=drive_link",
        image: "/certificates/goldman-sachs-operations.png",
        highlights: [
            "Completed practical tasks in foundations of operations and client-service workflows for high-net-worth banking scenarios",
            "Facilitated ultra-high net worth transaction analysis through structured operational documentation and process reviews",
        ],
    },
];

export const experienceSummary = {
    learningPrograms: 1,
    virtualSimulations: 2,
    certifications: 6,
};

export const RESUME_URL =
    "https://drive.google.com/file/d/1K17iyrLkLaXjdFCfwDWIo6WSJqlwJDae/view?usp=sharing";

export const certificateLinks: Record<string, { label: string; url: string }> = {
    lean: {
        label: "Lean Six Sigma White Belt",
        url: "https://drive.google.com/file/d/1daBqPaVrRpSiWnuryYpndtuRmSFQ3_1M/view?usp=sharing",
    },
    innomatics: {
        label: "Innomatics Learning Program",
        url: "https://drive.google.com/file/d/11Af7ZMEhsMjC0E5Melpq87Ouy46ujK9p/view?usp=sharing",
    },
    tata: {
        label: "Tata Data Visualisation",
        url: "https://drive.google.com/file/d/1zbapiP-Um0fpoRwEfpWtstppRY-qKFgf/view?usp=drive_link",
    },
    goldman: {
        label: "Goldman Sachs Operations",
        url: "https://drive.google.com/file/d/1w6zlVwB0M-0c1axD_nJDzPf3HgAR-D6u/view?usp=drive_link",
    },
    ge: {
        label: "GE Aerospace Supply Chain",
        url: "https://drive.google.com/file/d/1hLZb5NRx9oMa3Omhv6TCYdxajsVRo617/view?usp=sharing",
    },
    sap: {
        label: "SAP S/4HANA SC",
        url: "https://drive.google.com/file/d/1vW4ElA4km79gwgVxTPBS4A2K7b2mxPqS/view?usp=drive_link",
    },
};
