import Svg, { Path, Rect, Line } from "react-native-svg";

function IconSitemap({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sitemap" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={15} width={6} height={6} rx={2} /><Rect x={15} y={15} width={6} height={6} rx={2} /><Rect x={9} y={3} width={6} height={6} rx={2} /><Path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" /><Line x1={12} y1={9} x2={12} y2={12} /></Svg>;
}

export default IconSitemap;