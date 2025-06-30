'use client';

import React, { useState, ChangeEvent } from "react";
import Search from "./search_bar";
import Card from "./card";

export default function DisplayClient({ blogs }:any) {
  const [searchParam, setSearchParams] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(e.target.value);
  };

  const filteredData =searchParam === '' ? blogs : blogs.filter((item:any) =>
    item.title.toLowerCase().includes(searchParam.toLowerCase())
  );

  return (
    <div>
      <Search handleChange={handleChange} />

      {filteredData.map((c:any) => (
        <Card
          key={c._id}
          author={c.author}
          content={c.content}
          date={c.date}
          title={c.title}
        />
      ))}
    </div>
  );
}
