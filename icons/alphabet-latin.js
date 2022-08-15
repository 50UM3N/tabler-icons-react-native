import Svg, { Path, Rect } from "react-native-svg";

function IconAlphabetLatin({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alphabet-latin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3" /><Path d="M14 7v10" /><Rect x={14} y={10} width={5} height={7} rx={2} /></Svg>;
}

export default IconAlphabetLatin;