import '../confirmation.scss';

function Confirmation(){
    return(
        <div className = "px-3 py-2">
            <h1>Room Reservation Confirmation</h1>
            <p style = ".confirmation-paragraph1"><b>Name:</b> CS 121 Exam</p>
            <p style = ".confirmation-paragraph2"><b>Description:</b> We will be focusing on practicing for each loops for he upcoming exam in CS 121. Bring your own device to use during this session. Look foward to meeting you all! </p>
            <p style = ".confirmation-paragraph3"><b>Max Number of People:</b> 20 </p>
            <p style = ".confirmation-paragraph4"><b>Start Time:</b> 12:45 </p>
            <p style = ".confirmation-paragraph5"><b>End Time:</b> 7:45 </p>
            <p style = ".confirmation-paragraph6"><b>Date:</b> 04/11/2022 </p>
            <p style = ".confirmation-paragraph7"><b>Major:</b> Computer Science </p>
            <p style = ".confirmation-paragraph8"><b>Major Related Class:</b> CS 121 </p>
            <p style = ".confirmation-paragraph9"><b>Additional Tag(s):</b> Exam1 </p>
            <p style = ".confirmation-paragraph10"><b>Building:</b> Integrated Learning Center </p>
            <p style = ".confirmation-paragraph11"><b>Location:</b> 650 North Pleasant st, Amherst MA 01003 </p>
            <p style = ".confirmation-paragraph12"><b>Floor:</b> CS 121 </p>
            <p style = ".confirmation-paragraph13"><b>Room:</b>  Exam 1 </p>
            <button type="button" class=".confirmation-button1">Edit Stat(s)</button>
            <button type="button" class=".confirmation-button2">Edit Filters(s)</button>
            <button type="button" class=".confirmation-button3">Edit Location(s)</button>
            <button type="button" class=".confirmation-button4">Create!</button>
        </div>
    )
}

export default Confirmation;