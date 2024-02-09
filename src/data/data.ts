import { v4 as idv4 } from 'uuid';

const data = [
  {
    id: idv4(),
    nameProject: 'Password Manager',
    type: 'web',
    tech: ['TS', 'REACT', 'HOOKS'],
    link: 'https://password-manager-wine.vercel.app/'
  },
  { 
    id: idv4(),
    nameProject: 'Initial Logic',
    type: 'course',
    tech: ['JS', 'LOGIC', 'ALGORITHM'],
    link: 'https://www.youtube.com/watch?v=_iuoHhyCB0I'
  }
]

export default data;