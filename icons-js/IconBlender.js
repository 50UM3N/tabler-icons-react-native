import Svg, { Path } from 'react-native-svg';
         
function IconBlender({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-blender" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 10h-3a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h10.802a1 1 0 0 1 .984 1.179l-1.786 9.821" /><Path d="M8 4l2 11" /><Path d="M11 15h4a3 3 0 0 1 3 3v2a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-2a3 3 0 0 1 3 -3z" /><Path d="M12 4v-1h2v1" /><Path d="M13 18v.01" /></Svg>;

}
export default IconBlender;
        