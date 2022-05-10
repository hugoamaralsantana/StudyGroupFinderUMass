
import '../profile.scss'
import '../studyGroup.scss'
import { Link } from 'react-router-dom';

function ProfileCreated(){
    return (
        <div>
            <div class = "prof-header">Created Study Groups </div>

            <hr></hr>

            <Link to={"/created"}>
            <div id="created" class="study-group-card" >

                <div class="title">CS 187 Project 1 </div>

                <div class = "card-tags">

                    <div class="title"> Tags: </div>
                    <div class="tags">
                        <div >
                            <div class="major-class-tag tag-sep">CS 187</div>
                            <div class="location-tag">ILC</div>
                        </div>
                        <div>
                            <div class="major-task-tag tag-sep">Project 1</div>
                            <div class="location-tag">N151</div>
                        </div>
                    </div>

                </div>

            </div>
            </Link>
            

            <div class = "prof-header"> Joined Study Groups</div>

            <hr></hr>

            <Link to={"/check"}>
            <div id="join" class="study-group-card" >

                <div class="title">CS 121 Miderm 1 </div>

                <div class = "card-tags">

                    <div class="title"> Tags: </div>
                    <div class="tags">
                        <div >
                            <div class="major-class-tag tag-sep">CS 121</div>
                            <div class="location-tag">ILC</div>
                        </div>
                        <div>
                            <div class="major-task-tag tag-sep">Midterm 1</div>
                            <div class="location-tag">S131</div>
                        </div>
                    </div>

                </div>

            </div>
            </Link>

        </div>
    )
}

export default ProfileCreated;