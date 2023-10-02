import Svg, { Path } from 'react-native-svg';
         
function IconEyeDiscount({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-discount" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /><Path d="M16 21l5 -5" /><Path d="M21 21v.01" /><Path d="M16 16v.01" /></Svg>;

}
export default IconEyeDiscount;
        