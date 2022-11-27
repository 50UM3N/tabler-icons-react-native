import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandSpacehey({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-spacehey" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={17} cy={6} r={2} /><Path d="M14 20h6v-6a3 3 0 0 0 -6 0v6z" /><Path d="M11 8v2.5a3.5 3.5 0 0 1 -3.5 3.5h-.5a3 3 0 0 1 0 -6h4z" /></Svg>;
}
export default IconBrandSpacehey;