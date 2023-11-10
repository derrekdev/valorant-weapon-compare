export const CloseIcon = (
  props: any,
  { iconcolor = "white" }: { iconcolor?: string }
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
      style={{ color: iconcolor }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export const ArrowDown = (
  props: any,
  { iconcolor = "white" }: { iconcolor?: string }
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
      style={{ color: iconcolor }}
    >
      {/* <path d="M0 0h24v24H0V0z" fill="none" /> */}
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>
  );
};

export const ArrowUp = (
  props: any,
  { iconcolor = "white" }: { iconcolor?: string }
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
      style={{ color: iconcolor }}
    >
      {/* <path d="M0 0h24v24H0z" fill="none" /> */}
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </svg>
  );
};
