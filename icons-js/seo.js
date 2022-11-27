import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconSeo({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-seo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" /><Path d="M14 16h-4v-8h4" /><Path d="M11 12h2" /><Rect x={17} y={8} width={4} height={8} rx={1} /></Svg>;
}
export default IconSeo;