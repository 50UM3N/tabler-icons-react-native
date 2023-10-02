import Svg, { Path } from 'react-native-svg';
         
function IconArrowsMinimize({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-minimize" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 9l4 0l0 -4" /><Path d="M3 3l6 6" /><Path d="M5 15l4 0l0 4" /><Path d="M3 21l6 -6" /><Path d="M19 9l-4 0l0 -4" /><Path d="M15 9l6 -6" /><Path d="M19 15l-4 0l0 4" /><Path d="M15 15l6 6" /></Svg>;

}
export default IconArrowsMinimize;
        