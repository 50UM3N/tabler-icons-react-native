import Svg, { Path, Circle } from "react-native-svg";

function IconCoinRupee({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-coin-rupee" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M15 8h-6h1a3 3 0 0 1 0 6h-1l3 3" /><Path d="M9 11h6" /></Svg>;
}

export default IconCoinRupee;