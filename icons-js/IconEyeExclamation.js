import Svg, { Path } from 'react-native-svg';
                    
function IconEyeExclamation({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-exclamation" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M14.473 17.659a8.897 8.897 0 0 1 -2.473 .341c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /><Path d="M19 16v3" /><Path d="M19 22v.01" /></Svg>;

}
export default IconEyeExclamation;
                    