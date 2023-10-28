import Svg, { Path } from 'react-native-svg';
         
function IconPasswordUser({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-password-user" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 17v4" /><Path d="M10 20l4 -2" /><Path d="M10 18l4 2" /><Path d="M5 17v4" /><Path d="M3 20l4 -2" /><Path d="M3 18l4 2" /><Path d="M19 17v4" /><Path d="M17 20l4 -2" /><Path d="M17 18l4 2" /><Path d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><Path d="M7 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2" /></Svg>;

}
export default IconPasswordUser;
        