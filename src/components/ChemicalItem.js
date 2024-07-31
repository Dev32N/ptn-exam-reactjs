import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteChemical, updateChemical } from '../redux/chemicalSlice'
import "./style.css"
import { Button, Col, Container, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap'
export default function ChemicalItem() {
    const dispatch = useDispatch()
    const { chemicals } = useSelector(state => state.chemicals)
    const [modal, setModal] = useState(false);
    const [chemicalToUpdate, setChemicalToUpdate] = useState({});

    const toggleModal = () => {
        setModal(!modal);
      };

    const handleUpdate = (chemical) => {
        setChemicalToUpdate(chemical);
        toggleModal();
      };

    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        dispatch(updateChemical(chemicalToUpdate));
        toggleModal();
      };
    return (
        <Container className='content'>
            <Row>
                <Col>
                    <h2>Chemical List</h2>
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th style={{ borderBottom: '1px solid #000', padding: '10px' }}>#</th>
                                <th style={{ borderBottom: '1px solid #000', padding: '10px' }}>Chemical Name</th>
                                <th style={{ borderBottom: '1px solid #000', padding: '10px' }}>Formula Name</th>
                                <th style={{ borderBottom: '1px solid #000', padding: '10px', textAlign: 'center' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chemicals.map((item, index) => (
                                <tr key={item.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.formula}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Button color="danger" onClick={() => dispatch(deleteChemical(item.id))}>
                                            Delete
                                        </Button>
                                        <Button color='success' onClick={() => handleUpdate(item)}>Edit</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Update Chemical</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmitUpdate}>
                        <label>Chemical Name:</label>
                        <Input type="text" value={chemicalToUpdate.name} onChange={(e) => setChemicalToUpdate({ ...chemicalToUpdate, name: e.target.value })} />
                        <br />
                        <label>Formula Name:</label>
                        <Input type="text" value={chemicalToUpdate.formula} onChange={(e) => setChemicalToUpdate({ ...chemicalToUpdate, formula: e.target.value })} />
                        <br />
                        <Button color="primary" type="submit">Update</Button>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}
