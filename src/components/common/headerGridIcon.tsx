import React from 'react';

const GridIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <div className='cursor-pointer '>
      {/* Define the SVG symbol */}
      <svg style={{ display: 'none' }}>
        <symbol id="svg-grid" viewBox="0 0 20 20" preserveAspectRatio="xMinYMin meet">
          <path d="M7,0H2C0.896,0,0,0.895,0,2v5c0,1.104,0.896,2,2,2h5c1.104,0,2-0.896,2-2V2C9,0.895,8.104,0,7,0z M7,7H2V2h5V7z M7,11H2c-1.104,0-2,0.896-2,1.999v5C0,19.104,0.896,20,2,20h5c1.104,0,2-0.896,2-2.001v-5C9,11.896,8.104,11,7,11z M7,17.999H2v-5h5V17.999z M18,0h-5c-1.104,0-2,0.895-2,2v5c0,1.104,0.896,2,2,2h5c1.104,0,2-0.896,2-2V2C20,0.895,19.104,0,18,0z M18,7h-5V2h5V7z M18,11h-5c-1.104,0-2,0.896-2,1.999v5C11,19.104,11.896,20,13,20h5c1.104,0,2-0.896,2-2.001v-5C20,11.896,19.104,11,18,11z M18,17.999h-5v-5h5V17.999z"></path>
        </symbol>
      </svg>

      {/* Render the icon */}
      <svg className="icon-grid" {...props}>
        <use href="#svg-grid" />
      </svg>
    </div>
  );
};

export default GridIcon;