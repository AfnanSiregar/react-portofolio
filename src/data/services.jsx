import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';


export default [
    {
        title: 'Web Developer',
        icon: <MdWeb className='w-full h-full' />,
        description: 'HTML, CSS, Javascript',
    },
    {
        title: 'Frontend Developer',
        icon: <FaHandHoldingHeart className='w-full h-full' />,
        description: 'React.js, Vue.js, Tailwind',

    },
    {
        title: 'Backend Developer',
        icon: <VscCode className='w-full h-full' />,
        description: 'PHP Laravel',
    }
]