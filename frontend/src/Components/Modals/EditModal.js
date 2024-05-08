import { useEffect, useState } from 'react';
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const EditModal=(props)=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [dob,setDob]=useState('')
    console.log(props.currentUser)
    const submit=async()=>{
        const data={
            name:name,
            email:email,
            dob:dob,
            id:props.currentUser.id
          }
          
          props.addEditUser(data)


    }
    useEffect(()=>{
        if(props.currentUser){
            setName(props.currentUser.name)
        setEmail(props.currentUser.email)
        setDob(props.currentUser.dob)

        }

    },[props.currentUser])
   
    return(
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="john"
                onChange={(e)=>setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control
                type="date"
                onChange={(e)=>setDob(e.target.value)}
                value={dob}
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )

}

export default EditModal