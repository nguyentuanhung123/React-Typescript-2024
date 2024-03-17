import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count'

// Generic Type:  <number>

// Type has intersection (&)

// type People = {
//   name: string;
//   age: number;
//   location?: string;
// }

// type Employee = People & {
//   jobTitle: string;
//   degree: string;
// }

interface IPeople {
  name: string;
  age: number;
  location?: string;
}

interface IRealationship {
  wifeName: string;
  childName: string;
}

enum Degree {
  ASSOCIATES = 'ASSOCIATES',
  BACHELORS = 'BACHELORS',
  MASTERS = 'MASTERS',
  DOCTORATE = 'DOCTORATE',
  PROFESSIONAL = 'PROFESSIONAL'
}

interface IEmployee extends IPeople, IRealationship{
  jobTitle: string;
  degree: Degree;
  level?: string | number | Degree
}

// type ApiResponse = {
//   data: IPeople[]
//   status: 'success' | 'failure'
// }

// type ApiResponse = {
//   data: {id: number; name: string}
//   status: 'success' | 'failure'
// }

// type bookResponse = {
//   data: {id: number; bookName: string}
//   status: 'success' | 'failure'
// }

// type ApiResponse<DataType, MessageType> = {
//   data: DataType;
//   status: 'success' | 'failure';
//   message?: MessageType
// }
type ApiResponse<T, K> = {
  data: T;
  status: 'success' | 'failure';
  message?: K
}


const App = () => {
  const [count, setCount] = useState<number>(0);

  const [people, setPeople] = useState<IPeople>();


  const userResponse: ApiResponse<IPeople[], string> = {
    data: [
      { name: 'Hung', age: 19 },
      { name: 'Hieu', age: 17},
      { name: 'Lan', age: 22 }
    ],
    status: 'success',
    message: 'Congratulations'
  }

  const bookResponse: ApiResponse<{id: number; bookName: string}, string> = {
    data: {
      id: 1,
      bookName: 'Nguoi phan xu'
    },
    status: 'success'
  }

  const employee: IEmployee = {
    name: 'Employee',
    age: 48,
    jobTitle: 'Software Engineer',
    degree: Degree.MASTERS, // Nếu không gán giá trị ở enum thì degree : 2
    wifeName: 'Huyen',
    childName: 'Thanh',
    level: Degree.PROFESSIONAL
  };

  const employee2: typeof employee = {
    name: 'Employee2',
    age: 48,
    jobTitle: 'Software Engineer',
    degree: Degree.MASTERS, // Nếu không gán giá trị ở enum thì degree : 2
    wifeName: 'Huyen',
    childName: 'Thanh',
    level: Degree.PROFESSIONAL
  }

  const total = (number1: number, number2: number) : string => {
    return String(number1 + number2);
  }

  useEffect(() => {
    setPeople({
      name: 'Test',
      age: 12
    })
  }, [])

  console.log(employee, employee2, people, userResponse, bookResponse);
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     <Count count={count} setCount={setCount} total={total}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
