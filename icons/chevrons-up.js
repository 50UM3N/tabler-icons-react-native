import Svg, { Path, Polyline } from "react-native-svg";

function IconChevronsUp({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="7 11 12 6 17 11" /><Polyline points="7 17 12 12 17 17" /></Svg>;
}

export default IconChevronsUp;