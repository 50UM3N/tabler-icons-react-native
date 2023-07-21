import Svg, { Path, Circle } from 'react-native-svg';
                    
function IconBrandDeliveroo({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-deliveroo" width={size} height={size} viewBox="0 0 24 24" strokeWidth="0" stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 11l1 -9l5 .5l-1 13.5l-3 6l-12.5 -2.5l-1.5 -6l7 -1.5l-1.5 -7.5l4.5 -1z" /><Circle cx="15.5" cy="15.5" r="1" fill={color} /><Circle cx="11.5" cy="14.5" r="1" fill={color} /></Svg>;

}
export default IconBrandDeliveroo;
                    