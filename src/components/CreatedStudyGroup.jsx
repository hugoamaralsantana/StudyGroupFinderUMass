import React, {useState, useRef, useEffect } from "react"
import '../styles.scss';
import "../studyGroup.scss"
import { Link } from 'react-router-dom';
import  mapImg  from '../images/map.png'


const CreateStudyGroup = () => {

    return(
        <div id="detail-table">
            <div id="left-join">
                <div class="table-contents-join"> 
                    <div class="group-header-join"> CS 187 Project 1 </div>
                    <div id ="join-tags">

                        <div class="tag-title">Tags:</div>

                        <div class="major-class-tag-join">CS 187</div>

                        <div class="major-task-tag-join">Project 1</div>

                        <div class="location-tags">
                            <div class="location-tag-join">ILC</div>
                            <div class="location-tag-join">N151</div>
                        </div>

                    </div>

                    <div class="filter-row-desc">
                        <div class="tag-title">Description:</div>
                        <div class="tag-descs">We all don't know how to do recursion, LOL. Come learn with us tonight!</div>
                    </div>


                    <div class="filter">

                        <div class="filter-row-join">
                            <div class="tag-title"> People Already in Room:</div>
                            <div class="tag-desc"> 1/20</div>
                        </div>

                        <div class="filter-row-join">
                            <div class="tag-title"> Date:</div>
                            <div class="tag-desc"> April 11th, 2022</div>
                        </div>

                        <div class="filter-row-join">
                            <div class="tag-title"> Start Time:</div>
                            <div class="tag-desc"> 6:00pm</div>
                        </div>
                                            
                        <div class="filter-row-date">  
                            <div class="tag-title"> End Time:</div>
                            <div class="tag-desc"> 8:30pm</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="right-join">
                <div className="map-container-nolan border border-primary m-2">
                    <img src={mapImg} alt="ILC Map" className="map-display-nolan shadow-lg"></img>
                </div>
                <div class="filter-row-join-m">  
                    <div class="tag-title"> Location:</div>
                    <div class="tag-desc"> Integrative Learning Center Room N151</div>
                </div>
                <div class="filter-row-join-m">  
                    <div class="tag-title"> Address:</div>
                    <div class="tag-desc"> 650 North Pleasant st, Amherst MA 01003</div>
                </div>
            </div>
        </div>
        
    )
}

export default CreateStudyGroup;