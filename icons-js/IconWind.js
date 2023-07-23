import Svg, { Path } from 'react-native-svg';
         
function IconWind({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wind" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" /><Path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" /><Path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" /></Svg>;

}
export default IconWind;
        