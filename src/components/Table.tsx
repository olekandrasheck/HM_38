import React from "react";
import "./table.css";

export const tableInfo: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
interface IState {
  row: number | undefined;
  cell: number | undefined;
  element: HTMLElement | any;
}

export const Table: React.FC<{ tableInfo: number[][] }> = ({ tableInfo }) => {
  const [state, setState] = React.useState<IState>({
    row: undefined,
    cell: undefined,
    element: undefined,
  });
  const handleClick: (
    row: number,
    cell: number,
    element: HTMLElement
  ) => void = (row, cell, element) => {
    console.log(element);
    setState({ row, cell, element: element.nodeName });
  };
  return (
    <>
      <table className="table">
        {tableInfo?.map((item: any, itIndex: number) => (
          <tr className="tr">
            {item.map((cell: any, cellIndex: number) => (
              <td
                onClick={(evt) =>
                  handleClick(itIndex + 1, cellIndex + 1, evt.currentTarget)
                }
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </table>
      <p className="info">
        Row: <span>{state.row} </span> cell: <span>{state.cell} </span> cell
        type: <span>{state.element}</span>
      </p>
    </>
  );
};
