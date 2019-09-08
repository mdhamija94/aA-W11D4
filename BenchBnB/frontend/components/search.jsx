import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({ benches, fetchBenches }) => {
  return (
    <div className="main-content-container">
      <BenchMap benches={benches} fetchBenches={fetchBenches}/>
      <BenchIndex benches={benches} fetchBenches={fetchBenches}/>
    </div>
  )
};

export default Search;