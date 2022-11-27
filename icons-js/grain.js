import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconGrain({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grain" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={4.5} cy={9.5} r={1} /><Circle cx={9.5} cy={4.5} r={1} /><Circle cx={9.5} cy={14.5} r={1} /><Circle cx={4.5} cy={19.5} r={1} /><Circle cx={14.5} cy={9.5} r={1} /><Circle cx={19.5} cy={4.5} r={1} /><Circle cx={14.5} cy={19.5} r={1} /><Circle cx={19.5} cy={14.5} r={1} /></Svg>;
}
export default IconGrain;