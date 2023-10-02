import Svg, { Path } from 'react-native-svg';
         
function IconBrandNetflix({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-netflix" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 3l10 18h-4l-10 -18z" /><Path d="M5 3v18h4v-10.5" /><Path d="M19 21v-18h-4v10.5" /></Svg>;

}
export default IconBrandNetflix;
        