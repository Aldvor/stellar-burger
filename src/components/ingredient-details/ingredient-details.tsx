import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';

export const IngredientDetails: FC = () => {
  const id = useParams().id;

  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const ingredientData = ingredients.find(
    (ingredient) => ingredient._id === id
  );

  if (!ingredientData) {
    return <Preloader />;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <IngredientDetailsUI ingredientData={ingredientData} />
    </div>
  );
};
