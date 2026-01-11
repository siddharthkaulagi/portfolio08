"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, Building2 } from "lucide-react";
import Image from "next/image";

const certificates = [
    {
        title: "Data Visualisation: Empowering Business with Effective Insights",
        issuer: "Tata Group",
        date: "Jan 2026",
        image: "/certificates/tata-data-visualisation.png",
        description: "Completed practical tasks in Framing the Business Scenario, Choosing the Right Visuals, Creating Effective Visuals, and Communicating Insights and Analysis.",
        tags: ["Data Visualization", "Business Insights", "Communication"],
        link: "https://drive.google.com/file/d/1zbapiP-Um0fpoRwEfpWtstppRY-qKFgf/view?usp=drive_link",
        status: "Completed"
    },
    {
        title: "Operations Job Simulation",
        issuer: "Goldman Sachs",
        date: "Jan 2026",
        image: "/certificates/goldman-sachs-operations.png",
        description: "Completed practical tasks in Foundations of operations and Facilitating ultra-high net worth transactions.",
        tags: ["Operations", "Finance", "Client Services"],
        link: "https://drive.google.com/file/d/1w6zlVwB0M-0c1axD_nJDzPf3HgAR-D6u/view?usp=drive_link",
        status: "Completed"
    },
    {
        title: "Supply Chain Job Simulation",
        issuer: "GE Aerospace",
        date: "Jan 2026",
        image: "/certificates/ge-aerospace-supply-chain.png",
        description: "Completed practical tasks in Determine critical requirements for a turbofan disassembly fixture and Disposition non-conforming turbine blades.",
        tags: ["Supply Chain", "Aerospace", "Manufacturing"],
        link: "https://drive.google.com/file/d/1hLZb5NRx9oMa3Omhv6TCYdxajsVRo617/view?usp=drive_link",
        status: "Completed"
    },
    {
        title: "SAP S/4HANA Supply Chain for Transportation Management",
        issuer: "SAP",
        date: "Jan 2026",
        image: "/certificates/sap-supply-chain-logistics.png",
        description: "Validate capabilities of different transportation solutions using knowledge of supported processes, solution architecture, and process flow.",
        tags: ["SAP", "Transportation", "Logistics"],
        link: "https://drive.google.com/file/d/1vW4ElA4km79gwgVxTPBS4A2K7b2mxPqS/view?usp=drive_link",
        status: "Completed"
    },
    {
        title: "Deloitte Technology Consulting",
        issuer: "Deloitte",
        date: "In Progress",
        image: "/placeholder-cert.png",
        description: "Currently pursuing certification in technology consulting, focusing on enterprise solutions and digital transformation.",
        tags: ["Consulting", "Technology", "Strategy"],
        link: "#",
        status: "In Progress"
    }
];

export function Certificates() {
    return (
        <section id="certificates" className="relative py-24 bg-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
                        MY <span className="text-cyan-500">CERTIFICATIONS</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Continuous learning and professional development through industry-recognized certifications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                boxShadow: "0 0 40px rgba(6,182,212,0.4), 0 0 80px rgba(6,182,212,0.2)",
                                transition: { duration: 0.15, ease: "easeOut" }
                            }}
                            className="group relative bg-card dark:bg-slate-900/50 border border-border dark:border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500 transition-all duration-150 flex flex-col h-full cursor-pointer"
                        >
                            {/* Image Section */}
                            <div className="relative h-48 w-full bg-muted/30 overflow-hidden">
                                {cert.status === "In Progress" ? (
                                    <div className="absolute inset-0 flex items-center justify-center bg-muted dark:bg-slate-800/50">
                                        <Building2 className="w-16 h-16 text-muted-foreground/50" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="bg-amber-500/90 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                                                In Progress
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative h-full w-full">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center space-x-2 text-cyan-500 text-sm font-medium">
                                        <Building2 size={16} />
                                        <span>{cert.issuer}</span>
                                    </div>
                                    <div className="flex items-center space-x-1 text-muted-foreground text-xs">
                                        <Calendar size={14} />
                                        <span>{cert.date}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                                    {cert.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                    {cert.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {cert.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 text-[10px] bg-muted dark:bg-slate-800 text-muted-foreground rounded border border-border dark:border-slate-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {cert.status !== "In Progress" && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm text-cyan-500 hover:text-cyan-400 transition-colors font-medium"
                                        >
                                            View Credential <ExternalLink size={14} className="ml-1" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Empty Slot / Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 0 30px rgba(6,182,212,0.2)",
                            transition: { duration: 0.15, ease: "easeOut" }
                        }}
                        className="group relative bg-card/50 dark:bg-slate-900/30 border border-dashed border-border dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500 transition-all duration-150 min-h-[400px] cursor-pointer"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all duration-150">
                            <Award size={32} className="text-muted-foreground group-hover:text-cyan-500 transition-colors duration-150" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">More Coming Soon</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Constantly expanding my skillset with new technologies and methodologies.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
