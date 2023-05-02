import Svg, { Path } from 'react-native-svg';
                    
function IconDatabaseShare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-database-share" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" /><Path d="M4 6v6c0 1.657 3.582 3 8 3c.361 0 .716 -.009 1.065 -.026" /><Path d="M20 13v-7" /><Path d="M4 12v6c0 1.657 3.582 3 8 3" /><Path d="M16 22l5 -5" /><Path d="M21 21.5v-4.5h-4.5" /></Svg>;

}
export default IconDatabaseShare;
                    