import React from 'react';
import taxi from '../assets/images/taxi.png';
import '../assets/css/request.css';
// Add any necessary CSS file for styles

const Request = () => {
    return (
        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">


            <div className="container-t">

                <div className="filter-section-t">
                    <h3>Sort by</h3>
                    <h5 className='card-header'>User Requests</h5><br></br>
                    <div className="form-group">
                        <select id="currency" className='select-t' >
                        <option value="Dzire">All Request</option>
                            <option value="Dzire">Pending Request</option>
                            <option value="Swift">Approved Request</option>
                            <option value="Swift">Ride Completed Request</option>
                            <option value="Baleno">Reject Request</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select id="currency" className='select-t' >
                        <option value="Dzire">All Taxi</option>
                            <option value="Dzire">Dzire</option>
                            <option value="Swift">Swift</option>
                            <option value="Baleno">Baleno</option>
                        </select>
                    </div><hr></hr>

                    <h5 className='card-header'>Approval Requests</h5><br></br>
                    <div className="form-group">
                        <select id="currency" className='select-t' >
                        <option value="Dzire">All Request</option>
                            <option value="Dzire">Pending Request</option>
                            <option value="Swift">Approved Request</option>
                            <option value="Swift">Ride Completed Request</option>
                            <option value="Baleno">Reject Request</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select id="currency" className='select-t' >
                        <option value="Dzire">All Taxi</option>
                            <option value="Dzire">Dzire</option>
                            <option value="Swift">Swift</option>
                            <option value="Baleno">Baleno</option>
                        </select>
                    </div><hr></hr>

                    <div>
                        <input type="radio" name="sort" />
                        <label>Close to departure point</label>
                        <span className="filter-icons-t">&#128694;</span>
                    </div>
                    <div>
                        <input type="radio" name="sort" />
                        <label>Close to arrival point</label>
                        <span className="filter-icons-t">&#128694;</span>
                    </div>
                    <div>
                        <input type="radio" name="sort" />
                        <label>Shortest ride</label>
                        <span className="filter-icons-t">&#9201;</span>
                    </div>
                    <div className="clear-all-t">Clear all</div>
                    <hr></hr>
                    <div className="departure-time-t">
                        <label>Departure time</label><br></br>
                        <input type="checkbox" name="departure" id="before6" />
                        <label for="before6">Before 06:00</label>
                    </div>
                </div>


                <div className="ride-section-t">
                    <h2>All Requests</h2>
                    <p>Gurugram, Haryana, India → Kanpur, Uttar Pradesh, India: 6 rides available</p>

                    <h5 className='card-header'>Request ID: XYZ</h5>
                    <div className="ride-card-t">

                        <div className="card-text">
                            <div className="row">
                                <div className="column">
                                    <span className="label">From Destination:</span>
                                    <span className="value">MSIL Gurugram</span>
                                </div>
                                <div className="column">
                                    <span className="label">To Destination:</span>
                                    <span className="value">MSIL Manesar</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Approx Distance:</span>
                                    <span className="value">60KM</span>
                                </div>
                                <div className="column">
                                    <span className="label">Start Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">End Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                                <div className="column">
                                    <span className="label">Taxi Type:</span>
                                    <span className="value">Dzire</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Travel Type:</span>
                                    <span className="value">Local Conveyance</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" id='acceptButton' className="templatemo-blue-button">Accept</button>
                            <button type="view" id='viewButton' className="templatemo-white-button">View</button>
                        </div>
                    </div>

                    <h5 className='card-header'>Request ID: XYZ</h5>
                    <div className="ride-card-t">

                        <div className="card-text">
                            <div className="row">
                                <div className="column">
                                    <span className="label">From Destination:</span>
                                    <span className="value">MSIL Gurugram</span>
                                </div>
                                <div className="column">
                                    <span className="label">To Destination:</span>
                                    <span className="value">MSIL Manesar</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Approx Distance:</span>
                                    <span className="value">60KM</span>
                                </div>
                                <div className="column">
                                    <span className="label">Start Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">End Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                                <div className="column">
                                    <span className="label">Taxi Type:</span>
                                    <span className="value">Dzire</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Travel Type:</span>
                                    <span className="value">Local Conveyance</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" id='acceptButton' className="templatemo-blue-button">Accept</button>
                            <button type="view" id='viewButton' className="templatemo-white-button">View</button>
                        </div>
                    </div>


                    <h5 className='card-header'>Request ID: XYZ</h5>

                    <div className="ride-card-t">

                        <div className="card-text">
                            <div className="row">
                                <div className="column">
                                    <span className="label">From Destination:</span>
                                    <span className="value">MSIL Gurugram</span>
                                </div>
                                <div className="column">
                                    <span className="label">To Destination:</span>
                                    <span className="value">MSIL Manesar</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Approx Distance:</span>
                                    <span className="value">60KM</span>
                                </div>
                                <div className="column">
                                    <span className="label">Start Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">End Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                                <div className="column">
                                    <span className="label">Taxi Type:</span>
                                    <span className="value">Dzire</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Travel Type:</span>
                                    <span className="value">Local Conveyance</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="templatemo-blue-button">Accept</button>
                            <button type="View" className="templatemo-white-button">View</button>
                        </div>
                    </div>


                    <h5 className='card-header'>Request ID: XYZ</h5>

                    <div className="ride-card-t">

                        <div className="card-text">
                            <div className="row">
                                <div className="column">
                                    <span className="label">From Destination:</span>
                                    <span className="value">MSIL Gurugram</span>
                                </div>
                                <div className="column">
                                    <span className="label">To Destination:</span>
                                    <span className="value">MSIL Manesar</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Approx Distance:</span>
                                    <span className="value">60KM</span>
                                </div>
                                <div className="column">
                                    <span className="label">Start Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">End Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                                <div className="column">
                                    <span className="label">Taxi Type:</span>
                                    <span className="value">Dzire</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Travel Type:</span>
                                    <span className="value">Local Conveyance</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="templatemo-blue-button">Accept</button>
                            <button type="View" className="templatemo-white-button">View</button>
                        </div>
                    </div>



                    <h5 className='card-header'>Request ID: XYZ</h5>
                    <div className="ride-card-t">

                        <div className="card-text">
                            <div className="row">
                                <div className="column">
                                    <span className="label">From Destination:</span>
                                    <span className="value">MSIL Gurugram</span>
                                </div>
                                <div className="column">
                                    <span className="label">To Destination:</span>
                                    <span className="value">MSIL Manesar</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Approx Distance:</span>
                                    <span className="value">60KM</span>
                                </div>
                                <div className="column">
                                    <span className="label">Start Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">End Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                                <div className="column">
                                    <span className="label">Taxi Type:</span>
                                    <span className="value">Dzire</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Travel Type:</span>
                                    <span className="value">Local Conveyance</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="templatemo-blue-button">Accept</button>
                            <button type="View" className="templatemo-white-button">View</button>
                        </div>
                    </div>

                    <h5 className='card-header'>Request ID: XYZ</h5>


                    <div className="ride-card-t">

                        <div className="card-text">
                            <div className="row">
                                <div className="column">
                                    <span className="label">From Destination:</span>
                                    <span className="value">MSIL Gurugram</span>
                                </div>
                                <div className="column">
                                    <span className="label">To Destination:</span>
                                    <span className="value">MSIL Manesar</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Approx Distance:</span>
                                    <span className="value">60KM</span>
                                </div>
                                <div className="column">
                                    <span className="label">Start Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">End Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                                <div className="column">
                                    <span className="label">Taxi Type:</span>
                                    <span className="value">Dzire</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Travel Type:</span>
                                    <span className="value">Local Conveyance</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="templatemo-blue-button">Accept</button>
                            <button type="View" className="templatemo-white-button">View</button>
                        </div>
                    </div>


                    <h5 className='card-header'>Request ID: XYZ</h5>
                    <div className="ride-card-t">

                        <div className="card-text">
                            <div className="row">
                                <div className="column">
                                    <span className="label">From Destination:</span>
                                    <span className="value">MSIL Gurugram</span>
                                </div>
                                <div className="column">
                                    <span className="label">To Destination:</span>
                                    <span className="value">MSIL Manesar</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Approx Distance:</span>
                                    <span className="value">60KM</span>
                                </div>
                                <div className="column">
                                    <span className="label">Start Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">End Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                                <div className="column">
                                    <span className="label">Taxi Type:</span>
                                    <span className="value">Dzire</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Travel Type:</span>
                                    <span className="value">Local Conveyance</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="templatemo-blue-button">Accept</button>
                            <button type="View" className="templatemo-white-button">View</button>
                        </div>
                    </div>


                    <h5 className='card-header'>Request ID: XYZ</h5>

                    <div className="ride-card-t">

                        <div className="card-text">
                            <div className="row">
                                <div className="column">
                                    <span className="label">From Destination:</span>
                                    <span className="value">MSIL Gurugram</span>
                                </div>
                                <div className="column">
                                    <span className="label">To Destination:</span>
                                    <span className="value">MSIL Manesar</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Approx Distance:</span>
                                    <span className="value">60KM</span>
                                </div>
                                <div className="column">
                                    <span className="label">Start Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">End Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                                <div className="column">
                                    <span className="label">Taxi Type:</span>
                                    <span className="value">Dzire</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Travel Type:</span>
                                    <span className="value">Local Conveyance</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="templatemo-blue-button">Accept</button>
                            <button type="View" className="templatemo-white-button">View</button>
                        </div>
                    </div>




                    <h5 className='card-header'>Request ID: XYZ</h5>



                    <div className="ride-card-t">

                        <div className="card-text">
                            <div className="row">
                                <div className="column">
                                    <span className="label">From Destination:</span>
                                    <span className="value">MSIL Gurugram</span>
                                </div>
                                <div className="column">
                                    <span className="label">To Destination:</span>
                                    <span className="value">MSIL Manesar</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Approx Distance:</span>
                                    <span className="value">60KM</span>
                                </div>
                                <div className="column">
                                    <span className="label">Start Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">End Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                                <div className="column">
                                    <span className="label">Taxi Type:</span>
                                    <span className="value">Dzire</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Travel Type:</span>
                                    <span className="value">Local Conveyance</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="templatemo-blue-button">Accept</button>
                            <button type="View" className="templatemo-white-button">View</button>
                        </div>
                    </div>
                    <h5 className='card-header'>Request ID: XYZ</h5>


                    <div className="ride-card-t">

                        <div className="card-text">
                            <div className="row">
                                <div className="column">
                                    <span className="label">From Destination:</span>
                                    <span className="value">MSIL Gurugram</span>
                                </div>
                                <div className="column">
                                    <span className="label">To Destination:</span>
                                    <span className="value">MSIL Manesar</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Approx Distance:</span>
                                    <span className="value">60KM</span>
                                </div>
                                <div className="column">
                                    <span className="label">Start Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">End Date:</span>
                                    <span className="value">28-Jun-2024</span>
                                </div>
                                <div className="column">
                                    <span className="label">Taxi Type:</span>
                                    <span className="value">Dzire</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <span className="label">Travel Type:</span>
                                    <span className="value">Local Conveyance</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="templatemo-blue-button">Accept</button>
                            <button type="View" className="templatemo-white-button">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Request;
