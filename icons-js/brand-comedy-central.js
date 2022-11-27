import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandComedyCentral({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-comedy-central" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5.343 17.657a8 8 0 1 0 0 -11.314" /><Path d="M13.828 9.172a4 4 0 1 0 0 5.656" /></Svg>;
}
export default IconBrandComedyCentral;