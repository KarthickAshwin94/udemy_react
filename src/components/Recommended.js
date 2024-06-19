import Course1 from "../assets/images/Course1.jpg"
import Course2 from "../assets/images/Course2.jpg"
import Course3 from "../assets/images/Course3.jpg"
import Course4 from "../assets/images/Course4.jpg"
function Recommended()
{
    return(
        <div className="recommended">
        <h1 className="recommended__title">Recommended for You</h1>
        <p>Pick the best fit</p>
        <div className="recommended__container">
            <div className="course_card">
                <img src={Course1} alt=""/>
                <h3> Python Data Visualisation 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course_card">
                <img src={Course2} alt=""/>
                <h3>Web Development 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course_card">
                <img src={Course3} alt=""/>
                <h3>UI/UX Design 2023</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course_card">
                <img src={Course4} alt=""/>
                <h3>Machine Learning 2023</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

        </div>
    </div>
    );
}
export default Recommended;