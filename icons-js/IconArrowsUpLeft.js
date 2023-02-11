import Svg, { Path } from 'react-native-svg';
                    
function IconArrowsUpLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-up-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 7l-4 -4l-4 4" /><Path d="M17 3v11a3 3 0 0 1 -3 3h-11" /><Path d="M7 13l-4 4l4 4" /></Svg>;

}
export default IconArrowsUpLeft;
                    