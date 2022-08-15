import Svg, { Path } from "react-native-svg";

function IconSlice({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-slice" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4" /></Svg>;
}

export default IconSlice;