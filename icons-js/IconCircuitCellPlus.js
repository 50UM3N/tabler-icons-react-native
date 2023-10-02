import Svg, { Path } from 'react-native-svg';
         
function IconCircuitCellPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circuit-cell-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 12h9" /><Path d="M15 12h7" /><Path d="M11 5v14" /><Path d="M15 9v6" /><Path d="M3 5h4" /><Path d="M5 3v4" /></Svg>;

}
export default IconCircuitCellPlus;
        