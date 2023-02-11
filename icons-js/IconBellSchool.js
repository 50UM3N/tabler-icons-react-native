import Svg, { Path } from 'react-native-svg';
                    
function IconBellSchool({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell-school" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 10m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" /><Path d="M13.5 15h.5a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.5" /><Path d="M16 17a5.698 5.698 0 0 0 4.467 -7.932l-.467 -1.068" /><Path d="M10 10v.01" /><Path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></Svg>;

}
export default IconBellSchool;
                    