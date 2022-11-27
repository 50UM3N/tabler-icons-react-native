import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconHomeX({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 13.4v-1.4h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" /><Path d="M9 21v-6a2 2 0 0 1 2 -2h2c.402 0 .777 .119 1.091 .323" /><Path d="M21.5 21.5l-5 -5" /><Path d="M16.5 21.5l5 -5" /></Svg>;
}
export default IconHomeX;