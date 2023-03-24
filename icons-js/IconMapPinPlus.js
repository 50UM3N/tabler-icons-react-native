import Svg, { Path } from 'react-native-svg';
                    
function IconMapPinPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><Path d="M12.794 21.322a2 2 0 0 1 -2.207 -.422l-4.244 -4.243a8 8 0 1 1 13.59 -4.616" /><Path d="M16 19h6" /><Path d="M19 16v6" /></Svg>;

}
export default IconMapPinPlus;
                    