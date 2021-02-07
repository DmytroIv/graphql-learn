import React, { useState, useEffect } from 'react';
import {loadCompany} from "./requests";
import {useParams} from "react-router-dom";
import {JobList} from "./JobList";

const CompanyDetail = () => {
  const {companyId} = useParams();
  const [company, setCompany] = useState({});

  useEffect(() => {

    (async () => {
      const currentJob = await loadCompany(companyId);
      setCompany(currentJob);
    })();
  }, [companyId]);

  if (company.id) {
    return (
      <div>
        <h1 className="title">{company.name}</h1>
        <div className="box">{company.description}</div>
        <hr/>
        <h5 className="title is-5">Jobs at a {company.name}</h5>
        <JobList jobs={company.jobs}/>
      </div>
    );
  } else {
    return <h1>Loading...</h1>
  }
};

export default CompanyDetail;