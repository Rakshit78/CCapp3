import { Button } from '@mui/material';
type Props = {
  jsondata: any;
  navigate: any;
};
export default function Json<Props>({ ...props }): any {
  return (
    <>
      <Button onClick={() => props.navigate(-1)} role='btn'>
        back
      </Button>
      <pre>{JSON.stringify(props.jsondata, null, 2)}</pre>
    </>
  );
}
