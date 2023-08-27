"use client";
import React from 'react'
import Link from 'next/link';

import { useEffect, useState } from "react";
const JobNav = () => {
  const [filteredData, setFilteredData] = useState([]);
  
  
  const filterByColumn1 = () => {
    // Filter the data based on Column 1 criteria
    const filtered = excelData.filter((row) => row.column1 === 'FilterValue1');
    setFilteredData(filtered);
  };

  const filterByColumn2 = () => {
    // Filter the data based on Column 2 criteria
    const filtered = excelData.filter((row) => row.column2 === 'FilterValue2');
    setFilteredData(filtered);
  };


  return (
    <header className="p-3 bg-primary text-white ">
    <div className="container-fluid">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none ">
        </Link>
        <div className="text-end ">
          <button type="button" className="btn btn-outline-light me-2 btn btn-primary" onClick={filterByColumn1}>Internship </button>
          <button type="button" className="btn btn-outline-light me-2 btn btn-primary" onClick={filterByColumn1}>Jobs</button>
        
        </div>
      </div>
    </div>
  </header>
  )
}

export default JobNav;