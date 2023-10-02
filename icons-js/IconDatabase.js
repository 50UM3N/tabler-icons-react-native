import Svg, { Path } from 'react-native-svg';
         
function IconDatabase({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-database" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><Path d="M4 6v6a8 3 0 0 0 16 0v-6" /><Path d="M4 12v6a8 3 0 0 0 16 0v-6" /></Svg>;

}
export default IconDatabase;
        