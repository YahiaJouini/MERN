import React from "react"
export default function Fields({ data, children }) {
    return (
        <div className="flex justify-start items-center bg-field py-4   w-[600px] my-10">
            <label className="w-[150px] text-center">{data} : </label>
            {children}
        </div>
    )
}
