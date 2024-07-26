"use client"

import { createNewUrl } from '@/utils/searchquery';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const searchDelay = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      
      console.log(params.get('q'))
      if (term && params.get("page") != "1") {
        params.set('q', term);
        params.set('page', "1");
      } else if (term) {
        params.set('q', term);
      } else {
        params.delete('q');
      }
      replace(`${pathname}?${params.toString()}`)
    }, 300);
    
    return () => clearTimeout(searchDelay);
  }

 // Backlog of previous search function
  // const [searchQuery, setSearchQuery] = useState<string>("")
  // const router = useRouter();

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => { // Delays the search query by 300ms
  //     const updateUrlQuery = () => {
  //       const newUrl = createNewUrl({ newParam: "q", newValue: searchQuery });
  //       router.push(newUrl, undefined);
  //     };
  
  //     updateUrlQuery();
  //   }, 300);

  //   return () => clearTimeout(delayDebounceFn);
  // }, [searchQuery, router]);

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="text-slate-200 outline-none bg-[#373737] p-5 rounded-lg w-full md:max-w-[350px]"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBar