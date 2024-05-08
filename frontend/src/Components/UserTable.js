import React, { useEffect ,useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AddModal from "./Modals/AddModal";
import EditModal from "./Modals/EditModal";
import ConfirmModal from "./Modals/ConfirmModal";
import { addUser ,deleteUser ,fatchAll ,editUser } from "../Services/User";
import moment from 'moment';

const UserTable=()=>{

    const [data, setData] = useState(null);
    // const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentUser,setCurrentUser]=useState(null);
    const [show, setShow] = useState(false);
    const [addModalShow, setAddModalShow] = useState(false);
    const [confirmModalShow, setConfirmModalShow] = useState(false);
    const handleConfirmClose = () => setConfirmModalShow(false);
    const handleConfirmShow = (data) => {
    
      setCurrentUser(data)
      setConfirmModalShow(true)};
    const handleAddClose = () => setAddModalShow(false);
    const handleAddShow = () => setAddModalShow(true);
    const handleClose = () => setShow(false);
    const handleShow = (data) => {
      setCurrentUser(data)
      setShow(true)
    }
    
  function convert(data){
    const date=new Date(data)
    console.log(date)
    return moment(date).fromNow()
  }
  function convert1(item){
    if(item.createdAt===item.updatedAt){
      return "Not updated yet"
    }
    const date=new Date(item.updatedAt)
    console.log(date)
    return "Last upadate : " + moment(date).fromNow()
  }
   
    async function addNewUser(data){     
      handleAddClose()
      setLoading(true)
      await addUser(data);
      fetchData()   
    }
    async function addEditUser(data){  
      handleClose()   
      setLoading(true)
      await editUser(data);
      fetchData()   
    }

    async function deleteuser(){
      console.log(currentUser)
      handleConfirmClose()
      const body={
        id:currentUser.id
      }
      setLoading(true)
      await deleteUser(body)
      fetchData()
    }
    const fetchData = async () => {
      const data =await fatchAll();
      setData(data);
      setLoading(false)
     
    };
  
    useEffect(() => {
      fetchData();
    }, [addModalShow]); 
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    
    return(
      <>
      <EditModal show={show} handleClose={handleClose} setEdit={setData} addEditUser={addEditUser} currentUser={currentUser} />
      <AddModal show={addModalShow} handleClose={handleAddClose}  addNewUser={addNewUser} />
      <ConfirmModal show={confirmModalShow} handleClose={handleConfirmClose}  deleteUser={deleteuser} />
      <Button style={{marginBottom:20}} onClick={handleAddShow} variant="success">Add User</Button>
      {
        data.length===0 ?
        <h4>No user found</h4>
        : 
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
        { data.map((item,index) => (
            <tr key={item.id}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.dob}</td>
              <td> {convert(item.createdAt)}</td>
              <td><div>
              <Button onClick={()=>handleShow(item)} variant="success">Edit</Button>
              <p style={{fontSize:10 , marginTop:3}}>{convert1(item)}</p></div></td>
              <td><Button variant="danger" onClick={()=>handleConfirmShow(item)}>Delete</Button></td>
            </tr>
          ))}

        
        </tbody>
      </Table>
      }
     
      </>
        

    )

}

export default UserTable