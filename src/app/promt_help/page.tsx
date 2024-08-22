'use client';
import data from '@/db/promthelps.json';

import { Fira_Sans } from 'next/font/google';

const sans = Fira_Sans({ subsets: ['cyrillic', 'latin'], weight: ['400'] });

type PromtType = {
  id: number;
  number: string;
  title: string;
  text: string[];
  code?: string[];
};

const bloghelp: PromtType[] = data;
const PromtHelp: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div
      className={`${sans.className} container mx-auto flex flex-col items-center bg-slate-800 text-zinc-100`}>
      <div className="max-w-[80%]">
        {bloghelp.map((list) => (
          <article key={list.id} className="w-full px-20">
            <h2 className="p-4 text-3xl font-extrabold">
              <span className="text-orange-700">{list.number}. </span>
              {list.title}
            </h2>
            <ul className="p-6">
              {list.text.map((item, id) => (
                <li className="mb-4" key={id}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            {list.code && list.code.length > 0 && (
              <div className="overflow-hidden rounded-lg bg-[#24252a] text-xl leading-7 text-white">
                {list.code.map((item, id) => (
                  <div key={id} className="relative p-6">
                    <button
                      onClick={() => copyToClipboard(item)}
                      className="absolute right-2 top-2 rounded bg-gray-700 px-2 py-1 text-sm">
                      Copy
                    </button>
                    <pre key={id} className="text-wrap">
                      {item}
                    </pre>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};
export default PromtHelp;
