import { Offers } from '../types/offer';
import { NearOfferCard } from './near-offer-card';

type NearOffersListProps = {
  offers: Offers;
};

export function NearOffersList({offers}: NearOffersListProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <NearOfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>

  );
}
