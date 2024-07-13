"use client"

import { ICourse } from "@/models/course.model";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react"

import { MdEdit, MdDelete, MdAdd, MdCheck } from "react-icons/md";

type PageCreatorControlsProps = {
  course: ICourse | undefined;
  isEditing: boolean;
  setIsEditing: (newValue: boolean) => void;
}

const Tooltip = ({ text }: { text: string }) => (
  <div className="absolute mb-[90px] bg-secondary text-white text-xs py-1 px-2 rounded w-auto whitespace-nowrap">
    {text}
  </div>
);

const PageCreatorControls = ({ course, isEditing, setIsEditing }: PageCreatorControlsProps) => {
  const [hoveredButton, setHoveredButton] = useState<string>("");
  const searchParams = useSearchParams();
  const pageId = searchParams.get("page") ?? "1";

  const handleSaveEditClick = () => {
    


    setIsEditing(!isEditing);
  }

  return (
    <div className="flex justify-end gap-2 p-3 mr-5">

      {/* New Page Button */}
      <button
        className="
        bg-primary text-background font-semibold py-2 px-4 rounded h-10
          flex justify-center items-center gap-2
        "
        onMouseEnter={() => setHoveredButton("newPage")}
        onMouseLeave={() => setHoveredButton("")}
        onClick={handleSaveEditClick}
      >
        <MdAdd />
        {hoveredButton === "newPage" && <Tooltip text="New Page" />}
      </button>

      {/* Edit Page Button */}
      <button
        className="
          bg-primary text-background font-semibold py-2 px-4 rounded h-10
          flex justify-center items-center gap-2
        "
        onMouseEnter={() => setHoveredButton("editPage")}
        onMouseLeave={() => setHoveredButton("")}
        onClick={handleSaveEditClick}
      >
        {isEditing ? <MdCheck /> : <MdEdit />}
        {hoveredButton === "editPage" && <Tooltip text={isEditing ? "Save Changes" : "Edit Page"} />}
      </button>

      {/* Delete Page Button */}
      <button
        className="
          bg-red-500 text-background font-semibold py-2 px-4 rounded h-10
          flex justify-center items-center gap-2
        "
        onMouseEnter={() => setHoveredButton("deletePage")}
        onMouseLeave={() => setHoveredButton("")}
        onClick={handleSaveEditClick}
      >
        <MdDelete />
        {hoveredButton === "deletePage" && <Tooltip text="Delete Page" />}
      </button>
    </div>
  )
}

export default PageCreatorControls;