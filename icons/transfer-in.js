import Svg, { Path } from "react-native-svg";

function IconTransferIn({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-transfer-in" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 18v3h16v-14l-8 -4l-8 4v3" /><Path d="M4 14h9" /><Path d="M10 11l3 3l-3 3" /></Svg>;
}

export default IconTransferIn;