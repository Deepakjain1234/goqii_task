import React, { useEffect ,useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AddModal from "./Modals/AddModal";
import EditModal from "./Modals/EditModal";
const UserTable=()=>{

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [addModalShow, setAddModalShow] = useState(false);
    const handleAddClose = () => setAddModalShow(false);
    const handleAddShow = () => setAddModalShow(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

   
    async function addNewUser(data){
      console.log(data)
      handleAddClose()
      setLoading(true)
      try {
        const response = await fetch('https://goqii-task.onrender.com/api/user/createUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Specify content type as JSON
            // You can add more headers if required
          },
          body: JSON.stringify(data), // Convert data to JSON string
        });
        
        fetchData()
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const responseData = await response.json(); // Parse response JSON
        console.log('Response:', responseData);
        // Do something with the response data
      } catch (error) {
        console.error('Error:', error);
        // Handle errors
      }
    }
    const fetchData = async () => {
      try {
        const response = await fetch('https://goqii-task.onrender.com/api/user/getall');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
          console.log(error)
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      
  
      fetchData();
  
      // Optionally, you can return a cleanup function from useEffect
      // This will be called when the component unmounts or before the effect runs again
      return () => {
        // Cleanup code (if any)
      };
    }, [addModalShow]); // Empty dependency array means this effect will only run once, similar to componentDidMount
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    return(
      <>
      <EditModal show={show} handleClose={handleClose} setEdit={setData} />
      <AddModal show={addModalShow} handleClose={handleAddClose}  addNewUser={addNewUser} />
     
      <Button style={{marginBottom:20}} onClick={handleAddShow} variant="success">Add User</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date of birth</th>
            <th>Created At</th>
            <th>Edit</th>
            <th>Delete</th>
            {/* <th>Date of birth</th> */}
          </tr>
        </thead>
        <tbody>
        {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.dob}</td>
              <td>{item.createdAt}</td>
              <td><Button onClick={handleShow} variant="success">Edit</Button></td>
              <td><Button variant="danger">Delete</Button></td>
              {/* Add more table cells if needed */}
            </tr>
          ))}

        
        </tbody>
      </Table>
      </>
        

    )

}

export default UserTable