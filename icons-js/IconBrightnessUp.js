import Svg, { Path } from 'react-native-svg';
                    
function IconBrightnessUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brightness-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M12 5l0 -2" /><Path d="M17 7l1.4 -1.4" /><Path d="M19 12l2 0" /><Path d="M17 17l1.4 1.4" /><Path d="M12 19l0 2" /><Path d="M7 17l-1.4 1.4" /><Path d="M6 12l-2 0" /><Path d="M7 7l-1.4 -1.4" /></Svg>;

}
export default IconBrightnessUp;
                    