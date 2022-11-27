import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconArrowNarrowUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={12} y1={5} x2={12} y2={19} /><Line x1={16} y1={9} x2={12} y2={5} /><Line x1={8} y1={9} x2={12} y2={5} /></Svg>;
}
export default IconArrowNarrowUp;