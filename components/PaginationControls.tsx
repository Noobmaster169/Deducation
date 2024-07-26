'use client';

import Link from 'next/link';
import { generatePagination } from '../utils/generatePagination'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaA } from 'react-icons/fa6';

export default function PaginationControls({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page') || 1);
  const hasQuery = searchParams.has('q');
  const { replace } = useRouter();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`
  };

  function handleSearch(term: string) {
    const searchDelay = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      
      console.log(params.get('page'))
      if (term) {
        params.set('page', term);
      } else {
        params.delete('page');
      }
      replace(`${pathname}?${params.toString()}`)
    }, 750);
    
    return () => clearTimeout(searchDelay);

  }

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="flex justify-center items-center p-8">
      <div className="flex w-fit justify-center items-center px-2 h-full">
        <Link 
        className = "h-full w-full flex justify-center items-center border-solid border-white border-[1px] p-1" 
        href={currentPage > 1 ? createPageURL(currentPage - 1) : createPageURL(currentPage)}>
          <FaArrowLeft 
          size={20}
          />
        </Link>
      {allPages.map((page, placeholder) => {
        return(
          typeof page === 'number' ? 
          <PaginationNumber pageNumber={page} currentPage={currentPage} href={createPageURL(page)} key = {page}/> : 
          // <p className="px-4 border-solid border-[1px] border-white h-full">...</p>
          <input
          type="text"
          placeholder={"..."}
          className="w-8 h-fit justify-center text-center items-center text-sm border-solid border-[1px] border-white p-1 bg-transparent"
          onChange={(e) => handleSearch(e.target.value)}
          key = {placeholder + page}
          />
        )
      })}
      <Link 
        className = "h-full w-full flex justify-center items-center border-solid border-white border-[1px] p-1" 
        href={currentPage != totalPages ? createPageURL(currentPage + 1) : createPageURL(currentPage)}>
          <FaArrowRight
          size={20}
          />
        </Link>
    </div>
  </div>
  );
}

function PaginationNumber({
  pageNumber,
  currentPage,
  href,
}: {
  pageNumber: number | string;
  currentPage: number;
  href: string;
}) {
  return (
      <Link
        href = {href}
        className={`px-4 border-solid border-[1px] border-white h-full ${
          currentPage === pageNumber
            ? 'text-blue-500'
            : 'text-white'
        }`}
      >
        {pageNumber}
      </Link>
  );
}