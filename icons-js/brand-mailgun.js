import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandMailgun({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-mailgun" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 12a2 2 0 1 0 4 0a9 9 0 1 0 -2.987 6.697" /><Circle cx={12} cy={12} r={5} /><Circle cx={12} cy={12} r={1} /><Circle cx={12} cy={12} r={1} /></Svg>;
}
export default IconBrandMailgun;