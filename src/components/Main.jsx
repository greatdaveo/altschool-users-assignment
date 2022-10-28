import { useState, useEffect } from "react";
import UsersData from "../pages/UsersData";
import Pagination from "./Pagination";


import "./Main.css";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPageUsers, setCurrentPageUsers] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  // const getData = () => {

  // };

  useEffect(() => {
    setLoading(true);
    fetch("https://www.randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data.results);
        setLoading(false);
      });
  }, []);

  // To get the number of users Info on a page
  const indexOfLastPost = currentPageUsers * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost)

  // To change the page data
  const handlePagination = (pageNumber) => setCurrentPageUsers(pageNumber)
  
  return (
    <div>
      {/* <button onClick={getData}>Click Me</button> <br /> */}
      <br />
        <UsersData
          usersInfo={currentPosts} 
          isLoading={loading}
        />
        <Pagination 
          userPerPage={usersPerPage} 
          totalUsers={users.length}
          paginate={handlePagination}
        />
    </div>
  );
};

export default Main;
