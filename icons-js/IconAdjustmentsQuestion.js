import Svg, { Path } from 'react-native-svg';
                    
function IconAdjustmentsQuestion({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-question" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M6 4v4" /><Path d="M6 12v8" /><Path d="M13.577 14.77a2 2 0 1 0 .117 2.295" /><Path d="M12 4v10" /><Path d="M19 22v.01" /><Path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /><Path d="M12 18v2" /><Path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M18 4v1" /><Path d="M18 9v2" /></Svg>;

}
export default IconAdjustmentsQuestion;
                    