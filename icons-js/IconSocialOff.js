import Svg, { Path } from 'react-native-svg';
         
function IconSocialOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-social-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M17.57 17.602a2 2 0 0 0 2.83 2.827" /><Path d="M11.113 11.133a3 3 0 1 0 3.765 3.715" /><Path d="M12 7v1" /><Path d="M6.7 17.8l2.8 -2" /><Path d="M17.3 17.8l-2.8 -2" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconSocialOff;
        