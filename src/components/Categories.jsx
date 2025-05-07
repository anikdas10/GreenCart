import React from 'react';
import {  categories } from '../assets/greencart_assets/assets';
import { useAppContext } from '../context/AppContect';

const Categories = () => {
    const {navigate} = useAppContext();
    return (
      <div className="mt-10">
        <p className="font-medium text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
          Categories
        </p>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-6 gap-6
        "
        >
          {categories.map((category, index) => (
            <div onClick={()=>{navigate(`/products/${category.path.toLocaleLowerCase()}`);
            scrollTo(0,0)}}
              key={index}
              style={{ backgroundColor:category.bgColor }}
              className="group cursor-pointer py-5 px-3 flex flex-col items-center justify-center gap-2 rounded-lg "
            >
              <img
                src={category.image}
                className="group-hover:scale-105 transition max-w-28"
                alt=""
              />
              <p className="font-medium text-sm">{category.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Categories;