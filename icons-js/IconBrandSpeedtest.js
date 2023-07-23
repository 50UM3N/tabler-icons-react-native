import Svg, { Path } from 'react-native-svg';
         
function IconBrandSpeedtest({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-speedtest" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5.636 19.364a9 9 0 1 1 12.728 0" /><Path d="M16 9l-4 4" /></Svg>;

}
export default IconBrandSpeedtest;
        