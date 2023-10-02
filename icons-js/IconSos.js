import Svg, { Path } from 'react-native-svg';
         
function IconSos({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sos" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" /><Path d="M10 8h4v8h-4z" /><Path d="M17 16h3a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h3" /></Svg>;

}
export default IconSos;
        