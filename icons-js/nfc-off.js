import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconNfcOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-nfc-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 20a3 3 0 0 1 -3 -3v-9" /><Path d="M13 4a3 3 0 0 1 3 3v5m0 4v2l-5 -5" /><Path d="M8 4h9a3 3 0 0 1 3 3v9m-.873 3.116a2.99 2.99 0 0 1 -2.127 .884h-10a3 3 0 0 1 -3 -3v-10c0 -.83 .337 -1.582 .882 -2.125" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconNfcOff;