"use client"

import { createNewUrl } from '@/utils/searchquery';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const router = useRouter();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => { // Delays the search query by 300ms
      const updateUrlQuery = () => {
        const newUrl = createNewUrl({ newParam: "q", newValue: searchQuery });
        router.push(newUrl, undefined);
      };
  
      updateUrlQuery();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router]);

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="text-slate-200 outline-none bg-[#373737] p-5 rounded-lg w-full md:max-w-[350px]"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}

export default SearchBar