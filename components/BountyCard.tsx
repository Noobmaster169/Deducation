import { IBounty } from '@/models/bounty.model'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type BountyCardProps = {
    bounty: IBounty,
}

const BountyCard = ({ bounty }: BountyCardProps) => {
    return(
        <Link
        className ="
            flex h-40 w-full outline outline-slate-400 rounded-lg
            hover:cursor-pointer transorm transition duration-300 hover:translate-x-2 hover:shadow-lg"
        href={`/courses/${bounty._id}`}
        >

            <Image
                src={bounty.placeholderPic}
                alt="creator profile picture"
                width={256}
                height={160}
                className = "h-min-40"    
                />

            {/* text */}
            <div className = "flex flex-col justify-between w-full p-4">
                <h1 className = "text-xl font-semibold line-clamp-1">{bounty.title}</h1>
                <p>By {bounty.creator}</p>
                <p className = "text-sm line-clamp-2">{bounty.description}</p>
                <div className = "pt-3 flex flex-wrap justify-between">
                    <p className = "text-red-500">{`Due in ${calculateDueDate(bounty.dueDate)} days (${getFormattedDate(bounty.dueDate)})`}</p>
                    <p className = "text-green-300">{`${bounty.reward} ${bounty.currency}`}</p>
                </div>
            </div>

        </Link>
    )
}

export default BountyCard

function calculateDueDate(bountyDate: Date) {
    const date = new Date(bountyDate);
    const currentDate = new Date();

    const diffInMili = Math.abs(date.getTime() - currentDate.getTime());
    const miliSecondsInADay = 1000 * 60 * 60 * 24;
    const daysDue = Math.floor(diffInMili/miliSecondsInADay)
    return daysDue;
}

function getFormattedDate(bountyDate: Date) {
    return bountyDate.toDateString();
}