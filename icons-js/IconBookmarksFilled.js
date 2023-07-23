import Svg, { Path } from 'react-native-svg';
         
function IconBookmarksFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 6h-6a3 3 0 0 0 -3 3v12l.006 .114a1 1 0 0 0 1.508 .743l4.486 -2.691l4.486 2.691a1 1 0 0 0 1.514 -.857v-12a3 3 0 0 0 -3 -3z" stroke-width="0" fill={color} /><Path d="M17 2a3 3 0 0 1 2.995 2.824l.005 .176v12a1 1 0 0 1 -1.413 .911l-.101 -.054l-1 -.6a1 1 0 0 1 .489 -1.857l.025 .001v-10.401a1 1 0 0 0 -.883 -.993l-.117 -.007h-6.001a1 1 0 0 0 -.803 .401l-.13 .197a1 1 0 0 1 -1.666 -1.098a3 3 0 0 1 2.4 -1.494l.2 -.006h6z" stroke-width="0" fill="currentColor" /></Svg>;

}
export default IconBookmarksFilled;
        