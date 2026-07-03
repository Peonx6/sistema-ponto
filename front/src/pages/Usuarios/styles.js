import styled, { createGlobalStyle } from "styled-components";
import { Input, Select } from "antd";
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  gap: 40px;
`;

export const PageTitle = styled.h1`
  color: #ffe712;
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  letter-spacing: 1px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 750px;
`;

export const SearchInput = styled(Input)`
  border-radius: 25px;
  padding: 10px 20px;
  background-color: #f5f5f5;
  font-size: 16px;
  border: none;
`;

export const SearchIcon = styled(SearchOutlined)`
  color: #000000;
  margin-right: 5px;
`;

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 750px;
`;

export const TableText = styled.span`
  color: #ffffff;
`;

export const TableTextBold = styled.span`
  font-weight: 500;
  color: #ffffff;
`;

export const StyledSelect = styled(Select)`
  width: 150px;

  .ant-select-selector {
    background-color: #ffffff !important;
    color: #000000 !important;
    border-radius: 4px !important;
    font-weight: bold !important;
  }

  .ant-select-dropdown {
    background-color: #333333 !important;
  }
`;

export const StyledDeleteIcon = styled(DeleteOutlined)`
  font-size: 22px;
  color: #ffffff;
  cursor: pointer;
`;

export const GlobalTableStyles = createGlobalStyle`
  .ant-table-thead > tr > th {
    background-color: transparent !important;
    color: #ffffff !important;
    font-size: 24px !important;
    font-weight: bold !important;
    border-bottom: 2px solid #ffffff !important;
    padding-left: 0 !important;
  }

  .ant-table-tbody > tr > td {
    background-color: #000000 !important;
    border-bottom: 1px solid #ffffff !important;
    font-size: 18px !important;
    padding: 20px 0 !important;
  }

  .ant-table {
    background: transparent !important;
  }
`;
