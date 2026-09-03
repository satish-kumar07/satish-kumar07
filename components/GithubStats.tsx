"use client";
import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Repo {
  name: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  description: string | null;
  html_url: string;
}

interface LangMap {
  [name: string]: number;
}

const FALLBACK_USER = {
  public_repos: 16,
  followers: 7,
  following: 7,
};

const FALLBACK_LANGS: LangMap = {
  Python: 9,
  TypeScript: 5,
  JavaScript: 3,
  "C++": 2,
  HTML: 2,
  CSS: 1,
};

const FALLBACK_REPOS: Repo[] = [
  {
    name: "Campus-Management-System",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    description: "AI face recognition attendance, food ordering, and Django backend optimization.",
    html_url: "https://github.com/satish-kumar07/Campus-Management-System",
  },
  {
    name: "Smart-Parking-System",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    description: "Real-time parking slot monitoring, YOLOv8 number plate recognition, and IoT integration.",
    html_url: "https://github.com/satish-kumar07/Smart-Parking-System",
  },
  {
    name: "RAG_ON_DSA",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    description: "Retrieval-Augmented Generation assistant indexing DSA knowledge bases with LLMs.",
    html_url: "https://github.com/satish-kumar07/RAG_ON_DSA",
  },
  {
    name: "Real-Time-Ivy-League-OI-SCI-main",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    description: "Real-time academic opportunity aggregator with AI profile matching for Ivy League programs.",
    html_url: "https://github.com/satish-kumar07/Real-Time-Ivy-League-OI-SCI-main",
  },
];

export default function GithubStats() {
  const username = "satish-kumar07";
  const [githubUser, setGithubUser] = useState(FALLBACK_USER);
  const [langs, setLangs] = useState<LangMap>(FALLBACK_LANGS);
  const [topRepos, setTopRepos] = useState<Repo[]>(FALLBACK_REPOS);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);
        const user = await userRes.json();
        const repos: Repo[] = await repoRes.json();

        if (user && user.public_repos) {
          setGithubUser({
            public_repos: user.public_repos,
            followers: user.followers || 0,
            following: user.following || 0,
          });
        }

        if (Array.isArray(repos) && repos.length > 0) {
          const langMap: LangMap = {};
          repos.forEach((r) => {
            if (r.language) {
              langMap[r.language] = (langMap[r.language] || 0) + 1;
            }
          });
          setLangs(langMap);
          setTopRepos(repos.slice(0, 4));
        }
      } catch {
        // Keep fallback data gracefully
      }
    };

    fetchGithubData();
  }, []);

  const totalLangCount = Object.values(langs).reduce((acc, v) => acc + v, 0) || 1;
  const sortedLangs = Object.entries(langs)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <section id="stats" className="py-20 md:py-24 border-b border-border">
      {/* Anchor alias for #github */}
      <span id="github" className="block -mt-20 pt-20" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
              06 / Activity
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
              Open Source &amp; GitHub
            </h2>
            <p className="text-sm text-muted mt-1.5 max-w-xl">
              Public code repositories, language distribution, and open-source contributions.
            </p>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-card border border-border text-xs font-medium text-foreground hover:bg-cardHover transition-colors shadow-2xs self-start"
          >
            <FaGithub size={15} />
            <span>Visit @{username}</span>
            <FaExternalLinkAlt size={9} className="text-subtle" />
          </a>
        </div>

        {/* Top Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-card p-5 rounded-xl border border-border text-center shadow-card">
            <span className="block text-2xl sm:text-3xl font-bold font-mono text-foreground">
              {githubUser.public_repos}
            </span>
            <span className="text-xs text-muted font-medium mt-1 block">
              Public Repositories
            </span>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border text-center shadow-card">
            <span className="block text-2xl sm:text-3xl font-bold font-mono text-foreground">
              {githubUser.followers}
            </span>
            <span className="text-xs text-muted font-medium mt-1 block">
              Followers
            </span>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border text-center shadow-card">
            <span className="block text-2xl sm:text-3xl font-bold font-mono text-foreground">
              {githubUser.following}
            </span>
            <span className="text-xs text-muted font-medium mt-1 block">
              Following
            </span>
          </div>
        </div>

        {/* Two Column Grid: Repos + Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Top Repositories (7 cols) */}
          <div className="lg:col-span-7 bg-card rounded-xl border border-border p-6 sm:p-7 shadow-card">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">
              Recent Repositories
            </h3>

            <div className="space-y-3.5">
              {topRepos.map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-4 rounded-lg border border-border hover:border-accent/40 hover:bg-cardHover transition-all group"
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {repo.name}
                    </span>
                    {repo.language && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-background border border-border text-muted">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted line-clamp-2">
                    {repo.description || "No description provided."}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Language Breakdown (5 cols) */}
          <div className="lg:col-span-5 bg-card rounded-xl border border-border p-6 sm:p-7 shadow-card">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">
              Primary Languages
            </h3>

            <div className="space-y-4">
              {sortedLangs.map(([lang, count], idx) => {
                const percentage = Math.round((count / totalLangCount) * 100);

                return (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                      <span className="text-foreground font-mono">{lang}</span>
                      <span className="text-subtle font-mono">{percentage}%</span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-background border border-border overflow-hidden">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-border text-xs text-subtle leading-relaxed">
              Data fetched live via the GitHub REST API, showcasing primary language distribution across all public projects.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
