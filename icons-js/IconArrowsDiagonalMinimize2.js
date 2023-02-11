import Svg, { Path } from 'react-native-svg';
                    
function IconArrowsDiagonalMinimize2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-diagonal-minimize-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 10h-4v-4" /><Path d="M20 4l-6 6" /><Path d="M6 14h4v4" /><Path d="M10 14l-6 6" /></Svg>;

}
export default IconArrowsDiagonalMinimize2;
                    