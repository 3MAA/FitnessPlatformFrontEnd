import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import '../pages/styles/Goal.css';

const Goal = () => {
  const [objectives, setObjectives] = useState([]);
  const [drafts, setDrafts] = useState([]); // Adauga starea pentru drafturi
  const [discounts, setDiscounts] = useState([]); // Adauga starea pentru discounturi
  const [showModal, setShowModal] = useState(false);
  const [currentObjective, setCurrentObjective] = useState({
    objectiveId: null, // Adauga un id pentru a identifica obiectivul de actualizat
    objectiveType: '',
    targetValue: 0,
    startDate: '',
    deadline: '',
    progress: 0,
  });
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const UserId = 1; // Sau preia din context sau din autentificare

  // Fetch objectives
  const fetchObjectives = async () => {
    try {
      const response = await axios.get('https://localhost:7087/api/objective');
      const allObjectives = response.data;

      const drafts = allObjectives.filter((obj) => obj.isDraft);
      const finalizedObjectives = allObjectives.filter((obj) => !obj.isDraft);

      setDrafts(drafts); // Seteaza drafturile
      setObjectives(finalizedObjectives); // Seteaza obiectivele finale
    } catch (error) {
      console.error('Error fetching objectives:', error);
    }
  };

  // Fetch discounts
  const fetchDiscounts = async () => {
    try {
      const response = await axios.get('https://localhost:7087/api/discount');
      setDiscounts(response.data);
    } catch (error) {
      console.error('Error fetching discounts', error);
    }
  };

  useEffect(() => {
    fetchObjectives();
    fetchDiscounts();
  }, []);

  // Handle Save Draft (actualizeaza draftul existent daca are un id)
  const handleSaveDraft = async () => {
    try {
      const response = await axios.post(
        'https://localhost:7087/api/objective/save-draft',
        {
          objectiveId: currentObjective.objectiveId || 0, // 0 Inseamna obiectiv nou
          objectiveType: currentObjective.objectiveType,
          targetValue: currentObjective.targetValue,
          startDate: currentObjective.startDate,
          deadline: currentObjective.deadline,
          progress: currentObjective.progress,
          userId: UserId, // Daca este necesar
        }
      );

      alert('Draft saved successfully!');
      fetchObjectives(); // Actualizeaza datele
      setShowModal(false);
    } catch (error) {
      console.error('Error saving draft:', error);
      alert('Failed to save draft.');
    }
  };

  // Handle Edit Draft
  const handleEditDraft = (draft) => {
    setCurrentObjective({
      objectiveId: draft.objectiveId, // Include ID-ul pentru actualizare
      objectiveType: draft.objectiveType,
      targetValue: draft.targetValue,
      startDate: draft.startDate,
      deadline: draft.deadline,
      progress: draft.progress,
    });
    setShowModal(true); // Deschide modal-ul pentru editare
  };

  // Handle Save Final (cand obiectivul este complet)
  const handleSaveFinal = async (id) => {
    if (!id || !UserId) {
      alert('Invalid user ID or objective ID');
      return;
    }

    try {
      const response = await axios.post(
        `https://localhost:7087/api/objective/save-final?userId=${UserId}&objectiveId=${id}`
      );

      if (response.status === 200) {
        alert('Objective finalized successfully!');

        // Actualizeaza listele de drafturi si obiective
        fetchObjectives();
        fetchDiscounts();
      } else {
        alert('Error finalizing the objective. Please try again.');
      }
    } catch (error) {
      console.error('Error finalizing objective:', error);
      alert(error.response?.data?.message || 'Error finalizing objective.');
    }
  };

  // Handle Delete Draft
  const handleDeleteDraft = async (draftId) => {
    try {
      // Foloseste ruta corecta pentru a sterge un draft fizic
      const response = await axios.delete(
        `https://localhost:7087/api/objective/physical/${draftId}?userId=${UserId}`
      );
      alert('Draft deleted successfully!');
      fetchObjectives(); // Actualizeaza lista de obiective
    } catch (error) {
      console.error('Error deleting draft:', error);
      alert('Failed to delete draft.');
    }
  };

  // Modal pentru adaugare/editar obiectiv
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentObjective({
      objectiveId: null, // Resetam id-ul la null
      objectiveType: '',
      targetValue: 0,
      startDate: '',
      deadline: '',
      progress: 0,
    });
  };

  const handleShowModal = () => setShowModal(true);

  return (
    <div className='goal-manager'>
      <h2>Manage Your Objectives</h2>

      {/* Butoane Back și Add New Objective */}
      <div className='button-row'>
        <Button variant='secondary' onClick={() => window.history.back()}>
          Back
        </Button>
        <Button variant='primary' onClick={handleShowModal}>
          Add New Objective
        </Button>
      </div>

      {/* Tabel pentru obiective finalizate */}
      <h2>Your Objectives</h2>
      <Table striped bordered hover className='objectives-table'>
        <thead>
          <tr>
            <th>Type</th>
            <th>Target Value</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {objectives.length === 0 ? (
            <tr>
              <td colSpan='5' className='empty-message'>
                No finalized objectives yet. Start by creating one!
              </td>
            </tr>
          ) : (
            objectives.map((obj) => (
              <tr key={obj.objectiveId}>
                <td>{obj.objectiveType}</td>
                <td>{obj.targetValue}</td>
                <td>{new Date(obj.startDate).toLocaleDateString()}</td>
                <td>{new Date(obj.deadline).toLocaleDateString()}</td>
                <td>{obj.progress}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Tabel pentru drafturi */}
      <h2>Your Drafts</h2>
      <Table striped bordered hover className='drafts-table'>
        <thead>
          <tr>
            <th>Type</th>
            <th>Target Value</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Progress</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drafts.length === 0 ? (
            <tr>
              <td colSpan='6' className='empty-message'>
                No drafts available. Create a draft to get started!
              </td>
            </tr>
          ) : (
            drafts.map((draft) => (
              <tr key={draft.objectiveId}>
                <td>{draft.objectiveType}</td>
                <td>{draft.targetValue}</td>
                <td>{new Date(draft.startDate).toLocaleDateString()}</td>
                <td>{new Date(draft.deadline).toLocaleDateString()}</td>
                <td>{draft.progress}</td>
                <td>
                  <Button
                    variant='secondary'
                    onClick={() => handleEditDraft(draft)}
                  >
                    Edit Draft
                  </Button>
                  <Button
                    variant='success'
                    onClick={() => handleSaveFinal(draft.objectiveId)}
                  >
                    Save Final
                  </Button>
                  <Button
                    variant='danger'
                    onClick={() => handleDeleteDraft(draft.objectiveId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Tabel pentru discounturi */}
      <h2>Your Discounts</h2>
      <Table striped bordered hover className='discounts-table'>
        <thead>
          <tr>
            <th>Discount Percent</th>
            <th>Grant Date</th>
            <th>Expiration Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {discounts.length === 0 ? (
            <tr>
              <td colSpan='4' className='empty-message'>
                No discounts yet. Complete objectives to earn discounts!
              </td>
            </tr>
          ) : (
            discounts.map((discount) => (
              <tr key={discount.discountId}>
                <td>{discount.discountPercent}%</td>
                <td>{new Date(discount.grantDate).toLocaleDateString()}</td>
                <td>
                  {new Date(discount.expirationDate).toLocaleDateString()}
                </td>
                <td>{discount.isUsed ? 'Used' : 'Active'}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Modal pentru adaugare obiectiv */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName='custom-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Objective</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='form-container'>
            <Form>
              <Form.Group>
                <Form.Label>Objective Type</Form.Label>
                <Form.Control
                  type='text'
                  value={currentObjective.objectiveType}
                  placeholder='Enter objective type'
                  onChange={(e) =>
                    setCurrentObjective({
                      ...currentObjective,
                      objectiveType: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Target Value</Form.Label>
                <Form.Control
                  type='number'
                  value={currentObjective.targetValue}
                  placeholder='Enter target value'
                  onChange={(e) =>
                    setCurrentObjective({
                      ...currentObjective,
                      targetValue: parseInt(e.target.value),
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type='date'
                  value={currentObjective.startDate}
                  onChange={(e) =>
                    setCurrentObjective({
                      ...currentObjective,
                      startDate: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type='date'
                  value={currentObjective.deadline}
                  onChange={(e) =>
                    setCurrentObjective({
                      ...currentObjective,
                      deadline: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Progress</Form.Label>
                <Form.Control
                  type='number'
                  value={currentObjective.progress}
                  placeholder='Enter progress'
                  onChange={(e) =>
                    setCurrentObjective({
                      ...currentObjective,
                      progress: parseInt(e.target.value),
                    })
                  }
                />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleSaveDraft}>
            Save Objective
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Pop-up de feedback */}
      {showPopup && (
        <div className='popup-message'>
          <p>{popupMessage}</p>
          <Button onClick={() => setShowPopup(false)}>Close</Button>
        </div>
      )}
    </div>
  );
};

export default Goal;
