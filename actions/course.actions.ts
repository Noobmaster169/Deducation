"use client";

import { createNewUrl } from "@/utils/url";
import { tempCourses } from "@/data/mockData";
import { useSearchParams } from "next/navigation";

type getAllCoursesProps = {
  query: string,
  limit?: number,
  page?: number,
}

export function getAllCourses({ query, limit = 9, page = 1 }: getAllCoursesProps) {
  const url = createNewUrl({ newParam: "page", newValue: page.toString() });
  const searchParams = useSearchParams();
  page = Number(searchParams.get('page')) || 1;

  // TODO: Replace mockdata with actual data
  if (query === "") {
    return {
      data: tempCourses.slice((page - 1) * limit, page * limit),
      page: page,
      totalPages: Math.ceil(tempCourses.length/limit),
    };
  }

  const filteredCourses = tempCourses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase()) ||
           course.description.toLowerCase().includes(query.toLowerCase());
  });

  const newPage = page; // TODO: Replace with actual page number when implementing pagination

  console.log("Query: ", query)
  console.log("Filtered courses: ", filteredCourses)
  return {
    data: filteredCourses.slice((newPage - 1) * limit, newPage * limit),
    page: newPage,
    totalPages: Math.ceil(filteredCourses.length/limit),
  };
}

export function getCourseById(id: string) {
  return tempCourses.find((course) => course._id === id);
}
