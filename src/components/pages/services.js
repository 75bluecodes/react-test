import { useLoaderData, Link, Outlet } from "react-router-dom"
import "./services.css"

export function Services(){
    const lang = useLoaderData()
    return (
        <>
        <div className="wrapperlang">
            <h1>Services</h1>
            <br></br>
            {lang.map(lang => (
                <div className="languages">
                    <h2>{lang.language}</h2>
                    <p>{lang.description}</p>
                    <p>{lang.price}</p>
                    <p>{lang.available}</p>
                    <Link to={lang.id.toString()} key={lang.id}><button className="btn">View Course</button></Link>

                </div>
            
            )

            )}
            </div>
          <Outlet></Outlet>
        </>
    )
} 


// export function Service() {
//     return (
//         <>
//         <h2>some data</h2>
//         </>
//     )
// }