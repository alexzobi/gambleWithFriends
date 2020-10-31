import React, { ReactNode } from 'react';
import View from '../View';

export type PositionProps = {
  m?: number;
  mb?: number;
  mt?: number;
  mh?: number;
  mv?: number;
  ml?: number;
  mr?: number;
  position?: 'relative' | 'absolute';
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  top?: number | string;
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  height?: number | string;
  width?: number | string;
  flex? : number
  children?: ReactNode
}

const StyledView = ({
  position,
  left,
  right,
  bottom,
  top,
  height,
  width,
  flex,
  m,
  mb,
  mt,
  mh,
  mv,
  ml,
  mr,
  alignSelf,
  children,
}: PositionProps) => (
  <View
    style={{
      alignSelf,
      left,
      right,
      top,
      bottom,
      height,
      width,
      flex,
      position,
      margin: m,
      marginLeft: ml,
      marginRight: mr,
      marginTop: mt,
      marginBottom: mb,
      marginHorizontal: mh,
      marginVertical: mv,
    }}
    children={children}
  />
)

const Positioner = ({
  m,
  mb,
  mt,
  mh,
  mv,
  ml,
  mr,
  position,
  left,
  right,
  bottom,
  top,
  alignSelf,
  width,
  height,
  flex,
  children,
}: PositionProps) => (
  <StyledView
    m={m}
    ml={ml}
    mr={mr}
    mv={mv}
    mt={mt}
    mb={mb}
    mh={mh}
    width={width}
    height={height}
    position={position}
    left={left}
    right={right}
    bottom={bottom}
    top={top}
    alignSelf={alignSelf}
    flex={flex}
  >
    {children}
  </StyledView>
);

export default Positioner;
