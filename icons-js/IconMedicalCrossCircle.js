import Svg, { Path } from 'react-native-svg';
         
function IconMedicalCrossCircle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-medical-cross-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><Path d="M12 8v8" /><Path d="M15.5 10l-7 4" /><Path d="M15.5 14l-7 -4" /></Svg>;

}
export default IconMedicalCrossCircle;
        