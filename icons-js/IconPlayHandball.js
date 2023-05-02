import Svg, { Path } from 'react-native-svg';
                    
function IconPlayHandball({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-play-handball" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 21l3.5 -2l-4.5 -4l2 -4.5" /><Path d="M7 6l2 4l5 .5l4 2.5l2.5 3" /><Path d="M4 20l5 -1l1.5 -2" /><Path d="M15 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M9.5 5a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor" /></Svg>;

}
export default IconPlayHandball;
                    