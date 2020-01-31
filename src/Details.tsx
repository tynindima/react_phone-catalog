import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as phonesApi from './api/phones';
import { getImageUrl } from './helpers';

type TRouteParams = {
  phoneId: string;
}

const Details = () => {
  const [phone, setPhone] = useState<TPhoneDetails | null>(null);
  const [loadingError, setLoadingError] = useState('');
  const { phoneId } = useParams<TRouteParams>();

  useEffect(() => {
    phonesApi.getById(phoneId)
      .then(setPhone)
      .catch(setLoadingError);
  }, [phoneId]);

  if (loadingError) {
    return <p>{loadingError}</p>;
  }

  if (!phone) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <img
        className="phone"
        src={getImageUrl(phone.images[0])}
        alt="phone preview"
      />

      <h1>{phone.name}</h1>
      <p>{phone.description}</p>

      <button type="button" className="btn btn-success">
        Add
      </button>

      <ul className="phone-thumbs">
        {phone.images.map(image => (
          <li key={image}>
            <img src={getImageUrl(image)} alt="thumbnail" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Details;
