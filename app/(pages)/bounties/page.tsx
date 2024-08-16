'use client';
import BountyCard from "@/components/BountyCard";
import NavBar from "../../../components/NavBar";
import { tempBounties } from "../../../data/mockData";

export default function bountyPage() {
    return(
    <>
        <div className = "flex flex-col px-72 items-center justify-center h-full pb-120">
            <NavBar />

            {/* Bounties */}
            <div className="flex flex-col gap-6 px-30 h-2/3">
                    <h1 className="font-semibold text-4xl">Bounties</h1>
                    <div className="flex flex-col gap-5 h-fit">
                        {tempBounties.map(bounty => (
                            <BountyCard bounty={bounty} key={bounty._id}/>
                        ))}
                        <div className="h-full"></div>
                    </div>
                </div>
            </div>
    </>
    )
}