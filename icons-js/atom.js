import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconAtom({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-atom" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12v.01" /><Path d="M19.071 4.929c-1.562 -1.562 -5.994 .337 -9.9 4.243c-3.905 3.905 -5.804 8.337 -4.242 9.9c1.562 1.561 5.994 -.338 9.9 -4.244c3.905 -3.905 5.804 -8.337 4.242 -9.9" /><Path d="M4.929 4.929c-1.562 1.562 .337 5.994 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242c1.561 -1.562 -.338 -5.994 -4.244 -9.9c-3.905 -3.905 -8.337 -5.804 -9.9 -4.242" /></Svg>;
}
export default IconAtom;