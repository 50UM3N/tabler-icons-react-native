import Svg, { Path } from 'react-native-svg';
                    
function IconBadgeFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-badge-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 17v-13l-5 3l-5 -3v13l5 3z" fill="currentColor" /></Svg>;

}
export default IconBadgeFilled;
                    