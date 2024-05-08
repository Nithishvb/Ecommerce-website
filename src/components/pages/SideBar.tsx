import React from 'react';

const SideBar = () => {
  return (
    <div className="pl-20 pt-10 border-r-2 border-gray-200 pr-24">
        <div>
            <ul>
                <li className="py-4 cursor-pointer">{"Women's fashion"}</li>
                <li className="py-4 cursor-pointer">{"Men's fashion"}</li>
                <li className="py-4 cursor-pointer">{"Electronics"}</li>
                <li className="py-4 cursor-pointer">{"Home & Lifestyle"}</li>
                <li className="py-4 cursor-pointer">{"Medicine"}</li>
                <li className="py-4 cursor-pointer">{"Sports & Outdoor"}</li>
                <li className="py-4 cursor-pointer">{"Baby's & Toys"}</li>
                <li className="py-4 cursor-pointer">{"Groceries & Pets"}</li>
                <li className="py-4 cursor-pointer">{"Health & Beauty"}</li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar;