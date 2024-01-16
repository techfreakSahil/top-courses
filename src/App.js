import React from "react";
import Navbar from "./components/Navbar.js";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Card from "./components/Card.js";
import { filterData, apiUrl } from "./data.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
//import { Toast } from "react-toastify/dist/components/Toast.js";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="w-11/12 flex max-w-[1200px] justify-center items-center min-h[50vh] mx-auto flex-wrap">
        <Cards courses={courses} category={category} />
      </div>
    </div>
  );
};

export default App;
