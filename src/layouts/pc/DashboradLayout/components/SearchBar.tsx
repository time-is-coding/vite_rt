import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';

const { Search } = Input;
interface Iprops {
  searchProps: SearchProps;
  handleEvent: (type: string, title: string, data?: any) => any;
}

function SearchBar(props: Iprops) {
  const { searchProps, handleEvent } = props;
  return (
    <Search
      {...searchProps}
      onSearch={(value) => {
        handleEvent('search', 'SearchBar', value);
      }}
      style={{ display: 'flex', alignItems: 'center' }}
    />
  );
}

export default SearchBar;
