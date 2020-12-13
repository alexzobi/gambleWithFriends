import React from 'react';

type Props = {
  when: Boolean;
  children: Element;
  placeholder?: Element;
};

const Display = ({ when, children, placeholder }: Props) => {
  let element = null;

  if (when) {
    element = <>{children}</>;
  } else if (placeholder) {
    element = <>{placeholder}</>;
  }

  return element;
};

Display.defaultProps = {
  children: false,
};

export default Display;
