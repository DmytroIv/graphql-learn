import React, { useState } from 'react';
import {createJob} from "./requests";
import {useHistory} from "react-router-dom";

const JobForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({[name]: value});
  };

  const handleClick = (event) => {
    event.preventDefault();

    const {title, description} = formData;
    createJob({title, description}).then((job) => {
      history.push(`/jobs/${job.id}`);
    });
  };

  return (
    <div>
      <h1 className="title">New Job</h1>
      <div className="box">
        <form>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input" type="text" name="title" value={formData.title}
                     onChange={handleChange} />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
                <textarea className="input" style={{height: '10em'}}
                          name="description" value={formData.description} onChange={handleChange} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" onClick={handleClick}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
