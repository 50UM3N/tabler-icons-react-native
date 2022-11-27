import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandAsana({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-asana" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={7} r={3} /><Circle cx={17} cy={16} r={3} /><Circle cx={7} cy={16} r={3} /></Svg>;
}
export default IconBrandAsana;