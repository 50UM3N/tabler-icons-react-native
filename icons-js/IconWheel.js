import Svg, { Path } from 'react-native-svg';
         
function IconWheel({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wheel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M3 12h6" /><Path d="M15 12h6" /><Path d="M13.6 9.4l3.4 -4.8" /><Path d="M10.4 14.6l-3.4 4.8" /><Path d="M7 4.6l3.4 4.8" /><Path d="M13.6 14.6l3.4 4.8" /></Svg>;

}
export default IconWheel;
        