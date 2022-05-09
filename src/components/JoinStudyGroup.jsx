import { useState } from 'react'
import StudyGroupList from './StudyGroupList'

function JoinStudyGroup(){
    const [major, setMajor] = useState('');
    const [course, setCourse] = useState('');
    const [material, setMaterial] = useState('');
    const [location, setLocation] = useState('');

    const [showResults, setShowResults] = useState(false);

    const [currCard, setCard] = useState(0)

    const handleFilter = () => {
        if(major === '' || course === '' || material === '' || location === ''){
            alert("Please make sure all dropdowns are selected before filtering.");
        } else{
            setShowResults(true);
        }
    }

    return(
        <>
                    <div class="mb-1 mt-3 row">
                        <div class="col-sm-3">
                            <select class="form-select" aria-label="Select a major" onChange={e => setMajor(e.target.value)}>
                                <option selected>Select Major</option>
                                <option value="cs">Computer Science</option>
                                <option value="math">Mathematics</option>
                                <option value="econ">Economics</option>
                                <option value="pm">Mathematics</option>
                            </select>
                        </div>
                        <div class="col-sm-3">
                            <select class="form-select" aria-label="Select a course" onChange={e => setCourse(e.target.value)}>
                                <option selected>Select Course</option>
                                <option value="121">CS121</option>
                                <option value="186">CS186</option>
                                <option value="187">CS187</option>
                                <option value="250">CS250</option>
                                <option value="220">CS220</option>
                                <option value="230">CS230</option>
                                <option value="240">CS240</option>
                            </select>
                        </div>
                        <div class="col-sm-3">
                            <select class="form-select" aria-label="Select Course Material" onChange={e => setMaterial(e.target.value)}>
                                <option selected>Select a Course Material</option>
                                <option value="midterm">Mid-term</option>
                                <option value="final">Final</option>
                                <option value="hw">Homework</option>
                                <option value="project">Project</option>
                            </select>
                        </div>
                        <div class="col-sm-3">
                            <select class="form-select" aria-label="Select a location" onChange={e => setLocation(e.target.value)}>
                                <option selected>Select a Location</option>
                                <option value="lab">Engineering Lab I</option>
                                <option value="lab1">Engineering Lab II</option>
                                <option value="lib">W.E.B Du Bois Library</option>
                                <option value="herthall">Herter Hall</option>
                                <option value="lrt">Lederle Research Tower</option>
                                <option value="ilc">Integrated Learning Center</option>
                            </select>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary mt-3" onClick={() => {handleFilter()}}>Filter</button>

            
                <div className="container results-container mt-2 p-1 bg-primary">
                    <div className="row">
                    {showResults ? (
                        <StudyGroupList/>
                        ) : (
                            <div className="display-5 mt-5 text-secondary">Results will display here once all filters are selected and applied</div>
                        )}
                    </div>
                </div>
        </>
    );
}

export default JoinStudyGroup;
