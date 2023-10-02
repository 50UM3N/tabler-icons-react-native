import Svg, { Path } from 'react-native-svg';
         
function IconDatabaseExport({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-database-export" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" /><Path d="M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.183 -.086 3.15 -.241" /><Path d="M20 12v-6" /><Path d="M4 12v6c0 1.657 3.582 3 8 3c.157 0 .312 -.002 .466 -.005" /><Path d="M16 19h6" /><Path d="M19 16l3 3l-3 3" /></Svg>;

}
export default IconDatabaseExport;
        