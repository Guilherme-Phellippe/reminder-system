import { FaFilter } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import './filter.css'

export const Filter = ({ onclick, onchange, open }) => {

    return (
        <>
            <FaFilter onClick={onclick} />
            {open &&
                <div className="box-filter">
                    <div className="box-search">
                        <input 
                            type="text"
                            placeholder='Busque um lembrete' 
                            onChange={onchange}
                        />
                        <FaSearch />
                    </div>
                </div>
            }
        </>
    )
}