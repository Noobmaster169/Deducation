import CourseCard from "../../components/CourseCard";
import { tempCourses } from "../../data/mockData";
 
export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-[100px] items-center justify-center h-full">
      {/* Courses */}
      <div className="flex flex-col gap-6 bg-blue">
        <h1 className="font-semibold text-4xl">Courses</h1>
        <div className="flex gap-5">
          {tempCourses.slice(0, 3).map(course => (
            <CourseCard course={course} />
          ))}
        </div>
      </div>

      {/* Bounties */}
      <div>
        <h1>Bounties</h1>
      </div>
    </div>
    </>
  );
}