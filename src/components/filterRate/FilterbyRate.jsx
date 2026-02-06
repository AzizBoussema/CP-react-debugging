import React, { useState } from 'react';
import { Flex, Rate } from 'antd';
const desc = [
  'terrible',
  { placement: 'top', title: 'bad', trigger: 'hover' },
  'normal',
  'good',
  'wonderful',
];

const FilterbyRate = ({SearchRate, setSearchRate}) => {
  return (
    <Flex gap="middle" vertical>
        <h5>Search By Rate</h5>
      <Rate tooltips={desc} onChange={setSearchRate} value={SearchRate} />
    </Flex>
  );
};
export default FilterbyRate;