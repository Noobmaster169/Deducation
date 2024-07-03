import { createNewUrl } from "@/utils/searchquery";
import { tempCourses } from "@/data/mockData";

type getAllCoursesProps = {
  query: string,
  limit?: number,
  page?: number,
}

export function getAllCourses({ query, limit = 6, page = 1 }: getAllCoursesProps) {
  const url = createNewUrl({ newParam: "page", newValue: page.toString() });

  // TODO: Replace mockdata with actual data
  if (query === "") {
    return {
      data: tempCourses,
      page: page,
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
    data: filteredCourses,
    page: newPage,
  };
}