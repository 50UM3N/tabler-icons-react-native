import Svg, { Path } from 'react-native-svg';
         
function IconHighlightOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-highlight-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 9l-6 6v4h4l6 -6m2 -2l2.503 -2.503a2.828 2.828 0 1 0 -4 -4l-2.497 2.497" /><Path d="M12.5 5.5l4 4" /><Path d="M4.5 13.5l4 4" /><Path d="M19 15h2v2m-2 2h-6l3 -3" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconHighlightOff;
        