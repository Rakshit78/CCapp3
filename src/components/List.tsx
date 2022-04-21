import {
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
  CircularProgress,
} from '@mui/material';
import { Box } from '@mui/system';

type Props = {
  page: number;
  setPage: any;
  list: any;
  getjson: any;
  navigate: any;
  loading: boolean;
};

export default function List<Props>({ ...props }): any {
  const scrolltoend = () => {
    props.setPage(props.page + 1);
  };
  window.onscroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      scrolltoend();
    }
  };

  return (
    <>
      <form>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>title</TableCell>
                <TableCell>author</TableCell>
                <TableCell>url</TableCell>
                <TableCell>created at</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.list.length > 0 &&
                props.list.map(
                  ({
                    story_title,
                    story_url,
                    author,
                    created_at,
                    objectID,
                  }: any) => {
                    return (
                      <TableRow
                        key={objectID}
                        onClick={() => props.getjson(objectID)}
                      >
                        <TableCell>{story_title}</TableCell>
                        <TableCell>{author}</TableCell>
                        <TableCell>{story_url}</TableCell>
                        <TableCell>{created_at}</TableCell>
                      </TableRow>
                    );
                  }
                )}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
      {props.loading ? (
        <CircularProgress style={{ display: 'grid', placeItems: 'center' }} />
      ) : (
        ''
      )}
    </>
  );
}
