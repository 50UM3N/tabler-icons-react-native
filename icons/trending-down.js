import Svg, { Path, Polyline } from "react-native-svg";

function IconTrendingDown({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="3 7 9 13 13 9 21 17" /><Polyline points="21 10 21 17 14 17" /></Svg>;
}

export default IconTrendingDown;