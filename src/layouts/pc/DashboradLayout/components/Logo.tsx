interface Iprops {
  logo: string;
  handleEvent: (type: string, title: string, data?: any) => any;
}

function Logo(props: Iprops) {
  const { logo, handleEvent } = props;
  return (
    <img
      src={logo}
      alt=""
      width={80}
      height={32}
      style={{ objectFit: 'cover' }}
      onClick={() => {
        handleEvent('click', 'Logo', '');
      }}
    />
  );
}

export default Logo;
