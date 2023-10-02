import Svg, { Path } from 'react-native-svg';
         
function IconBrandYandex({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-yandex" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 20v-16h-2a4 4 0 0 0 -4 4v1a4 4 0 0 0 4 4h2" /><Path d="M9 20l3 -7" /></Svg>;

}
export default IconBrandYandex;
        