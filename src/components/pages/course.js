import { useParams, useLoaderData } from "react-router-dom";
import "./course.css";

export default function Course() {
    const {id} = useParams()
    const course = useLoaderData()

    return (
        <>
            <div className="courseWrapper">
                <div className="courseData">
                    <h2>{course.language}</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente adipisci iste quo voluptatibus quas suscipit quibusdam voluptate? Sapiente tempore cum quia, tenetur vitae officiis et harum ducimus cupiditate optio?</p>
                    <p>Access this course at only: {course.price}</p>
                    <button>Get Course</button>
                </div>
            </div>
        </>
    )
}