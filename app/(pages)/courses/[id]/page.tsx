"use client"

import React, { LegacyRef, useState } from 'react'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import "./style.css";
import TextEditor from '@/components/TextEditor';

const CoursePage = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="w-full flex text-black">
      <TextEditor />
      {/* <textarea
        className="w-1/2 h-[100vh] p-5 text-lg outline-none border-r-2 border-gray-700 bg-[#252525]"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Markdown
        remarkPlugins={[remarkGfm]}
        className="w-1/2 h-[100vh] p-5 outline-none markdown-body prose text-white"
      >
        {value}
      </Markdown> */}
    </div>
  );
}

export default CoursePage