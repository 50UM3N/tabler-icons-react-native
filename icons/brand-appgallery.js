import Svg, { Path, Rect } from "react-native-svg";

function IconBrandAppgallery({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-appgallery" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={4} /><Path d="M9 8a3 3 0 0 0 6 0" /></Svg>;
}

export default IconBrandAppgallery;