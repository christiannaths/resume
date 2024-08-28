import { useEffect, useState } from 'react';

type Font = {
  name: string;
  className: string;
  weights?: Font[];
  styles?: Font[];
};

const defaultVariant = { name: 'Regular', className: '' };

const fonts: Font[] = [
  { name: 'Source Sans 3', className: 'source-sans-3' },
  { name: 'Maven Pro', className: 'maven-pro' },
  { name: 'Figtree', className: 'figtree' },
  {
    name: 'Hind',
    className: 'hind',
    weights: [
      { name: 'Regular', className: 'regular' },
      { name: 'Medium', className: 'medium' },
      { name: 'Semibold', className: 'semibold' },
      { name: 'Bold', className: 'bold' },
      { name: 'Light', className: 'light' },
    ],
  },
  { name: 'Outfit', className: 'outfit' },
  { name: 'Jost', className: 'jost' },
  {
    name: 'Mukta Regular',
    className: 'mukta',
    weights: [
      { name: 'Regular', className: 'regular' },
      { name: 'Extralight', className: 'extralight' },
      { name: 'Light', className: 'light' },
      { name: 'Medium', className: 'medium' },
      { name: 'Semibold', className: 'semibold' },
      { name: 'Bold', className: 'bold' },
      { name: 'Extrabold', className: 'extrabold' },
    ],
  },
  { name: 'Karla', className: 'karla' },
  { name: 'Nunito Sans', className: 'nunito-sans' },
  {
    name: 'Barlow',
    className: 'barlow',
    weights: [
      { name: 'Regular', className: 'regular' },
      { name: 'Thin', className: 'thin' },
      { name: 'Extralight', className: 'extralight' },
      { name: 'Light', className: 'light' },
      { name: 'Medium', className: 'medium' },
      { name: 'Semibold', className: 'semibold' },
      { name: 'Bold', className: 'bold' },
      { name: 'Extrabold', className: 'extrabold' },
      { name: 'Black', className: 'black' },
    ],
    styles: [
      { name: 'Normal', className: '' },
      { name: 'Italic', className: 'italic' },
    ],
  },
  { name: 'Open Sans', className: 'open-sans' },
];

function getVariant(variants?: Font[], variant?: Font) {
  return variant ? variant : Array.isArray(variants) ? variants[0] : defaultVariant;
}

function getFontClassName(font: Font, weight?: Font, style?: Font) {
  weight = getVariant(font.weights, weight);
  style = getVariant(font.styles, style);

  console.log(font, weight, style);

  return [font.className, weight.className, style.className].filter(Boolean).join('-');
}

type Props = {
  children: (fontClassName: Font['className']) => React.ReactNode;
  className?: string;
};

export function FontPicker({ children, className = '' }: Props) {
  const [family, setFamily] = useState<Font>(fonts[0]);
  const [weight, setWeight] = useState<Font | undefined>();
  const [style, setStyle] = useState<Font | undefined>();

  const fontClassName = getFontClassName(family, weight, style);

  useEffect(() => {
    setWeight(undefined);
    setStyle(undefined);
  }, [family]);

  return (
    <>
      <div className={className}>
        <div>
          {fonts.map(item => (
            <span
              key={item.className}
              onClick={() => setFamily(item)}
              className={`whitespace-nowrap cursor-pointer py-1 px-2 ${getFontClassName(item)} ${item === family ? 'bg-sky-100' : ''}`}
            >
              {item.name}
            </span>
          ))}
        </div>

        <div>
          {family.weights &&
            family.weights.map(item => (
              <span
                key={item.className}
                onClick={() => setWeight(item)}
                className={`whitespace-nowrap cursor-pointer py-1 px-2  ${getFontClassName(family, item)} ${item === weight ? 'bg-sky-100' : ''}`}
              >
                {item.name}
              </span>
            ))}
        </div>
        <div>
          {family.styles &&
            family.styles.map(item => (
              <span
                key={item.className}
                onClick={() => setStyle(item)}
                className={`whitespace-nowrap cursor-pointer py-1 px-2 ${getFontClassName(family, weight, item)} ${item === style ? 'bg-sky-100' : ''}`}
              >
                {item.name}
              </span>
            ))}
        </div>
      </div>
      {children(fontClassName)}
    </>
  );
}
