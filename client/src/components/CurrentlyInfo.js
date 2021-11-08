import { useSelector, } from "react-redux";
import { MainInfoBox } from "./boxVariant/MainInfoBox";
import { BasicTable } from "./tableVariant/BasicTable";


export const CurrentlyInfo = () => {
  const { lastResponse } = useSelector(({ currency }) => currency);

  return (                        // LIVE
    <div style={ { marginTop: '30px' } }>
      <div style={ { maxWidth: '600px', height: '40vh', fontSize: '0.1rem' } }>
        <MainInfoBox financeData={ lastResponse }/>
      </div>
      <BasicTable financeData={ lastResponse }/>
    </div>
  );
}
