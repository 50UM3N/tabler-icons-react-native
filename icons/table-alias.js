import Svg, { Path, Rect } from "react-native-svg";

function IconTableAlias({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-table-alias" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" /><Rect x={3} y={15} width={6} height={6} rx={1} /><Path d="M4 10h16" /><Path d="M10 4v8" /></Svg>;
}

export default IconTableAlias;