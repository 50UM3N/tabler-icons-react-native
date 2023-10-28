import Svg, { Path } from 'react-native-svg';
         
function IconGrid4x4({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-4x4" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 6h18" /><Path d="M3 12h18" /><Path d="M3 18h18" /><Path d="M6 3v18" /><Path d="M12 3v18" /><Path d="M18 3v18" /></Svg>;

}
export default IconGrid4x4;
        