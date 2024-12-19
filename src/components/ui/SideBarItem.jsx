import { useState } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";


export const MenuItem = ({ href, icon: Icon, text, isExpanded, subcategories }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li>
      <div className="flex flex-col">
        <Link
          href={href}
          className={`flex text-lg items-center gap-5 text-white px-4 py-2 rounded-md hover:bg-primary-200`}
          onClick={subcategories ? handleDropdownToggle : null}
        >
          <Icon size={25} className="text-white" />
          {isExpanded && (
            <span className="min-w-[150px] transition-all duration-500 flex items-center">
              {text}
              {subcategories && (
                <BiChevronDown
                  size={25}
                  className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              )}
            </span>
          )}
        </Link>
        {subcategories && isDropdownOpen && (
          <ul className="ml-8 mt-2">
            {subcategories.map((sub) => (
              <li key={sub.href}>
                <Link
                  href={sub.href}
                  className="flex text-lg items-center gap-5 text-white px-4 py-2 rounded-md hover:bg-primary-200"
                >
                  {isExpanded && (
                    <span className="min-w-[150px] transition-all duration-500">
                      {sub.text}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};
