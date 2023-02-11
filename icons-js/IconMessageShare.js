import Svg, { Path } from 'react-native-svg';
                    
function IconMessageShare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-share" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 11v3a3 3 0 0 1 -3 3h-9l-4 4v-13a3 3 0 0 1 3 -3h7" /><Path d="M17 4h4v4" /><Path d="M16 9l5 -5" /></Svg>;

}
export default IconMessageShare;
                    