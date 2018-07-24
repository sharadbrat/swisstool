import React from 'react';

import './Logo.scss'

function Logo({ color, className }) {
  return (
    <div className={className} aria-label="Swisstool logo">
      <svg className="logo-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000">
        <g fill={color || '#fff'}>
          <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
            <path d="M4451.6,4965.3c-641.1-168.3-1088.4-743.4-1090.6-1397.3c0-157.6-102.2-451.6-1855.2-5352.7c-80.9-227.9-147-432.4-147-453.7c0-23.4,29.8-70.3,66-106.5c59.6-61.8,72.4-63.9,174.7-51.1c568.7,66,1192.8,568.7,1669.9,1346.2l91.6,147v-1299.3c0-1473.9,0-1471.8,161.9-1795.6C3759.4-4479,4264.2-4790,4809.5-4790c451.6,0,907.4,227.9,1156.6,579.4c217.3,306.7,270.5,477.1,289.7,932.9l12.8,330.1l788.1,272.7c475,161.9,798.7,285.4,815.8,308.8c14.9,19.2,31.9,57.5,38.3,80.9c8.5,29.8-287.5,815.8-820,2187.5L6257.9,2043v311c0,170.4,6.4,311,12.8,311c21.3,0,1035.2-792.4,1043.7-817.9c4.3-12.8-4.2-230-19.2-481.4c-29.8-477.1-23.4-558.1,49-596.4c68.2-36.2,164-23.4,221.5,27.7C7682.8,901.3,8624.3,2019.6,8637,2066.4c29.8,115-110.8,242.8-221.5,202.3c-51.1-17-245-230-692.3-754l-63.9-74.6l14.9,276.9c12.8,251.3,10.6,283.3-25.6,323.8c-21.3,25.6-342.9,281.2-713.5,570.8l-677.3,524v291.8c0,366.4-34.1,532.5-159.7,788.1C5802,4814.1,5097,5133.6,4451.6,4965.3z M5150.3,4609.6c262-72.4,500.5-257.7,622-487.8c129.9-242.8,123.5-12.8,123.5-4012.9c0-3493.2-2.1-3659.3-40.5-3795.6c-127.8-468.6-519.7-747.6-1045.8-747.6c-334.4,0-583.6,95.8-788.1,302.4c-63.9,66-142.7,168.3-174.7,227.9c-129.9,242.8-123.5,12.8-123.5,4012.9c0,3998-6.4,3772.2,121.4,4010.7C4083.1,4556.4,4615.6,4756.6,5150.3,4609.6z M3261-302.1c-360-792.4-811.5-1346.2-1309.9-1612.4c-68.2-36.2-123.5-57.5-123.5-46.8c0,12.8,336.5,964.9,747.6,2117.2c411.1,1150.2,754,2112.9,762.5,2136.4c6.4,23.4,14.9-500.5,19.2-1167.2l4.3-1207.7L3261-302.1z M6896.8-579c342.9-881.8,594.3-1559.2,583.6-1567.7c-10.7-10.7-272.7-104.4-583.6-210.9c-311-106.5-581.5-200.2-600.7-206.6c-36.2-14.9-38.3,78.8-38.3,1791.3c0,996.8,8.5,1793.4,19.2,1776.4C6287.7,986.5,6566.7,273,6896.8-579z"/>
            <path d="M4570.9,4234.7c-232.2-98-389.8-272.6-457.9-502.7c-70.3-244.9,10.6-489.9,230-692.2c300.3-279,690.1-262,975.5,40.5c151.2,159.7,202.3,279,202.3,479.2c2.1,129.9-8.5,183.2-55.4,281.2C5301.5,4190,4894.7,4368.9,4570.9,4234.7z M4988.4,3891.8c166.1-68.2,238.5-334.4,140.6-521.8c-117.1-230-521.8-230-639,0c-59.6,115-53.3,328,12.8,417.5C4594.3,3913.1,4822.2,3962.1,4988.4,3891.8z"/>
            <path d="M4639.1-2713.3v-266.2h-276.9h-276.9v-181.1v-181h276.9h276.9v-264.1v-262l93.7-12.8c49-8.5,125.7-8.5,170.4,0l76.7,12.8v262v264.1h276.9h276.9v181v181.1h-276.9h-276.9v266.2v266.2h-170.4h-170.4V-2713.3z"/>
            <path d="M6449.6-1882.6v-181.1h181.1h181v181.1v181h-181h-181.1V-1882.6z"/>
          </g>
        </g>
      </svg>
    </div>
  );
}

export { Logo };
