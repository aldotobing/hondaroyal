import { Link } from 'react-router-dom';
import { Car, getCarsByCategory } from '../data/cars';
import CarCard from './CarCard';

interface RelatedCarsProps {
  currentCar: Car;
}

const RelatedCars = ({ currentCar }: RelatedCarsProps) => {
  const relatedCars = getCarsByCategory(currentCar.category)
    .filter(car => car.id !== currentCar.id)
    .slice(0, 3); // Show up to 3 related cars

  if (relatedCars.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobil Sejenis</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default RelatedCars;
