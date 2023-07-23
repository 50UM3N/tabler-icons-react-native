import Svg, { Path } from 'react-native-svg';
         
function IconBrightness({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brightness" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M12 3l0 18" /><Path d="M12 9l4.65 -4.65" /><Path d="M12 14.3l7.37 -7.37" /><Path d="M12 19.6l8.85 -8.85" /></Svg>;

}
export default IconBrightness;
        