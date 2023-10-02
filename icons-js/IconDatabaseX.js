import Svg, { Path } from 'react-native-svg';
         
function IconDatabaseX({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-database-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" /><Path d="M4 6v6c0 1.657 3.582 3 8 3c.537 0 1.062 -.02 1.57 -.058" /><Path d="M20 13.5v-7.5" /><Path d="M4 12v6c0 1.657 3.582 3 8 3c.384 0 .762 -.01 1.132 -.03" /><Path d="M22 22l-5 -5" /><Path d="M17 22l5 -5" /></Svg>;

}
export default IconDatabaseX;
        