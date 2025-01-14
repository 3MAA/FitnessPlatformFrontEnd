import React from 'react';
import './style/GoalCard.css';

const GoalCard = ({ goal, onEdit, onSaveDraft, onSaveFinal }) => {
  return (
    <div className='goal-card'>
      <div className='goal-info'>
        <h3 className='goal-name'>{goal.name}</h3>
        <p className='goal-description'>{goal.description}</p>
        <p>
          <span className='goal-label'>Start Date:</span> {goal.startDate}
        </p>
        <p>
          <span className='goal-label'>Deadline:</span> {goal.deadline}
        </p>
        <p>
          <span className='goal-label'>Progress:</span> {goal.progress} /{' '}
          {goal.targetValue}
        </p>
      </div>
      <div className='goal-actions'>
        <button className='btn edit-btn' onClick={() => onEdit(goal.id)}>
          Edit
        </button>
        <button className='btn draft-btn' onClick={() => onSaveDraft(goal.id)}>
          Save Draft
        </button>
        <button className='btn final-btn' onClick={() => onSaveFinal(goal.id)}>
          Save Final
        </button>
      </div>
    </div>
  );
};

export default GoalCard;
