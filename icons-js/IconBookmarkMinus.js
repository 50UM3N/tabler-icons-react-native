import Svg, { Path } from 'react-native-svg';
         
function IconBookmarkMinus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 17l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v8" /><Path d="M16 19h6" /></Svg>;

}
export default IconBookmarkMinus;
        