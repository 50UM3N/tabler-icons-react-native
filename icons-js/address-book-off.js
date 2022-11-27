import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconAddressBookOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-address-book-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h10a2 2 0 0 1 2 2v10m-.57 3.399c-.363 .37 -.87 .601 -1.43 .601h-10a2 2 0 0 1 -2 -2v-12" /><Path d="M10 16h6" /><Path d="M11 11a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" /><Path d="M4 8h3" /><Path d="M4 12h3" /><Path d="M4 16h3" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconAddressBookOff;