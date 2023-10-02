import Svg, { Path } from 'react-native-svg';
         
function IconGrid3x3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-3x3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 8h18" /><Path d="M3 16h18" /><Path d="M8 3v18" /><Path d="M16 3v18" /></Svg>;

}
export default IconGrid3x3;
        