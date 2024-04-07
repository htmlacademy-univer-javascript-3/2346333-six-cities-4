import { Offers } from '../types/offer';
import { PlaceCard } from './place-card';

type OfferProps = {
    offers: Offers;
};

export function OfferList({offers}: OfferProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer}/>
      ))}
    </div>
  );
}
