// App.js
import React, { useState } from 'react';
import '../assets/css/form.css';
import taxi from '../assets/images/taxi.png';
import '../assets/css/style.css';
import '../assets/css/animated.css';
const Form = () => {
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
      
               
                  <img src={taxi}style={{marginTop:-50}} alt="team meeting" />
             
              
        </div>

        {/* Right side for form input fields */}
        <div className="right-side"><br></br>
          {currentSection === 1 && (
            <form>
              <div className="form-group">
                <label htmlFor="expenseType">Shashank </label>
                <select id="expenseType" className='select-t' value={formData.expenseType} onChange={handleInputChange}>
                  <option value="">----Select Appropriate Transaction Type----</option>
                  <option value="Travel">Travel</option>
                  <option value="Food">Food</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input className='input-t'
                  type="number"
                  id="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="e.g. 100"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="currency">Currency</label>
                <select id="currency" className='select-t' value={formData.currency} onChange={handleInputChange}>
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                </select>
              </div>



              <div className="form-group">
                <label htmlFor="dateOfExpense">Date of Expense</label>
                <input
                  type="date"
                  id="dateOfExpense" className='input-t'
                  value={formData.dateOfExpense}
                  onChange={handleInputChange}
                  required
                />
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

          {/* Section 2 */}
          {currentSection === 2 && (
                    <form>
              <div className="form-group">
                <label htmlFor="expenseType">Expense Type</label>
                <select id="expenseType" value={formData.expenseType} onChange={handleInputChange}>
                  <option value="">----Select Appropriate Transaction Type----</option>
                  <option value="Travel">Travel</option>
                  <option value="Food">Food</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  id="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="e.g. 100"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="currency">Currency</label>
                <select id="currency" value={formData.currency} onChange={handleInputChange}>
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="spentAt">Spent at</label>
                <input
                  type="text"
                  id="spentAt"
                  value={formData.spentAt}
                  onChange={handleInputChange}
                  placeholder="e.g. Starbucks"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="e.g. Paid for lunch"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cityName">City Name</label>
                <input
                  type="text"
                  id="cityName"
                  value={formData.cityName}
                  onChange={handleInputChange}
                  placeholder="Enter first 3 letters"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category" value={formData.category} onChange={handleInputChange} required>
                  <option value="">Select Category</option>
                  <option value="Business">Business</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="dateOfExpense">Date of Expense</label>
                <input
                  type="date"
                  id="dateOfExpense"
                  value={formData.dateOfExpense}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="timeOfExpense">Time of Expense</label>
                <input
                  type="time"
                  id="timeOfExpense"
                  value={formData.timeOfExpense}
                  onChange={handleInputChange}
                  required
                />
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
        </div>
      </div>
    </div></div></div></div>
  );
};

export default Form;
