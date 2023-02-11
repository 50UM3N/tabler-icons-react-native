import Svg, { Path } from 'react-native-svg';
                    
function IconDatabaseExport({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-database-export" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><Path d="M4 6v6c0 1.657 3.582 3 8 3a19.84 19.84 0 0 0 3.302 -.267m4.698 -2.733v-6" /><Path d="M4 12v6c0 1.599 3.335 2.905 7.538 3m8.462 -7v-2m-6 7h7m-3 -3l3 3l-3 3" /></Svg>;

}
export default IconDatabaseExport;
                    