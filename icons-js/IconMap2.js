import Svg, { Path } from 'react-native-svg';
                    
function IconMap2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 6l0 .01" /><Path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" /><Path d="M10.5 4.75l-1.5 -.75l-6 3l0 13l6 -3l6 3l6 -3l0 -2" /><Path d="M9 4l0 13" /><Path d="M15 15l0 5" /></Svg>;

}
export default IconMap2;
                    