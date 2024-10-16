// App.js
import React, { useState } from 'react';
import '../assets/css/view.css';
import '../assets/css/form.css';
import taxi from '../assets/images/taxi.png';
import '../assets/css/style.css';
import '../assets/css/animated.css';
const ViewForm = () => {
  const [formData, setFormData] = useState({
    expenseType: '',
    amount: '',
    currency: 'INR',
    spentAt: '',
    description: '',
    cityName: '',
    category: '',
    dateOfExpense: '',
    timeOfExpense: '',
  });

  const [currentSection, setCurrentSection] = useState(1);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleNextSection = () => {
    setCurrentSection(currentSection + 1);
  };

  const handleReset = () => {
    setFormData({
      expenseType: '',
      amount: '',
      currency: 'INR',
      spentAt: '',
      description: '',
      cityName: '',
      category: '',
      dateOfExpense: '',
      timeOfExpense: '',
    });
    setCurrentSection(1);
  };

  return (
    <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="container">
      <div className="row">

      
    <div className="expense-form">
      <div className="form-container">
        {/* Left side for file upload */}
        <div className="left-side">
      
        
          {currentSection === 1 && (
            <form>


<div className="form-test">
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              </div>
              <div className="form-test">
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              </div>

              <div className="form-test">
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              </div>
              <div className="form-test">
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              </div>
              <div className="form-test">
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              </div>
              <div className="form-test">
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              </div>
              <div className="form-test">
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              </div>
              <div className="form-test">
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              </div>
              <div className="form-test">
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              </div><div className="form-test">
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              </div>
              <div className="form-test">
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              </div>
              <div className="form-test">
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              <div className="form-group-t">
                <span className='txtLabel' htmlFor="timeOfExpense"><b>From Destination:</b></span>
                <span>
                  MSIL Gurgram
                  </span>
                
              </div>
              </div>

              <div className="form-test">
              <div className="form-group-t">
                <label htmlFor="timeOfExpense">Time of Expense</label>
                <input
                  type="time"
                  id="timeOfExpense" className='input-t'
                  value={formData.timeOfExpense}
                  onChange={handleInputChange}
                  required
                />
                
              </div>
              <div className="form-group-t">
                <label htmlFor="timeOfExpense">Time of Expense</label>
                <input
                  type="time"
                  id="timeOfExpense" className='input-t'
                  value={formData.timeOfExpense}
                  onChange={handleInputChange}
                  required
                />
                </div>
              </div>

              <div className="button-group">
                <button type="button" onClick={handleNextSection}>
                  Next
                </button>
                <button type="reset" onClick={handleReset}>
                  Cancel
                </button>
              </div>
            </form>
          )}


        </div><div className="right-side"><br></br>
                  <img src={taxi}style={{marginTop:-50}} alt="team meeting" />
             
              
        </div>

        {/* Right side for form input fields */}
   
      </div>
    </div></div></div></div>
  );
};

export default ViewForm;
