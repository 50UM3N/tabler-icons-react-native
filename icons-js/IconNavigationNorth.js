import Svg, { Path } from 'react-native-svg';
         
function IconNavigationNorth({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-navigation-north" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 21l-4 -8l-4 8l4 -2z" /><Path d="M10 9v-6l4 6v-6" /></Svg>;

}
export default IconNavigationNorth;
        