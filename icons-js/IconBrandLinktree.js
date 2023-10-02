import Svg, { Path } from 'react-native-svg';
         
function IconBrandLinktree({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linktree" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 3l-7 12h3v5h5v-5h-2l4 -7z" /><Path d="M15 3l7 12h-3v5h-5v-5h2l-4 -7z" /></Svg>;

}
export default IconBrandLinktree;
        