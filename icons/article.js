import Svg, { Path, Rect } from "react-native-svg";

function IconArticle({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-article" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={4} width={18} height={16} rx={2} /><Path d="M7 8h10" /><Path d="M7 12h10" /><Path d="M7 16h10" /></Svg>;
}

export default IconArticle;