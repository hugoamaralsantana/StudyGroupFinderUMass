import '../confirmation.scss';
import { Link } from 'react-router-dom';

function Confirmation(){
    return(
        <div className = "px-3 py-2">
            <h1>Room Reservation Confirmation</h1>
            <p style = ".confirmation-paragraph1"><b>Name:</b> CS 187 Project 1</p>
            <p style = ".confirmation-paragraph2"><b>Description:</b> We all don't know how to do recursion, LOL. Come learn with us tonight! </p>
            <p style = ".confirmation-paragraph3"><b>Max Number of People:</b> 20 </p>
            <p style = ".confirmation-paragraph4"><b>Start Time:</b> 6:00 pm </p>
            <p style = ".confirmation-paragraph5"><b>End Time:</b> 8:30 pm </p>
            <p style = ".confirmation-paragraph6"><b>Date:</b> 04/11/2022 </p>
            <p style = ".confirmation-paragraph7"><b>Major:</b> Computer Science </p>
            <p style = ".confirmation-paragraph8"><b>Major Related Class:</b> CS 187 </p>
            <p style = ".confirmation-paragraph9"><b>Additional Tag(s):</b> Project 1 </p>
            <p style = ".confirmation-paragraph10"><b>Building:</b> Integrative Learning Center </p>
            <p style = ".confirmation-paragraph11"><b>Location:</b> 650 North Pleasant st, Amherst MA 01003 </p>
            <p style = ".confirmation-paragraph12"><b>Floor:</b> 1 </p>
            <p style = ".confirmation-paragraph13"><b>Room:</b>  N151 </p>
            <button type="button" class=".confirmation-button1">Edit Stat(s)</button>
            <button type="button" class=".confirmation-button2">Edit Filters(s)</button>
            <button type="button" class=".confirmation-button3">Edit Location(s)</button>
            <Link to={'./profileCreated'}><button type="button" class=".confirmation-button4">Create!</button></Link>
        </div>
    )
}

export default Confirmation;