import Svg, { Path } from 'react-native-svg';
         
function IconBrandNextcloud({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-nextcloud" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><Path d="M4.5 12.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><Path d="M19.5 12.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /></Svg>;

}
export default IconBrandNextcloud;
        