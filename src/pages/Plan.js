import React from 'react';
import '../pages/styles/Plan.css';
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';

const Plan = () => {
  const plans = [
    {
      goal: 'Weight Loss',
      description: 'A calorie-deficit diet plan to help you shed weight.',
      meals: [
        'Breakfast: Greek yogurt with berries',
        'Snack: Handful of almonds',
        'Lunch: Grilled chicken and veggies',
        'Snack: Apple slices with peanut butter',
        'Dinner: Baked salmon with steamed broccoli',
      ],
    },
    {
      goal: 'Muscle Gain',
      description: 'A protein-rich diet plan to boost muscle growth.',
      meals: [
        'Breakfast: Scrambled eggs and avocado toast',
        'Snack: Protein shake with banana',
        'Lunch: Grilled steak with quinoa and veggies',
        'Snack: Cottage cheese with pineapple',
        'Dinner: Chicken breast with sweet potato and asparagus',
      ],
    },
    {
      goal: 'Balanced Diet',
      description: 'A well-rounded plan for overall health.',
      meals: [
        'Breakfast: Smoothie bowl with granola',
        'Snack: Baby carrots with hummus',
        'Lunch: Turkey sandwich with mixed greens',
        'Snack: Handful of mixed nuts',
        'Dinner: Stir-fried tofu with brown rice and vegetables',
      ],
    },
    {
      goal: 'Keto',
      description: 'A low-carb, high-fat plan for ketosis.',
      meals: [
        'Breakfast: Omelet with spinach and cheese',
        'Snack: Avocado with sea salt',
        'Lunch: Grilled chicken Caesar salad (no croutons)',
        'Snack: Cheese sticks',
        'Dinner: Grilled salmon with zucchini noodles',
      ],
    },
    {
      goal: 'Vegetarian',
      description: 'A plant-based diet rich in nutrients.',
      meals: [
        'Breakfast: Overnight oats with almond milk',
        'Snack: Fresh fruit salad',
        'Lunch: Lentil soup with whole-grain bread',
        'Snack: Roasted chickpeas',
        'Dinner: Stuffed bell peppers with quinoa and black beans',
      ],
    },
    {
      goal: 'Mediterranean',
      description: 'A heart-healthy diet inspired by Mediterranean cuisine.',
      meals: [
        'Breakfast: Greek yogurt with honey and walnuts',
        'Snack: Cucumber slices with tzatziki',
        'Lunch: Grilled chicken gyros with whole-grain pita',
        'Snack: Olives and feta cheese',
        'Dinner: Baked cod with ratatouille',
      ],
    },
  ];

  return (
    <div>
      <Navbar2 />

      <div className='nutritional-plans-container'>
        <div className='header-nutritional-plans'>
          <h1>Nutritional Plans</h1>
          <p>Choose a diet plan that aligns with your health objectives.</p>
        </div>

        <div className='plans-grid'>
          {plans.map((plan, index) => (
            <div className='plan-card' key={index}>
              <h2>{plan.goal}</h2>
              <p>{plan.description}</p>
              <ul>
                {plan.meals.map((meal, idx) => (
                  <li key={idx}>{meal}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Plan;
