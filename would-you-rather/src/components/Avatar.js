import React, { Fragment } from 'react';

export default function avatar(user) {
  return (
    <Fragment>
      <img
        src={user.avatarURL}
        alt={`Avatar of ${user.name}`}
        className='avatar'
        title={user.name}
      />{user.name}
    </Fragment>
  )
}
