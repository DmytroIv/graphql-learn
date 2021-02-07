import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {loadJob} from './requests';

const JobDetail = () => {
  const {jobId} = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {

    (async () => {
      const currentJob = await loadJob(jobId);
      setJob(currentJob);
    })();
  }, [jobId]);

  if(job.id) {
    return (
      <div>
        <h1 className="title">{job.title}</h1>
        <h2 className="subtitle">
          <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
        </h2>
        <div className="box">{job.description}</div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>
  }
};

export default JobDetail;