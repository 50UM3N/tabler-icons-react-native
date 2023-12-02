import Svg, { Path } from 'react-native-svg';
         
function IconDesk({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-desk" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 6h18" /><Path d="M4 6v13" /><Path d="M20 19v-13" /><Path d="M4 10h16" /><Path d="M15 6v8a2 2 0 0 0 2 2h3" /></Svg>;

}
export default IconDesk;
        