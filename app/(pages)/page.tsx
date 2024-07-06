import CourseCard from "../../components/CourseCard";
import BountyCard from "../../components/BountyCard";
import { tempCourses, tempBounties } from "../../data/mockData";
import NavBar from "../../components/NavBar";
 
export default function Home() {
  return (
    <>
      
    <div className="flex flex-col px-72 items-center justify-center h-2/3">
      <NavBar /> 

      {/* Courses */}
      <div className="flex flex-col gap-6 bg-blue">
        <h1 className="font-semibold text-4xl">Courses</h1>
        <div className="flex gap-5">
          {tempCourses.slice(0, 3).map(course => (
            <CourseCard course={course} key={course._id}/>
          ))}
        </div>
      </div>
    </div>

      {/* Bounties */}
      <div className="flex flex-col gap-[100px] px-80 h-2/3">
        <div className="flex flex-col gap-6 bg-blue">
          <h1 className="font-semibold text-4xl">Bounties</h1>
          <div className="flex flex-col gap-5">
            {tempBounties.slice(0, 3).map(bounty => (
              <BountyCard bounty={bounty} key={bounty._id}/>
            ))}
          </div>
        </div>
      </div>


    </>
  );
}