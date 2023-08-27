"use client";
import { useEffect, useState } from "react";
import JobNav from "./JobNav"
import Link from "next/link";
const Home = () => {
  const [data, setData] = useState();
  const [isClient, setIsClient] = useState(false)
  
  
  useEffect(() => {
    setIsClient(true)
  }, [])
 
  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/3c4f0cfe-b47a-4db3-835a-10b00efa643b"
      );
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
     <>
    
     <JobNav />
     <table className="table table-responsive table-bordered">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Company Name</th>
          <th scope="col">Role</th>
          <th scope="col">Experience</th>
          <th scope="col">Location</th>
          <th scope="col">Apply</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, i) => (
          <tr key={i}>
            <td>{i}</td>
            <td>{item.CompanyName}</td>
            <td>{item.Role}</td>
            <td>{item.Experience}</td>
            <td>{item.Location}</td>
            <Link style={{ textDecoration: 'none' }} href={item.Apply}>
              <button type="button" className="btn btn-primary btn-small mt-3 mb-2">Apply</button></Link>
          </tr>
        ))}
      </tbody>
    </table>
    </>
    

  );
};

export default Home;
