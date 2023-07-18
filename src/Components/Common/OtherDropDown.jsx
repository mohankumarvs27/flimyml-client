import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

function CustomDropDown({
    data = [],
    selected,
    setSelected,
    title,
    className = "",
}) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={className}>
            <p className="font-semibold py-2">{title}</p>
            <div className="dropdown relative">
                <div
                    className="dropdown-btn border-2 border-[#EFEEEB] p-2 rounded flex justify-between"
                    onClick={(e) => setIsActive(!isActive)}
                >
                    {selected}
                    <BiChevronDown className="w-6 h-6" />
                </div>
                {isActive && (
                    <div className="drown-content absolute w-full bg-slate-200 p-2 rounded mt-2 max-h-40 overflow-y-scroll">
                        {data?.map((option, index) => (
                            <div
                                onClick={(e) => {
                                    setSelected(option?.name);
                                    setIsActive(false);
                                }}
                                key={index}
                                className="drowndown-item p-2 rounded hover:bg-slate-100 active:bg-slate-100"
                            >
                                {option?.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CustomDropDown;
