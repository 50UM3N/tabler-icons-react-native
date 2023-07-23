import Svg, { Path } from 'react-native-svg';
         
function IconBrandFeedly({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-feedly" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.833 12.278l4.445 -4.445" /><Path d="M10.055 14.5l2.223 -2.222" /><Path d="M12.278 16.722l.555 -.555" /><Path d="M19.828 14.828a4 4 0 0 0 0 -5.656l-5 -5a4 4 0 0 0 -5.656 0l-5 5a4 4 0 0 0 0 5.656l6.171 6.172h3.314l6.171 -6.172z" /></Svg>;

}
export default IconBrandFeedly;
        