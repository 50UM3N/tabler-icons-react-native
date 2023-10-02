import Svg, { Path } from 'react-native-svg';
         
function IconBrandMantine({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-mantine" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M11 16c1.22 -.912 2 -2.36 2 -4a5.01 5.01 0 0 0 -2 -4" /><Path d="M14 9h-2" /><Path d="M14 15h-2" /><Path d="M10 12h.01" /></Svg>;

}
export default IconBrandMantine;
        