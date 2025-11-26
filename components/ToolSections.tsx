import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
}

interface ToolSectionsProps {
  faqs?: FAQ[];
  howItWorks?: {
    title?: string;
    description: string;
    additionalInfo?: string;
  };
  relatedTools?: Array<{
    title: string;
    href: string;
    description: string;
  }>;
  toolName?: string;
}

export function ToolFAQs({ faqs }: { faqs: FAQ[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
            <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ToolHowItWorks({ howItWorks, toolName }: { howItWorks: ToolSectionsProps['howItWorks']; toolName?: string }) {
  if (!howItWorks) return null;

  const title = howItWorks.title || `How ${toolName || 'This Tool'} Works`;

  return (
    <div className="mt-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <p className="text-gray-700 dark:text-gray-300 mb-4">{howItWorks.description}</p>
        {howItWorks.additionalInfo && (
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">{howItWorks.additionalInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function ToolRelatedResources({ relatedTools }: { relatedTools?: ToolSectionsProps['relatedTools'] }) {
  if (!relatedTools || relatedTools.length === 0) return null;

  return (
    <div className="mt-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatedTools.map((tool, index) => (
          <Link
            key={index}
            href={tool.href}
            className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{tool.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ToolSections({ faqs, howItWorks, relatedTools, toolName }: ToolSectionsProps) {
  return (
    <>
      <ToolHowItWorks howItWorks={howItWorks} toolName={toolName} />
      <ToolFAQs faqs={faqs || []} />
      <ToolRelatedResources relatedTools={relatedTools} />
    </>
  );
}

