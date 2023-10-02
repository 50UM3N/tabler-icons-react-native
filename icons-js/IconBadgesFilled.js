import Svg, { Path } from 'react-native-svg';
         
function IconBadgesFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-badges-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16.486 12.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v4a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-4a1 1 0 0 0 -1.514 -.857z" stroke-width="0" fill={color} /><Path d="M16.486 3.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v4a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-4a1 1 0 0 0 -1.514 -.857z" stroke-width="0" fill="currentColor" /></Svg>;

}
export default IconBadgesFilled;
        