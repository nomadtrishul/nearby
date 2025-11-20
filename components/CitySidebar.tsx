'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Tool {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface RecentTip {
  slug: string;
  title: string;
  date: string;
  formattedDate?: string;
}

interface QuickAction {
  label: string;
  href: string;
  icon: string;
}

interface CitySidebarProps {
  cityName?: string;
  tools?: Tool[];
  quickActions?: QuickAction[];
}

const defaultTools: Tool[] = [
  {
    title: 'Pet Care Toolkit',
    description: 'Download guides and checklists to prepare for any service visit.',
    href: '/resources/pet-care-toolkit',
    icon: '🧰',
  },
  {
    title: 'Service Matching Quiz',
    description: 'Find the right type of care for your pet in under 2 minutes.',
    href: '/tools/service-matcher',
    icon: '🧠',
  },
  {
    title: 'Provider Checklist',
    description: 'Questions to ask before hiring a sitter, groomer, or trainer.',
    href: '/resources/provider-checklist',
    icon: '✅',
  },
];

const defaultQuickActions: QuickAction[] = [
  {
    label: 'List your service',
    href: '/contact',
    icon: '🚀',
  },
  {
    label: 'Talk to support',
    href: '/contact',
    icon: '💬',
  },
  {
    label: 'View provider policies',
    href: '/about',
    icon: '📜',
  },
];

export default function CitySidebar({ 
  cityName, 
  tools = defaultTools, 
  quickActions = defaultQuickActions 
}: CitySidebarProps) {
  const [recentTips, setRecentTips] = useState<RecentTip[]>([]);

  useEffect(() => {
    // Fetch recent tips
    fetch('/api/tips/sidebar')
      .then((res) => res.json())
      .then((data) => {
        setRecentTips(
          (data.recentTips || []).map((tip: RecentTip) => ({
            ...tip,
            formattedDate: new Date(tip.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }),
          }))
        );
      })
      .catch(() => {
        // Fallback if API doesn't exist yet
        setRecentTips([]);
      });
  }, []);

  return (
    <aside className="lg:w-80 xl:w-96 space-y-6 flex-shrink-0">
      {/* Tools Section */}
      <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-blue-600 dark:text-blue-300 font-semibold">
              Tools
            </p>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Planning resources
            </h3>
          </div>
          <span className="text-2xl">🧠</span>
        </div>
        <div className="space-y-4">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-colors group"
            >
              <div className="text-2xl">{tool.icon}</div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300">
                  {tool.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Tips Section */}
      <div className="p-5 sm:p-6 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-500/10 border border-indigo-200/50 dark:border-white/10 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-indigo-600 dark:text-indigo-300 font-semibold">
              Recent tips
            </p>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Updates for pet parents
            </h3>
          </div>
          <span className="text-2xl">💡</span>
        </div>
        <div className="space-y-4">
          {recentTips.length > 0 ? (
            recentTips.map((tip) => (
              <Link
                key={tip.slug}
                href={`/pet-care-tips/${tip.slug}`}
                className="block p-3 rounded-xl bg-white/70 dark:bg-gray-900/70 hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  {tip.formattedDate || tip.date}
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                  {tip.title}
                </p>
              </Link>
            ))
          ) : (
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              No tips yet. Check back soon!
            </p>
          )}
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span>Quick actions</span> <span className="text-xl">⚡</span>
        </h3>
        <div className="space-y-3">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="group flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{action.icon}</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {action.label}
                </span>
              </div>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

