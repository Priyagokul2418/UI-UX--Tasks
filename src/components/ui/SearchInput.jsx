// src/components/ui/SearchInput.jsx
import { FiSearch } from 'react-icons/fi'

const SearchInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="pl-8 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
        value={value}
        onChange={onChange}
      />
      <FiSearch className="absolute left-3 top-3 text-gray-400" />
    </div>
  )
}

export default SearchInput