import Svg, { Path } from 'react-native-svg';
         
function IconDrone({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-drone" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 10h4v4h-4z" /><Path d="M10 10l-3.5 -3.5" /><Path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" /><Path d="M14 10l3.5 -3.5" /><Path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" /><Path d="M14 14l3.5 3.5" /><Path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" /><Path d="M10 14l-3.5 3.5" /><Path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" /></Svg>;

}
export default IconDrone;
        