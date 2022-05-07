import { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import '../styles.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoidnNhbnRhbmEyNyIsImEiOiJjbDJydXhjMmQzOHF4M2NzYmdoMDhvdThzIn0.R1z752sYbHdCoCua5KmBOg';

function CreateStudyGroup() {
    const [currStep, setStep] = useState(1);
    var availDates = []
    var today = new Date();
    
    for( let i = 0; i < 7; i++ ) {
        availDates.push(today.getMonth() + "/" + (today.getDay()+i) + "/" + today.getFullYear())
    }

    return(
        <div className="px-3 py-2"> 
            <h1>Create a new Study Group</h1>
            {(currStep === 1) ? (
                <>
                    <div class="mb-1 mt-3 row">
                        <label class="col-sm-2 col-form-label">Group Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="Computer Science 121 Final Exam Prep"/>
                        </div>
                    </div>
                    <div class="mb-1 mt-3 row">
                        <label class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                            <textarea type="text" class="form-control" placeholder="Group is going to be working on..." rows="3"/>
                        </div>
                    </div>
                    <div class="mb-1 mt-3 row">
                        <label class="col-sm-2 col-form-label">Max Group Size</label>
                        <div class="col-sm-10">
                            <select class="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="5">Five</option>
                                <option value="8">Eight</option>
                                <option value="13">Thirteen</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-1 mt-3 row">
                        <label class="col-sm-2 col-form-label">Time Slot</label>
                        <div class="col-sm-2">
                            <select class="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="12">12:00</option>
                                <option value="12.5">12:30</option>
                                <option value="1">1:00</option>
                                <option value="1.5">1:30</option>
                                <option value="2">2:00</option>
                                <option value="2.5">2:30</option>
                                <option value="3">3:00</option>
                                <option value="3.5">3:30</option>
                                <option value="4">4:00</option>
                                <option value="4.5">4:30</option>
                                <option value="5">5:00</option>
                                <option value="5.5">5:30</option>
                                <option value="6">6:00</option>
                                <option value="6.5">6:30</option>
                                <option value="7">7:00</option>
                                <option value="7.5">7:30</option>
                                <option value="8">8:00</option>
                                <option value="8.5">8:30</option>
                                <option value="9">9:00</option>
                                <option value="9.5">9:30</option>
                                <option value="10">10:00</option>
                                <option value="10.5">10:30</option>
                                <option value="11">11:00</option>
                                <option value="11.5">11:30</option>
                            </select>
                        </div>
                        <div class="col-sm-2">
                            <select class="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="am">AM</option>
                                <option value="pm">PM</option>
                            </select>
                        </div>
                        -
                        <div class="col-sm-2">
                            <select class="form-select" aria-label="Default select example">
                            <option selected></option>
                                <option value="12">12:00</option>
                                <option value="12.5">12:30</option>
                                <option value="1">1:00</option>
                                <option value="1.5">1:30</option>
                                <option value="2">2:00</option>
                                <option value="2.5">2:30</option>
                                <option value="3">3:00</option>
                                <option value="3.5">3:30</option>
                                <option value="4">4:00</option>
                                <option value="4.5">4:30</option>
                                <option value="5">5:00</option>
                                <option value="5.5">5:30</option>
                                <option value="6">6:00</option>
                                <option value="6.5">6:30</option>
                                <option value="7">7:00</option>
                                <option value="7.5">7:30</option>
                                <option value="8">8:00</option>
                                <option value="8.5">8:30</option>
                                <option value="9">9:00</option>
                                <option value="9.5">9:30</option>
                                <option value="10">10:00</option>
                                <option value="10.5">10:30</option>
                                <option value="11">11:00</option>
                                <option value="11.5">11:30</option>
                            </select>
                        </div>
                        <div class="col-sm-2">
                            <select class="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="am">AM</option>
                                <option value="pm">PM</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-1 mt-3 row">
                        <label class="col-sm-2 col-form-label">Date</label>
                        <div class="col-sm-10">
                            <select class="form-select" aria-label="Default select example">
                                <option selected></option>
                                {availDates.map((date, i) => (
                                    <option key={i} value={date}>{date}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary mt-3">Continue</button>
                </>
            ) : (
                <div>Yo</div>
            )}
        </div>
    );
}

export default CreateStudyGroup;