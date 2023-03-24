import Svg, { Path } from 'react-native-svg';
                    
function IconAdjustmentsDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M6 4v4" /><Path d="M6 12v8" /><Path d="M13.945 15.53a2 2 0 1 0 -1.945 2.47" /><Path d="M12 4v10" /><Path d="M12 18v2" /><Path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M18 4v1" /><Path d="M18 9v3" /><Path d="M19 16v6" /><Path d="M22 19l-3 3l-3 -3" /></Svg>;

}
export default IconAdjustmentsDown;
                    