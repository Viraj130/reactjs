import { useParams } from "react-router-dom";


function Students(){
    const {roll} = useParams();
    const {fname} = useParams();
    const {lname} = useParams();
    const {city} = useParams();
   
    return<>
     <h1>Welcome {fname} {lname} To {city} your roll no is {roll}</h1>
    </>
}

export default Students;