import Svg, { Path } from 'react-native-svg';
         
function IconUsersGroup({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users-group" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" /><Path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M17 10h2a2 2 0 0 1 2 2v1" /><Path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M3 13v-1a2 2 0 0 1 2 -2h2" /></Svg>;

}
export default IconUsersGroup;
        