"use client"

import { getAllCourses } from "@/actions/course.actions";
import CourseCard from "@/components/CourseCard";
import SearchBar from "@/components/SearchBar";
import { useSearchParams } from "next/navigation";
import NavBar from "@/components/NavBar";
import PaginationControls from "@/components/PaginationControls";
import { Suspense } from "react";

const AllCoursePage = () => {
  const searchParams = useSearchParams() || 1;
  const query = searchParams.get("q") || "";

  // const { data, page, totalPages } = getAllCourses({ query });

  return (
  <Suspense>
    <div className="flex justify-center h-full">

      <NavBar />

      <div className="flex flex-col gap-10 2xl:max-w-[80vw] px-10 pt-[80px]">
        <div className="md:flex-row flex flex-col justify-between items-center">
          <h1 className="text-4xl font-semibold">Browse Courses</h1>
          <div className="flex items-center mt-5 w-full md:max-w-[350px]">
            {/* <Suspense fallback={<>Loading...</>}>
              <SearchBar placeholder="Search for a course..."/>
              </Suspense> */}
            {/* Filter */}
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {data.map(course => (
            <CourseCard course={course} key={course._id} />
            ))}
            </div> */}
        {/* <Suspense fallback={<>Loading...</>}>
          <PaginationControls totalPages={totalPages}/>
          </Suspense> */}
      </div>
    </div>
  </Suspense>
  )
}

export default AllCoursePage;
