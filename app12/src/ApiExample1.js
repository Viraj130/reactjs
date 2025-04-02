function ApiExample1(){

    const APIURL = "http://localhost:3000/students";
      
    function getAllData(){
        fetch(APIURL).then((response)=> {
            response.json().then((result) => {
                console.log(result);
            })
        });
    }

    function getDataByID(){
        let id = prompt("Enter ID");

        fetch(APIURL+"/"+id).then((response) => {
            response.json().then((result) => {
             console.log(result);
            })
        })
    }


    function addNewData(){
       let fname = prompt("Enter First Name");
       let lname = prompt("Enter Last Name");

       fetch(APIURL, {
        method: "POST", 
        headers: {
            'Content-Type': 'Application/json',
             'Accept': 'Application/json'   
        },
        body: JSON.stringify({
            "fname": fname, "lname": lname,
        })
       }).then((response)=>{
           response.json().then((result)=>{
            console.log(result);        
           })
       })
    }
     
    function updateData(){
      let id = prompt("Enter ID");
      let fname = prompt("ENter First Name");
      let lname = prompt("Enter Last Name");

      fetch(APIURL+"/"+id, {
        method:"PUT",
        headers:{
            'Content--Type': 'Application/json',
            'Accept': 'Application/json'
        },
        body: JSON.stringify({
            fname, lname
        })
      }).then((response) => {
        response.json().then((result) => {
            console.log(result);
        })
      })
    }

    function deleteData(){
      let id = prompt("Enter ID for delete data");

      fetch(APIURL+"/"+id, {
        method: "DELETE",
      }).then((response) => {
        response.json().then((result) => {
            console.log(result);
        })
      });
    }
    

    return<>
    <h1>API Example</h1>
        <button onClick={()=>getAllData()}>Get All Data</button>
        <button onClick={()=>getDataByID()}>Get Data By ID</button>
        <button onClick={()=>addNewData()}>Add New Data</button>
        <button onClick={()=>updateData()}>Update Data</button>
        <button onClick={()=>deleteData()}>Delete Data</button>
    </>
}

export default ApiExample1;

    