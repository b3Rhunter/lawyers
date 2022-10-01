import { CSSProperties } from "react";
import Select from 'react-select';

import { AfricaOption, AsiaPacificOption, CanadaAndAtlanticOption, 
  EuropeOption, LatinAmericaCaribbeanOption, MiddleEastOption, 
  UnitedStatesOption, GroupedOption, groupedOptions } from "./../jurisdictionData";

import "./FilterComponent.css";

const groupStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'lightgray'
};

type ClassName = {
  className?: string
}

export const FilterComponent = ({className}: ClassName) => {
  const formatGroupLabel = (data: GroupedOption) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
    </div>
  );

  return (
    <div className={className}>
      <Select<AfricaOption | AsiaPacificOption | CanadaAndAtlanticOption | EuropeOption |
        LatinAmericaCaribbeanOption | MiddleEastOption | UnitedStatesOption, false, GroupedOption>
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
        placeholder="Jurisdiction"
        theme={(theme) => ({
          ...theme,
          borderRadius: 4,
          colors: {
          ...theme.colors,
            text: '#0F3D3E',
            primary25: 'rgba(15,61,62,0.3)',
            primary50: '#0F3D3E',
            primary: '#0F3D3E',
          },
        })}
      />
    </div>
  );
}