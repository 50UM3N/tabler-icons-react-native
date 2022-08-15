import Svg, { Path, Rect } from "react-native-svg";

function IconBrandFinder({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-finder" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={4} width={18} height={16} rx={1} /><Path d="M7 8v1" /><Path d="M17 8v1" /><Path d="M12.5 4c-.654 1.486 -1.26 3.443 -1.5 9h2.5c-.19 2.867 .094 5.024 .5 7" /><Path d="M7 15.5c3.667 2 6.333 2 10 0" /></Svg>;
}

export default IconBrandFinder;