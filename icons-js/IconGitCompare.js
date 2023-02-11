import Svg, { Path } from 'react-native-svg';
                    
function IconGitCompare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-git-compare" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M11 6h5a2 2 0 0 1 2 2v8" /><Path d="M14 9l-3 -3l3 -3" /><Path d="M13 18h-5a2 2 0 0 1 -2 -2v-8" /><Path d="M10 15l3 3l-3 3" /></Svg>;

}
export default IconGitCompare;
                    