import React from "react";

function Filter(props) {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex-wrap max-w-max mx-auto space-x-4 flex justify-center gap-y-4 py-5">
      {filterData.map((data) => {
        return (
          <button
            onClick={() => filterHandler(data.title)}
            key={data.id}
            className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${
              category === data.title
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }`}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
