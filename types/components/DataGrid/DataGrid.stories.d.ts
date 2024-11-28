import SKAODataGrid from './DataGrid';
declare const _default: {
  title: string;
  component: typeof SKAODataGrid;
  parameters: {
    layout: string;
  };
};
export default _default;
export declare const Light: {
  parameters: {
    backgrounds: {
      default: string;
    };
  };
  args: {
    ariaTitle: string;
    ariaDescription: string;
    checkboxSelection: boolean;
    columns: {
      field: string;
      headerName: string;
      width: number;
    }[];
    height: number;
    onRowClick: null;
    rows: {
      id: number;
      interface: string;
      execution_block: string;
      date_created: string;
      dataproduct_file: string;
      metadata_file: string;
    }[];
    showBorder: boolean;
    showMild: boolean;
    testId: string;
  };
};
export declare const Dark: {
  parameters: {
    backgrounds: {
      default: string;
    };
  };
  args: {
    ariaTitle: string;
    ariaDescription: string;
    checkboxSelection: boolean;
    columns: {
      field: string;
      headerName: string;
      width: number;
    }[];
    headerLines: number;
    height: number;
    onRowClick: null;
    rows: {
      id: number;
      interface: string;
      execution_block: string;
      date_created: string;
      dataproduct_file: string;
      metadata_file: string;
    }[];
    showBorder: boolean;
    showMild: boolean;
    testId: string;
  };
};
