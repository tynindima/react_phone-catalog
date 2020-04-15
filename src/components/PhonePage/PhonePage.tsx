import React from 'react';
import { Link } from 'react-router-dom';

export const PhonePage = (props: any) => {
  console.log(props.match.url);

  return (
    <div>
      <h2>
        PhonePage
        {props.match.params.phoneId}
      </h2>
      <ul>
        <li>
          <Link to="/phone/1">Phone1</Link>
        </li>
        <li>
          <Link to="/phone/2">Phone2</Link>
        </li>
      </ul>
    </div>
  );
};
