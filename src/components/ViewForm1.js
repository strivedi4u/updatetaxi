import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import '../assets/css/form.css';
import taxi from '../assets/images/taxi.png';

const ViewForm1 = (props) => {
    const navigate = useNavigate();

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

    const handleSubmit = () => {
        swal("Congratulations 🎉", "Taxi has been booked successfully", "success");
        navigate("/view");
    };


    return (
        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">


                    <div className="expense-form">
                        <div className="form-container">

                            <div className="left-side">
                                <form>
                                    <div className="form-test">
                                        <div className="form-group-t">
                                            <label htmlFor="timeOfExpense">On Behalf Of *</label>
                                            <select id="currency" className='select-t' value={formData.currency} onChange={handleInputChange}>
                                                <option value="Dzire">No</option>
                                                <option value="Swift">Yes</option>
                                                <option value="Baleno">Baleno</option>
                                            </select>

                                        </div>
                                        <div className="form-group-t">
                                            <label htmlFor="timeOfExpense">Staff No. *</label>
                                            <input
                                                type="text" readOnly
                                                id="timeOfExpense" className='input-t'
                                                placeholder="e.g. 598801"
                                                value={formData.timeOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-test">
                                        <div className="form-group-t">
                                            <label htmlFor="timeOfExpense">Employee Name *</label>
                                            <input
                                                type="text"
                                                id="timeOfExpense" className='input-t'
                                                placeholder="e.g. Shashank Trivedi"
                                                value={formData.timeOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />

                                        </div>
                                        <div className="form-group-t">
                                            <label htmlFor="timeOfExpense">Employee Mobile No. *</label>
                                            <input
                                                type="text"
                                                id="timeOfExpense" className='input-t'
                                                placeholder="e.g. 8005205383"
                                                value={formData.timeOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>


                                    <div className="form-test">
                                        <div className="form-group-t">
                                            <label htmlFor="timeOfExpense">Choose Taxi *</label>

                                            <select id="currency" className='select-t' value={formData.currency} onChange={handleInputChange}>
                                                <option value="Dzire">Dzire</option>
                                                <option value="Swift">Swift</option>
                                                <option value="Baleno">Baleno</option>
                                            </select>


                                        </div>
                                        <div className="form-group-t">
                                            <label htmlFor="timeOfExpense">Cost Center *</label>
                                            <input
                                                type="number"
                                                id="timeOfExpense" className='input-t' readOnly
                                                placeholder="e.g. 8723"
                                                value={formData.timeOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>


                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="currency">Approver Name *</label>
                                        <input
                                            type="text"
                                            id="dateOfExpense" className='input-t' readOnly
                                            placeholder="e.g. Arun Kumar Vasistha"
                                            value={formData.dateOfExpense}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>


                                    <div className="form-test">
                                        <div className="form-group-t">
                                            <label htmlFor="timeOfExpense">Co-Passenger Name</label>
                                            <input
                                                type="text"
                                                id="timeOfExpense" className='input-t'
                                                placeholder="e.g. Jigyasu"
                                                value={formData.timeOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />

                                        </div>
                                        <div className="form-group-t">
                                            <label htmlFor="timeOfExpense">Co-Passenger Mobile No.</label>
                                            <input
                                                type="number"
                                                id="timeOfExpense" className='input-t'
                                                placeholder="e.g. 1234567890"
                                                value={formData.timeOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>


                                    </div>



 
                                </form>
                            </div>

                            <div className="right-side">

                                <form>
                                    <div className="form-test">
                                        <div className="form-group-t">
                                            <label htmlFor="timeOfExpense">Pickup Point *</label>
                                            <input
                                                type="text"
                                                id="timeOfExpense" className='input-t'
                                                placeholder="e.g. New Delhi"
                                                value={formData.timeOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />

                                        </div>
                                        <div className="form-group-t">
                                            <label htmlFor="timeOfExpense">Destination Point *</label>
                                            <input
                                                type="text"
                                                id="timeOfExpense" className='input-t'
                                                placeholder="e.g. Gurugram"
                                                value={formData.timeOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>


                                    <div className="form-test">
                                        <div className="form-group-t">
                                            <label htmlFor="timeOfExpense">Waypoints</label>
                                            <input
                                                type="text"
                                                id="timeOfExpense" className='input-t'
                                                placeholder="e.g. Redfort"
                                                value={formData.timeOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />

                                        </div>
                                        <div className="form-group-t">
                                            <label htmlFor="timeOfExpense">Approx KM *</label>
                                            <input
                                                type="number"
                                                id="timeOfExpense" className='input-t' readOnly
                                                placeholder="e.g. 20"
                                                value={formData.timeOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>


                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="currency">Date of Travel *</label>
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
                                            <label htmlFor="timeOfExpense">Departure Time *</label>
                                            <input
                                                type="time"
                                                id="timeOfExpense" className='input-t'
                                                value={formData.timeOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />

                                        </div>
                                        <div className="form-group-t">
                                            <label htmlFor="timeOfExpense">Arrival Time *</label>
                                            <input
                                                type="time"
                                                id="timeOfExpense" className='input-t'
                                                value={formData.timeOfExpense}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>


                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="amount">Purpose of Visit *</label>
                                        <input className='input-t'
                                            type="text"
                                            id="amount"
                                            value={formData.amount}
                                            onChange={handleInputChange}
                                            placeholder="e.g. Business Meeting"
                                            required
                                        />
                                    </div>


                                    <div className="button-group">
                                        <button type="button" id='successButton' onClick={handleSubmit}>
                                            Submit
                                        </button>
                                        <button type="button" id='cancelButton' onClick={handleReset}>
                                            Back
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div></div></div></div>
    );
};

export default ViewForm1;
