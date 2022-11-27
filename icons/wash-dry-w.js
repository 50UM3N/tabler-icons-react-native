import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconWashDryW({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wash-dry-w" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M8 8l1.5 8h1l1.5 -6l1.5 6h1l1.5 -8" /></Svg>;
}
export default IconWashDryW;