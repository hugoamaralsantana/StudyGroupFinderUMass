import React, {useState} from "react"
import "../studyGroup.scss"
import JoinDetail from "./JoinDetail";
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';


const JoinStudyGroup = () => {


    const [major, setMajor] = useState();
    const [majorClass, setMajorClass] = useState();
    const [tag, setTags] = useState();
    const [location, setLocation] = useState();
    const [result, setResult] = useState();

    const [filter, setFilter] = useState(false);

    return (
        <>

            <div id="studyGroupTag"> Filter By: </div>


            {/* Select Major */}
            <select name= "major" id= "major-select" class="drop-down" onChange={e => setMajor(e.target.value)}> 
                <option value= "">Select a Major</option>
                <option value= "Architecture">Architecture</option>
                <option value= "Agriculture">Agriculture</option>
                <option value= "Biology">Biology</option>
                <option value= "Computer Science">Computer Science</option>
                <option value= "Chemistry">Computer Science</option>
                <option value= "Engineering">Engineering</option>
                <option value= "English">English</option>
            </select>

            {/* Select Classes */}
            {
                major && 

                (
                    <select name= "class" id= "class-select" class="drop-down" onChange={e => setMajorClass(e.target.value)}> 
                        <option value= "">Select a Class</option>
                        <option value= "121">CS 121</option>
                        <option value= "186">CS 186</option>
                        <option value= "187">CS 187</option>
                        <option value= "220">CS 220</option>
                        <option value= "230">CS 230</option>
                        <option value= "240">CS 240</option>
                        <option value= "250">CS 250</option>
                        <option value= "311">CS 311</option>
                        <option value= "325">CS 325</option>
                    </select>                    
                    

                )

            }


            {
                majorClass &&
                (
                    <select name="tags" id="tag-select" class="drop-down" onChange={e => setTags(e.target.value)}>
                        <option value="">Select a Tag</option>
                        <option value="Miderm 1">Miderm 1</option>
                        <option value="Midterm 2">Midterm 2</option>
                        <option value="Exam 1">Exam 1</option>
                        <option value="Exam 2">Exam 2</option>
                        <option value="Exam 3">Exam 3</option>
                        <option value="Final">Final</option>
                        <option value="Project 1">Project 1</option>
                        <option value="Project 2">Project 2</option>
                        <option value="Homework 1">Homework 1</option>
                    </select>
                )

            }

            {/* Select Location */}

            <select name= "location" id= "location-select" class="drop-down" onChange={e => setLocation(e.target.value)}> 
                <option value= "">Select a Location</option>
                <option value= "Engineering Lab I">Engineering Lab I</option>
                <option value= "Engineering Lab II">Engineering Lab II</option>
                <option value= "Franklin Dining Common">Franklin Dining Common</option>
                <option value= "Hasbrouck Laboratory">Hasbrouck Laboratory</option>
                <option value= "Herter Hall">Herter Hall</option>
                <option value= "Integrated Learning Center">Integrated Learning Center</option>
                <option value= "Lederle Engineering Library">Lederle Engineering Library</option>
                <option value= "Lederle Research Tower">Lederle Research Tower</option>
                <option value= "W.E.B Du bois Library">W.E.B Du bois Library</option>
            </select>

            <br>
            </br>

            <button id="filter-butt"onClick={() => setFilter(true)} > Filter </button>

            <hr>
            </hr>

            <div id="bottom-half">
                <div id="results-table">
                    {
                        filter && 
                        (                   
                            <div id="results-box"> 
                                <div 
                                className="result-box"
                                
                                id="result-1-header" onClick={e => setResult("result-1-header")}> 
                                    <div class="result-title">CS 121 Midterm 1 </div>
                                    <div class="result-location"> Location: Integrative Learning Center</div>
                                    <div class="result-room"> Room S131</div>
                                </div>
                                <div
                                    className="result-box"id="result-2-header" onClick={e => setResult("result-2-header")}>
                                    <div class="result-title">CS 121 Exam 1</div>
                                    <div class="result-location"> Location: Integrative Learning Center</div>
                                    <div class="result-room"> Room N151</div>
                                </div>
                                <div
                                    className="result-box"id="result-3-header" onClick={e => setResult("result-3-header")}>
                                    <div class="result-title">CS 121 Exam 1 Study Session</div>
                                    <div class="result-location"> Location: Integrative Learning Center</div>
                                    <div class="result-room"> Room N101</div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div id="click-table">
                    {
                        result == "result-1-header" && 

                        (
                            <div class="table-contents"> 
                                <div class="group-header"> CS 121 Midterm 1</div>
                                <div class="tags">
                                    <div class="major-class-tag">CS 121</div>
                                    <div class="major-task-tag">Midterm 1</div>
                                    <div class="location-tag">ILC</div>
                                    <div class="location-tag">S131</div>
                                </div>
                                <div class="filter">

                                    <div className="filter-row">
                                        <div class="loc"> Location: </div>
                                        <div class="loc-desc"> Integrative Learning Center Room S131</div>
                                    </div>

                                    <div class="filter-row"> 
                                        <div class="loc"> Address:</div>
                                        <div class="loc-desc"> 650 North Pleasant St, Amherst MA 01003</div>
                                    </div>

                                    <div class="filter-row">
                                        <div class="loc"> Date:</div>
                                        <div class="loc-desc"> April 11th, 2022</div>
                                    </div>

                                    <div class="filter-row">
                                        <div class="loc"> Start Time:</div>
                                        <div class="loc-desc"> 7:00pm</div>
                                    </div>
                                    
                                    <div class="filter-row">  
                                        <div class="loc"> End Time:</div>
                                        <div class="loc-desc"> 9:00pm</div>
                                    </div>

                                </div>
                                <Link to={`/detail`}> <button id="filter-butt"> Details </button> </Link>
                            </div>

                        )
                    }

                    {
                        result == "result-2-header" && 

                        (
                            <div class="table-contents"> 
                                <div class="group-header"> CS 121 Exam 1</div>
                                <div class="tags">
                                    <div class="major-class-tag">CS 121</div>
                                    <div class="major-task-tag">Midterm 1</div>
                                    <div class="location-tag">ILC</div>
                                    <div class="location-tag">S131</div>
                                </div>
                                <div class="filter">

                                    <div className="filter-row">
                                        <div class="loc"> Location: </div>
                                        <div class="loc-desc"> Integrative Learning Center Room N151</div>
                                    </div>

                                    <div class="filter-row"> 
                                        <div class="loc"> Address:</div>
                                        <div class="loc-desc"> 650 North Pleasant St, Amherst MA 01003</div>
                                    </div>

                                    <div class="filter-row">
                                        <div class="loc"> Date:</div>
                                        <div class="loc-desc"> April 12th, 2022</div>
                                    </div>

                                    <div class="filter-row">
                                        <div class="loc"> Start Time:</div>
                                        <div class="loc-desc"> 3:00pm</div>
                                    </div>
                                    
                                    <div class="filter-row">  
                                        <div class="loc"> End Time:</div>
                                        <div class="loc-desc"> 7:00pm</div>
                                    </div>

                                </div>
                                <button id="filter-butt" onClick={() => setFilter(true)} > Details </button>
                            </div>
                            
                        )
                    }

                    {
                        result == "result-3-header" && 

                        (
                            <div class="table-contents"> 
                                <div class="group-header"> CS 121 Exam 1 Study Session </div>
                                <div class="tags">
                                    <div class="major-class-tag">CS 121</div>
                                    <div class="major-task-tag">Midterm 1</div>
                                    <div class="location-tag">ILC</div>
                                    <div class="location-tag">S131</div>
                                </div>
                                <div class="filter">
                                    <div class="filter-row">
                                        <div class="loc"> Location: </div>
                                        <div class="loc-desc"> Integrative Learning Center Room N101</div>
                                    </div>

                                    <div class="filter-row"> 
                                        <div class="loc"> Address:</div>
                                        <div class="loc-desc"> 650 North Pleasant St, Amherst MA 01003</div>
                                    </div>

                                    <div class="filter-row">
                                        <div class="loc"> Date:</div>
                                        <div class="loc-desc"> April 9th, 2022</div>
                                    </div>

                                    <div class="filter-row">
                                        <div class="loc"> Start Time:</div>
                                        <div class="loc-desc"> 1:00pm</div>
                                    </div>
                                    
                                    <div class="filter-row">  
                                        <div class="loc"> End Time:</div>
                                        <div class="loc-desc"> 7:00pm</div>
                                    </div>
                                </div>
                                <button id="filter-butt" onClick={() => setFilter(true)} > Details </button>
                            </div>
                            
                        )
                    }
                </div>
            </div>
        </>
    )

    ///

}


/* 
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
 */

export default JoinStudyGroup