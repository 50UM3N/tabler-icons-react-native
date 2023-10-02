import Svg, { Path } from 'react-native-svg';
         
function IconPackage({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><Path d="M12 12l8 -4.5" /><Path d="M12 12l0 9" /><Path d="M12 12l-8 -4.5" /><Path d="M16 5.25l-8 4.5" /></Svg>;

}
export default IconPackage;
        