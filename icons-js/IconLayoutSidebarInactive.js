import Svg, { Path } from 'react-native-svg';
         
function IconLayoutSidebarInactive({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-sidebar-inactive" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" /><Path d="M9 4v1" /><Path d="M9 9v1" /><Path d="M9 14v1" /><Path d="M9 19v1" /></Svg>;

}
export default IconLayoutSidebarInactive;
        