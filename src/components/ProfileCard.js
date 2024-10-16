import React from 'react';

const ProfileCard = () => {
  return (
    <><div className='userProfile'>    <div className="card">
        <div className="card-body">
          <div className="d-flex flex-column align-items-center text-center">
            <img src="https://avatars.githubusercontent.com/u/81739538?v=4" alt="Admin" className="rounded-circle" width="150" />
            <div className="mt-3">
              {/* <h4>John Doe</h4>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
              <button className="btn btn-primary">Follow</button>
              <button className="btn btn-outline-primary">Message</button> */}
            </div>
          </div>
        </div></div>
  
      </div>

      {/* <div className="card mt-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="mb-0">Website</h6>
            <span className="text-secondary">https://bootdey.com</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="mb-0">Github</h6>
            <span className="text-secondary">bootdey</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="mb-0">Twitter</h6>
            <span className="text-secondary">@bootdey</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="mb-0">Instagram</h6>
            <span className="text-secondary">bootdey</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="mb-0">Facebook</h6>
            <span className="text-secondary">bootdey</span>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default ProfileCard;
