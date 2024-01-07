import React, { useState } from 'react';
import Image from 'next/image';

interface ChildComponentProps {
  setMeaning: React.Dispatch<React.SetStateAction<any>>;
}

const Search: React.FC<ChildComponentProps> = ({setMeaning}) => {
  const [value, setValue] = useState('');
  

  const handleKeyPress = async(event: { key: string; }) => {
    if (event.key === 'Enter') {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
      const data = await response.json();
      // console.log(data)
      setMeaning(data)
    }
  };

  return (
    <div className="my-[23px] ml-[223px]">
      <div className="w-[1003px] h-[68px] border-[1px] rounded-[20px] bg-box py-[20px] flex gap-[18px]">
        <button>
          <Image
            className="ml-[17px]"
            src="/assets/Search.svg"
            width={28}
            height={28}
            alt="search button"
          />
        </button>
        <input
          className="w-[904px] bg-box focus:border-none focus:outline-none"
          type="text"
          name="search"
          placeholder="Input text here"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Search;
