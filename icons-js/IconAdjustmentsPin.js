import Svg, { Path } from 'react-native-svg';
         
function IconAdjustmentsPin({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-pin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M6 4v4" /><Path d="M6 12v8" /><Path d="M13.071 14.31a2 2 0 1 0 -1.071 3.69" /><Path d="M12 4v10" /><Path d="M12 18v2" /><Path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M18 4v1" /><Path d="M18 9v2.5" /><Path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /><Path d="M19 18v.01" /></Svg>;

}
export default IconAdjustmentsPin;
        