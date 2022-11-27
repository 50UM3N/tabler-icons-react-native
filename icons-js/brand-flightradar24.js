import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandFlightradar24({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-flightradar24" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Circle cx={12} cy={12} r={5} /><Path d="M8.5 20l3.5 -8l-6.5 6" /><Circle cx={12} cy={12} r={1} /></Svg>;
}
export default IconBrandFlightradar24;