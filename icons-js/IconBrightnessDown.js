import Svg, { Path } from 'react-native-svg';
                    
function IconBrightnessDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brightness-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M12 5l0 .01" /><Path d="M17 7l0 .01" /><Path d="M19 12l0 .01" /><Path d="M17 17l0 .01" /><Path d="M12 19l0 .01" /><Path d="M7 17l0 .01" /><Path d="M5 12l0 .01" /><Path d="M7 7l0 .01" /></Svg>;

}
export default IconBrightnessDown;
                    