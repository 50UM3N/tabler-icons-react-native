import Svg, { Path } from 'react-native-svg';
                    
function IconWifi2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wifi-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 18l.01 0" /><Path d="M9.172 15.172a4 4 0 0 1 5.656 0" /><Path d="M6.343 12.343a8 8 0 0 1 11.314 0" /></Svg>;

}
export default IconWifi2;
                    