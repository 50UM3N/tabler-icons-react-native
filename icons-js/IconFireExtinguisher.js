import Svg, { Path } from 'react-native-svg';
         
function IconFireExtinguisher({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-fire-extinguisher" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-9a4 4 0 0 1 4 -4z" /><Path d="M9 16h6" /><Path d="M12 7v-3" /><Path d="M16 5l-4 -1l4 -1" /><Path d="M12 4h-3a3 3 0 0 0 -3 3" /></Svg>;

}
export default IconFireExtinguisher;
        