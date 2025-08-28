"use client";
import React, { useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import CountUp from "react-countup";

export default function SkillsGauge() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    {
      name: "Cloud & DevOps",
      level: 80,
      fill: "url(#gradientCloud)",
      subtitle: "AWS • Azure • Docker • Kubernetes",
      projects: ["Hybrid K3s Cluster", "Odyssey DPI"],
      certs: ["AWS Cloud Practitioner", "Azure Admin"],
    },
    {
      name: "Web Development",
      level: 65,
      fill: "url(#gradientWeb)",
      subtitle: "Next.js • Tailwind • React Basics",
      projects: ["Cloud Resume Challenge"],
      certs: [],
    },
    {
      name: "Scripting & Automation",
      level: 70,
      fill: "url(#gradientScript)",
      subtitle: "Python • PowerShell • Bash",
      projects: ["ESD Toolkit", "Config Automation"],
      certs: ["PCEP"],
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0b0d17] via-[#0f111d] to-[#0b0d17] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Skill Proficiency Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10 p-6 transition-transform duration-300 ${
                hoveredSkill === index ? "scale-105 shadow-2xl" : ""
              }`}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Radial Gauge */}
              <div className="h-52 flex justify-center items-center relative">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="100%"
                    barSize={18}
                    data={[{ value: skill.level }]}
                    startAngle={225}
                    endAngle={-45}
                  >
                    <defs>
                      <linearGradient id="gradientCloud" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7dd3fc" />
                        <stop offset="100%" stopColor="#60a5fa" />
                      </linearGradient>
                      <linearGradient id="gradientWeb" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#facc15" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                      <linearGradient id="gradientScript" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 100]}
                      tick={false}
                    />
                    <RadialBar
                      dataKey="value"
                      fill={skill.fill}
                      cornerRadius={30 / 2}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>

                {/* Percentage Label */}
                <div className="absolute text-white text-2xl font-bold">
                  <CountUp
                    start={0}
                    end={skill.level}
                    duration={1.2}
                  />%
                </div>
              </div>

              {/* Skill Title */}
              <h3
                className="mt-4 text-lg font-semibold"
                style={{ color: skill.fill.includes("gradient") ? "#fff" : skill.fill }}
              >
                {skill.name}
              </h3>
              <p className="text-sm text-gray-300">{skill.subtitle}</p>

              {/* Hover Details */}
              {hoveredSkill === index && (
                <div className="mt-4 text-xs text-gray-400">
                  <p className="mb-1 font-semibold text-gray-200">Projects:</p>
                  {skill.projects.length > 0 ? skill.projects.join(", ") : "N/A"}
                  {skill.certs.length > 0 && (
                    <>
                      <p className="mt-2 mb-1 font-semibold text-gray-200">
                        Certifications:
                      </p>
                      {skill.certs.join(", ")}
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
