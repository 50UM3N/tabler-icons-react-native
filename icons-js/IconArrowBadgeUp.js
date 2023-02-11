import Svg, { Path } from 'react-native-svg';
                    
function IconArrowBadgeUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 11v6l-5 -4l-5 4v-6l5 -4z" /></Svg>;

}
export default IconArrowBadgeUp;
                    