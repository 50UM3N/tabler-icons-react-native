import Svg, { Path, Polyline } from "react-native-svg";

function IconTrendingUp({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="3 17 9 11 13 15 21 7" /><Polyline points="14 7 21 7 21 14" /></Svg>;
}

export default IconTrendingUp;