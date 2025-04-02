import { Button } from "react-bootstrap";

function StyleDemo6(){
    return<>
       <h1 className="text-bg-primary p-5 rounded">Welcome to the world of Module.CSS in React JS</h1>
       <h1 className="p-5 text-bg-success p-3 rounded">This is the demo of Bootstrap in Css Module in React JS</h1>

       {/* <button className='btn btn-primary'>Confirm</button> */}
       {/* <button className='btn btn-danger'>Cancel</button> */}

       <Button variant="primary" value="Yes">Yes</Button>
       <Button variant="danger" value="No">No</Button>
    </>
}

export default StyleDemo6;