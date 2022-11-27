import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconAperture({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aperture" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M3.6 15h10.55" /><Path d="M6.551 4.938l3.26 10.034" /><Path d="M17.032 4.636l-8.535 6.201" /><Path d="M20.559 14.51l-8.535 -6.201" /><Path d="M12.257 20.916l3.261 -10.034" /></Svg>;
}
export default IconAperture;