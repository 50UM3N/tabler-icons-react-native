import Svg, { Path } from 'react-native-svg';
         
function IconBookmarkAi({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-ai" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10.02 18.32l-4.02 2.68v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v4.5" /><Path d="M14 21v-4a2 2 0 1 1 4 0v4" /><Path d="M14 19h4" /><Path d="M21 15v6" /></Svg>;

}
export default IconBookmarkAi;
        