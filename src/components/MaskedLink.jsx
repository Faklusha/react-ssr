import React from 'react';
import Link from 'next/link'


const MaskedLink = ({classname, path, children}) => (<Link as={`/searchFilms`} className={classname} href={path}>
  {children}
</Link>);
export default MaskedLink;
