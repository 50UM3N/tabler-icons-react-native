import Svg, { Path } from 'react-native-svg';
                    
function IconTextResize({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-resize" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M5 7v10" /><Path d="M7 5h10" /><Path d="M7 19h10" /><Path d="M19 7v10" /><Path d="M10 10h4" /><Path d="M12 14v-4" /></Svg>;

}
export default IconTextResize;
                    