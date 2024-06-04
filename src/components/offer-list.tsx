import { Offer, Offers } from '../types/offer';
import { PlaceCard } from './place-card';

type OfferProps = {
  offers: Offers;
  onMouseOver: (point: Offer | null) => void;
};

export function OfferList({ offers, onMouseOver }: OfferProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} onMouseOver={onMouseOver} />
      ))}
    </div>
  );
}
