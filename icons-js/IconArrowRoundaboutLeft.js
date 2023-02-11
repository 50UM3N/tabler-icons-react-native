import Svg, { Path } from 'react-native-svg';
                    
function IconArrowRoundaboutLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-roundabout-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 9h8a5 5 0 1 1 5 5v7" /><Path d="M7 5l-4 4l4 4" /></Svg>;

}
export default IconArrowRoundaboutLeft;
                    