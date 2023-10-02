import Svg, { Path } from 'react-native-svg';
         
function IconGitMerge({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-git-merge" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M7 8l0 8" /><Path d="M7 8a4 4 0 0 0 4 4h4" /></Svg>;

}
export default IconGitMerge;
        