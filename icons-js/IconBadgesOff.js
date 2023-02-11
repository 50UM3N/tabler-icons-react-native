import Svg, { Path } from 'react-native-svg';
                    
function IconBadgesOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-badges-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14.505 14.497l-2.505 1.503l-5 -3v4l5 3l5 -3" /><Path d="M13.873 9.876l3.127 -1.876v-4l-5 3l-2.492 -1.495m-2.508 1.495v1l2.492 1.495" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconBadgesOff;
                    