import Svg, { Path } from 'react-native-svg';
         
function IconArrowsRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 17l-18 0" /><Path d="M18 4l3 3l-3 3" /><Path d="M18 20l3 -3l-3 -3" /><Path d="M21 7l-18 0" /></Svg>;

}
export default IconArrowsRight;
        