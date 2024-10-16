import React from 'react';

const ProjectStatus = () => {
  const progressData = [
    { title: "Web Design", progress: 80 },
    { title: "Website Markup", progress: 72 },
    { title: "One Page", progress: 89 },
    { title: "Mobile Template", progress: 55 },
    { title: "Backend API", progress: 66 },
  ];

  return (
    <>
      {progressData.map((item, index) => (
        <div className="col-sm-6 mb-3" key={index}>
          <div className="card h-100">
            <div className="card-body">
              <h6 className="d-flex align-items-center mb-3">
                <i className="material-icons text-info mr-2">assignment</i>Project Status
              </h6>
              <small>{item.title}</small>
              <div className="progress mb-3" style={{ height: '5px' }}>
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${item.progress}%` }} aria-valuenow={item.progress} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectStatus;
