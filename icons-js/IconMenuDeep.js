import Svg, { Path } from 'react-native-svg';
         
function IconMenuDeep({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-deep" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 6h16" /><Path d="M7 12h13" /><Path d="M10 18h10" /></Svg>;

}
export default IconMenuDeep;
        