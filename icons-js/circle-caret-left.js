import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCircleCaretLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-caret-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 12l4 -4v8z" /><Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" /></Svg>;
}
export default IconCircleCaretLeft;