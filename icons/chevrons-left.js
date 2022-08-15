import Svg, { Path, Polyline } from "react-native-svg";

function IconChevronsLeft({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="11 7 6 12 11 17" /><Polyline points="17 7 12 12 17 17" /></Svg>;
}

export default IconChevronsLeft;