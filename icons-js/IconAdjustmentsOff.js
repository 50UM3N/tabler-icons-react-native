import Svg, { Path } from 'react-native-svg';
                    
function IconAdjustmentsOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M6 6v2" /><Path d="M6 12v8" /><Path d="M12 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M12 4v4" /><Path d="M12 12v2" /><Path d="M12 18v2" /><Path d="M18 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M18 4v1" /><Path d="M18 9v5" /><Path d="M18 18v2" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconAdjustmentsOff;
                    