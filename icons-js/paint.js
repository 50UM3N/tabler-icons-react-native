import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconPaint({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paint" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={5} y={3} width={14} height={6} rx={2} /><Path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" /><Rect x={10} y={15} width={4} height={6} rx={1} /></Svg>;
}
export default IconPaint;