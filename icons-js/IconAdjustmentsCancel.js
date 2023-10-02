import Svg, { Path } from 'react-native-svg';
         
function IconAdjustmentsCancel({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-cancel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M6 4v4" /><Path d="M6 12v8" /><Path d="M13.499 14.675a2 2 0 1 0 -1.499 3.325" /><Path d="M12 4v10" /><Path d="M12 18v2" /><Path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M18 4v1" /><Path d="M18 9v3" /><Path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M17 21l4 -4" /></Svg>;

}
export default IconAdjustmentsCancel;
        