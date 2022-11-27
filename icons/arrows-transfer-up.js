import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowsTransferUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-transfer-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 21v-6" /><Path d="M20 6l-3 -3l-3 3" /><Path d="M17 3v18" /><Path d="M10 18l-3 3l-3 -3" /><Path d="M7 3v2" /><Path d="M7 9v2" /></Svg>;
}
export default IconArrowsTransferUp;