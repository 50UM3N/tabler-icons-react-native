import Svg, { Path } from 'react-native-svg';
         
function IconShiJumping({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shi-jumping" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M17 17.5l-5 -4.5v-6l5 4" /><Path d="M7 17.5l5 -4.5" /><Path d="M15.103 21.58l6.762 -14.502a2 2 0 0 0 -.968 -2.657" /><Path d="M8.897 21.58l-6.762 -14.503a2 2 0 0 1 .968 -2.657" /><Path d="M7 11l5 -4" /></Svg>;

}
export default IconShiJumping;
        