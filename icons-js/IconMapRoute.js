import Svg, { Path } from 'react-native-svg';
         
function IconMapRoute({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-route" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" /><Path d="M9 12v.01" /><Path d="M6 13v.01" /><Path d="M17 15l-4 -4" /><Path d="M13 15l4 -4" /></Svg>;

}
export default IconMapRoute;
        