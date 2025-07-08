function ColorPicker({ selectedColor, setSelectedColor }) {
  const colors = [
    { name: 'Yellow Gold', code: '#E6CA97', key: 'yellow' },
    { name: 'White Gold', code: '#D9D9D9', key: 'white' },
    { name: 'Rose Gold', code: '#E1A4A9', key: 'rose' }
  ];

  return (
    <div className="color-picker">
      {colors.map((color) => (
        <button
          key={color.key}
          title={color.name}
          style={{
            backgroundColor: color.code,
            border: selectedColor === color.key ? '2px solid black' : '1px solid #ccc',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            margin: '3px',
            cursor: 'pointer'
          }}
          onClick={() => setSelectedColor(color.key)}
        />
      ))}
    </div>
  );
}

export default ColorPicker;