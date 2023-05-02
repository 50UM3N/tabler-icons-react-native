import Svg, { Path } from 'react-native-svg';
                    
function IconDatabasePlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-database-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" /><Path d="M4 6v6c0 1.657 3.582 3 8 3c1.075 0 2.1 -.08 3.037 -.224" /><Path d="M20 12v-6" /><Path d="M4 12v6c0 1.657 3.582 3 8 3c.166 0 .331 -.002 .495 -.006" /><Path d="M16 19h6" /><Path d="M19 16v6" /></Svg>;

}
export default IconDatabasePlus;
                    