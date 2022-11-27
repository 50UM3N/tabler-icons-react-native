import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconBrandYcombinator({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-ycombinator" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Path d="M8 7.002l4 5.998l4 -6" /><Line x1={12} y1={17} x2={12} y2={13} /></Svg>;
}
export default IconBrandYcombinator;