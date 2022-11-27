import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandNextcloud({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-nextcloud" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={5} /><Circle cx={4.5} cy={12.5} r={2.5} /><Circle cx={19.5} cy={12.5} r={2.5} /></Svg>;
}
export default IconBrandNextcloud;