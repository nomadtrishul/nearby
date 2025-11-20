import Link from 'next/link';

export interface Tool {
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  featured?: boolean;
}

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={tool.href}
      className="group relative rounded-xl sm:rounded-2xl h-full block p-[1px]"
      style={{
        background: 'linear-gradient(45deg, #ec4899, #a855f7, #ec4899, #a855f7)',
        backgroundSize: '300% 300%',
        animation: 'gradientShift 3s ease infinite',
      }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-[11px] sm:rounded-[15px] h-full w-full p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col relative">
        {/* Icon */}
        <div className="text-4xl sm:text-5xl mb-4 transform group-hover:scale-110 transition-transform">
          {tool.icon}
        </div>

        {/* Category Badge */}
        <div className="inline-block px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium mb-3 transition-colors w-fit">
          {tool.category}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {tool.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors flex-grow">
          {tool.description}
        </p>

        {/* CTA */}
        <div className="flex items-center text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors mt-auto">
          Use Tool
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        {/* Featured Badge */}
        {tool.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2 py-1 text-xs font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

