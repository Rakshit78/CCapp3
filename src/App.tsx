import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import Json from './components/Json';
import List from './components/List';

function App() {
  const [page, setPage] = useState<number>(1);
  const [list, setList] = useState<any>([]);
  const [jsondata, setJsondata] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const getdata = async () => {
    setLoading(true);
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=story&page=${page}`
    );
    const data = await res.json();
    //console.log(data.hits);
    setList([...list, ...data.hits]);
    setLoading(false);
  };
  useEffect(() => {
    getdata();
    const id = setInterval(() => {
      setPage(page + 1);
    }, 10000);

    return () => clearInterval(id);
  }, [page]);
  const getjson = (id: any) => {
    const filteredlist = list.filter((res: any) => {
      return res.objectID === id;
    });
    setJsondata(filteredlist);
    navigate('/json');
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <List
              list={list}
              page={page}
              setPage={setPage}
              getjson={getjson}
              navigate={navigate}
              loading={loading}
            />
          }
        />
        <Route
          path='/json'
          element={<Json jsondata={jsondata} navigate={navigate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
