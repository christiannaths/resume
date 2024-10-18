import React from 'react';

export function KeywordList({
  className,
  items,
  render = (item: any) => item,
}: {
  className?: React.ReactNode;
  items: any[];
  render?: (item: any) => React.ReactNode;
}) {
  return (
    <ul className={`${className}`}>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}
