import React, {useState} from "react"
import "../studyGroup.scss"
import { Link } from 'react-router-dom';


const JoinDetail = () => {
    return(
        <div id="detail-table">
            <div id="left-join">
                <div class="table-contents-join"> 
                    <div class="group-header-join"> CS 121 Exam 1 Study Session </div>
                    <div id ="join-tags">

                        <div class="tag-title">Tags:</div>

                        <div class="major-class-tag-join">CS 121</div>

                        <div class="major-task-tag-join">Midterm 1</div>

                        <div class="location-tags">
                            <div class="location-tag-join">ILC</div>
                            <div class="location-tag-join">S131</div>
                        </div>

                    </div>

                    <div class="tag-title">Description:</div>
                    <div class="tag-descs">This review session will focus on information surrounding loops and object-oriented programing. Chill Vibes only!</div>

                    <div class="filter">

                        <div class="filter-row-join">
                            <div class="tag-title"> People Already in Room:</div>
                            <div class="tag-desc"> 3/20</div>
                        </div>

                        <div class="filter-row-join">
                            <div class="tag-title"> Date:</div>
                            <div class="tag-desc"> April 12th, 2022</div>
                        </div>

                        <div class="filter-row-join">
                            <div class="tag-title"> Start Time:</div>
                            <div class="tag-desc"> 7:00pm</div>
                        </div>
                                            
                        <div class="filter-row-date">  
                            <div class="tag-title"> End Time:</div>
                            <div class="tag-desc"> 9:00pm</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="right-join">
                <div class="filter-row-join">  
                    <div class="tag-title"> Location:</div>
                    <div class="tag-desc"> Integrated Learning Center Room S131</div>
                </div>
                <div class="filter-row-join">  
                    <div class="tag-title"> Address:</div>
                    <div class="tag-desc"> 650 North Pleasant st, Amherst MA 01003</div>
                </div>
            </div>
        </div>
        
    )
}

export default JoinDetail;