import React from 'react';

export interface NotificationIconProps extends React.SVGProps<SVGSVGElement> {}


export const NotificationIcon: React.FC<NotificationIconProps> = (props) => {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="mask0_1635_1946" style={{
        maskType: "alpha"
      }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
        <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1635_1946)">
        <path
          d="M3.33331 16.3333V14.6667H4.99998V8.83332C4.99998 7.68055 5.3472 6.65624 6.04165 5.76041C6.73609 4.86457 7.63887 4.27777 8.74998 3.99999V3.41666C8.74998 3.06943 8.87151 2.7743 9.11456 2.53124C9.35762 2.28818 9.65276 2.16666 9.99998 2.16666C10.3472 2.16666 10.6423 2.28818 10.8854 2.53124C11.1285 2.7743 11.25 3.06943 11.25 3.41666V3.99999C12.3611 4.27777 13.2639 4.86457 13.9583 5.76041C14.6528 6.65624 15 7.68055 15 8.83332V14.6667H16.6666V16.3333H3.33331ZM9.99998 18.8333C9.54165 18.8333 9.14929 18.6701 8.8229 18.3437C8.49651 18.0174 8.33331 17.625 8.33331 17.1667H11.6666C11.6666 17.625 11.5035 18.0174 11.1771 18.3437C10.8507 18.6701 10.4583 18.8333 9.99998 18.8333Z"
          fill="var(--justaname-primary-color)" />
      </g>
    </svg>

  )
}